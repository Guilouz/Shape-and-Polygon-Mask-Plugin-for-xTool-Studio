import fs from 'fs';
import os from 'os';
import path from 'path';
import crypto from 'crypto';
import { execFileSync } from 'child_process';
import readline from 'readline';
import { fileURLToPath, pathToFileURL } from 'url';

const plugin_version = "5.3.0"

const IS_WIN = process.platform === 'win32';
const IS_MAC = process.platform === 'darwin';
const reset  = '\x1b[0m';
const yellow = '\x1b[1;33m';
const green  = '\x1b[1;32m';
const red    = '\x1b[1;31m';

/** Windows install locations (per-user first, then per-machine) */
function winResourceCandidates() {
  const localAppData = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local');
  const programFiles = process.env.PROGRAMFILES || 'C:\\Program Files';
  return [
    path.join(localAppData, 'Programs', 'xTool Studio', 'resources'),
    path.join(programFiles, 'xTool Studio', 'resources')
  ];
}

/* ───────────── Locating xTool Studio ─────────────
 * Priority: --path=...  >  XTOOL_RESOURCES_DIR  >  remembered choice (xtool-path.json)  >  auto-detection  >  prompt.
 * Accepted values: install folder, "resources" folder, app.asar, xTool Studio.exe (Windows) or xTool Studio.app (macOS).
 */
let resolvedResourcesDir = null;
let resourcesSource = '';
const savedPathFile = () => path.join(path.dirname(fileURLToPath(import.meta.url)), 'xtool-path.json');

/** Turns an install folder / resources folder / app.asar / .exe / .app into the "resources" folder holding app.asar (or null) */
function normalizeResourcesDir(input) {
  if (!input) return null;
  const raw = String(input).trim().replace(/^["']+|["']+$/g, '');
  if (!raw) return null;
  const p = path.resolve(raw);
  const tries = [];
  try {
    if (fs.statSync(p).isFile()) {
      tries.push(path.basename(p).toLowerCase() === 'app.asar' ? path.dirname(p) : path.join(path.dirname(p), 'resources'));
    }
  } catch { /* not an existing file */ }
  tries.push(p, path.join(p, 'resources'), path.join(p, 'Contents', 'Resources'));
  return tries.find(d => fs.existsSync(path.join(d, 'app.asar'))) || null;
}

/** Runs a short PowerShell snippet (Windows only) and returns its output lines */
function powershellLines(script) {
  try {
    const out = execFileSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', script], {
      encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 10000, windowsHide: true
    });
    return out.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  } catch {
    return [];
  }
}

/** Windows: every place where an xTool Studio installation can be found (existing app.asar only, no duplicates) */
function detectWindowsResourcesDirs() {
  const found = [];
  const add = candidate => {
    const d = normalizeResourcesDir(candidate);
    if (!d) return;
    let key = d;
    try { key = fs.realpathSync.native(d); } catch { /* keep as is */ }
    if (!found.some(f => f.key.toLowerCase() === key.toLowerCase())) found.push({ dir: d, key });
  };

  // 1. Default locations
  winResourceCandidates().forEach(add);
  const pf86 = process.env['PROGRAMFILES(X86)'];
  if (pf86) add(path.join(pf86, 'xTool Studio'));
  if (process.env.PROGRAMW6432) add(path.join(process.env.PROGRAMW6432, 'xTool Studio'));

  // 2. Installer registry entries (InstallLocation / DisplayIcon of the uninstall key)
  if (found.length === 0) {
    const reg = String.raw`$k='HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*','HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*','HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*';` +
      String.raw`Get-ItemProperty $k -ErrorAction SilentlyContinue | Where-Object { $_.DisplayName -like '*xTool Studio*' } | ForEach-Object { $_.InstallLocation; $_.DisplayIcon }`;
    for (const line of powershellLines(reg)) {
      const clean = line.replace(/^"+|"+$/g, '').replace(/",\s*-?\d+$/, '').replace(/,\s*-?\d+$/, '').replace(/^"+|"+$/g, '');
      add(clean);
      add(path.dirname(clean));
    }
  }

  // 3. Currently running xTool Studio process
  if (found.length === 0) {
    const run = String.raw`Get-Process -ErrorAction SilentlyContinue | Where-Object { $_.ProcessName -like '*xTool*' -and $_.Path } | ForEach-Object { $_.Path }`;
    for (const line of powershellLines(run)) add(path.dirname(line));
  }

  // 4. Last resort: usual folders at the root of every drive
  if (found.length === 0) {
    const roots = ['xTool Studio', 'Program Files\\xTool Studio', 'Program Files (x86)\\xTool Studio',
                   'Programs\\xTool Studio', 'Apps\\xTool Studio', 'Applications\\xTool Studio', 'Games\\xTool Studio'];
    for (const letter of 'CDEFGHIJKLMNOPQRSTUVWXYZ') {
      for (const r of roots) add(`${letter}:\\${r}`);
    }
  }
  return found.map(f => f.dir);
}

/** --path=<dir|app.asar|exe|app> (or "--path <value>") from the command line */
function pathFromArgs(argv) {
  for (let i = 2; i < argv.length; i++) {
    const m = /^--path=(.+)$/i.exec(argv[i]);
    if (m) return m[1];
    if (/^--path$/i.test(argv[i]) && argv[i + 1]) return argv[i + 1];
  }
  return null;
}

function rememberResourcesDir(dir) {
  try {
    fs.writeFileSync(savedPathFile(), JSON.stringify({ resourcesDir: dir }, null, 2));
    console.log(`💾 Location remembered in ${savedPathFile()} (delete this file to forget it).`);
  } catch { /* not critical */ }
}

/** Finds the "resources" folder of xTool Studio, or returns null when it cannot be located */
function resolveResourcesDir() {
  if (resolvedResourcesDir) return resolvedResourcesDir;
  const use = (dir, source) => { resolvedResourcesDir = dir; resourcesSource = source; return dir; };

  const argPath = pathFromArgs(process.argv);
  if (argPath) {
    const d = normalizeResourcesDir(argPath);
    if (!d) throw new Error(`❌ ${red}--path: no app.asar found in "${argPath}".${reset}`);
    if (d !== (readSavedResourcesDir() || '')) rememberResourcesDir(d);
    return use(d, '--path');
  }
  if (process.env.XTOOL_RESOURCES_DIR) {
    return use(normalizeResourcesDir(process.env.XTOOL_RESOURCES_DIR) || process.env.XTOOL_RESOURCES_DIR, 'XTOOL_RESOURCES_DIR');
  }
  const saved = readSavedResourcesDir();
  if (saved) return use(saved, 'saved');

  if (IS_MAC) {
    const bundle = findMacApp();
    return bundle ? use(path.join(bundle, 'Contents', 'Resources'), 'auto') : null;
  }
  if (IS_WIN) {
    const dirs = detectWindowsResourcesDirs();
    if (dirs.length > 1) {
      console.log(`⚠️  ${yellow}Several xTool Studio installations found — using ${dirs[0]}${reset}`);
      dirs.slice(1).forEach(d => console.log(`   also found: ${d}`));
      console.log('   (Use --path="<folder>" to choose another one.)');
    }
    return dirs.length ? use(dirs[0], 'auto') : null;
  }
  return null;
}

function readSavedResourcesDir() {
  try {
    const { resourcesDir } = JSON.parse(fs.readFileSync(savedPathFile(), 'utf8'));
    return resourcesDir && fs.existsSync(path.join(resourcesDir, 'app.asar')) ? resourcesDir : null;
  } catch {
    return null;
  }
}

/** If xTool Studio was not found automatically, asks the user for its folder (interactive terminals only) */
async function ensureXToolLocated() {
  if (resolveResourcesDir()) return;
  console.log(`⚠️  ${yellow}xTool Studio was not found automatically.${reset}`);
  if (!process.stdin.isTTY) return;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = q => new Promise(resolve => {
    rl.question(q, resolve);
    rl.once('close', () => resolve(null));
  });
  try {
    for (let attempt = 0; attempt < 3; attempt++) {
      const answer = await ask('Enter the installation path of xTool Studio. For example: D:\\My Programs\\xTool Studio\nPath (or Enter to cancel) : ');
      if (!answer || !answer.trim()) return;
      const dir = normalizeResourcesDir(answer);
      if (dir) {
        resolvedResourcesDir = dir;
        resourcesSource = 'prompt';
        console.log(`✅ Found: ${dir}`);
        rememberResourcesDir(dir);
        return;
      }
      console.log(`❌ ${red}No app.asar found in that location.${reset}\n`);
    }
  } finally {
    rl.close();
  }
}

/** Hint shown when xTool Studio cannot be located */
function notFoundHint() {
  return IS_MAC
    ? '   Set XTOOL_APP="/path/to/xTool Studio.app" or run with --path="/path/to/xTool Studio.app" if it is installed elsewhere.'
    : '   If xTool Studio is installed elsewhere, please enter the installation path.';
}

const BLOCK_SIZE = 4 * 1024 * 1024; // 4 MB ASAR integrity block size
const PLISTBUDDY = '/usr/libexec/PlistBuddy';

/** macOS: locate "xTool Studio.app" (override with XTOOL_APP=/path/to/xTool\ Studio.app). */
function findMacApp() {
  const candidates = [
    process.env.XTOOL_APP,
    '/Applications/xTool Studio.app',
    path.join(os.homedir(), 'Applications', 'xTool Studio.app')
  ].filter(Boolean);

  for (const dir of ['/Applications', path.join(os.homedir(), 'Applications')]) {
    try {
      for (const name of fs.readdirSync(dir)) {
        if (/^xtool studio.*\.app$/i.test(name)) candidates.push(path.join(dir, name));
      }
    } catch { /* directory may not exist */ }
  }

  for (const c of candidates) {
    if (fs.existsSync(path.join(c, 'Contents', 'Resources', 'app.asar'))) return c;
  }
  return null;
}

/* Plugin Language */

const LANGS = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' },
  { code: 'de', name: 'Deutsch' }
];
const SUPPORTED_LANGS = LANGS.map(l => l.code);
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));

/** 
 * The installed xTool Studio version is read from package.json inside app.asar.
 * (Legacy layout with plugin-<lang>.mjs directly next to patcher.mjs is still supported.)
 */
const parseVer = v => String(v).split('.').map(n => parseInt(n, 10) || 0);
function cmpVer(a, b) {
  const x = parseVer(a), y = parseVer(b);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const d = (x[i] || 0) - (y[i] || 0);
    if (d) return d;
  }
  return 0;
}

/** Version folders available next to the patcher, sorted ascending */
function listVersionDirs() {
  try {
    return fs.readdirSync(SCRIPT_DIR, { withFileTypes: true })
      .filter(d => d.isDirectory() && /^\d+(\.\d+)*$/.test(d.name))
      .map(d => d.name)
      .sort(cmpVer);
  } catch {
    return [];
  }
}

/**
 * Finds the plugin folder matching an xTool Studio version.
 * Returns { dir, folder, exact } or null when nothing usable exists.
 *  - exact folder (e.g. "1.10.2") if present
 *  - otherwise the closest OLDER folder (exact = false) — the caller decides whether to accept it
 *  - legacy flat layout if there are no version folders at all
 */
function resolvePluginDir(version) {
  const dirs = listVersionDirs();
  if (dirs.length === 0) {
    const legacy = LANGS.some(l => fs.existsSync(path.join(SCRIPT_DIR, `plugin-${l.code}.mjs`)));
    return legacy ? { dir: SCRIPT_DIR, folder: '(legacy)', exact: true } : null;
  }
  if (version && dirs.includes(version)) {
    return { dir: path.join(SCRIPT_DIR, version), folder: version, exact: true };
  }
  const older = version ? dirs.filter(d => cmpVer(d, version) <= 0) : dirs;
  const pick = older.length ? older[older.length - 1] : null;
  return pick ? { dir: path.join(SCRIPT_DIR, pick), folder: pick, exact: false } : null;
}

/** Asks a yes/no question (default: no). Non-interactive terminals => false. */
async function confirmYesNo(question) {
  if (!process.stdin.isTTY) return false;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise(resolve => {
    rl.question(question, resolve);
    rl.once('close', () => resolve(null));
  });
  rl.close();
  console.log();
  return ['y', 'yes', 'o', 'oui'].includes(String(answer ?? '').replace(/\s+/g, '').toLowerCase());
}

/** Picks the plugin folder for this xTool Studio version (asks before using a non-exact one) */
async function selectPluginDir(version) {
  const found = resolvePluginDir(version);
  const available = listVersionDirs();
  if (!found) {
    throw new Error(
      `❌ ${red}Plugin is not compatible with xTool Studio ${version ?? '(unknown version)'}.${reset}\n` +
      `   Available versions: ${available.length ? available.join(', ') : '(none)'}\n`
    );
  }
  if (!found.exact) {
    console.log(`⚠️  ${yellow}No plugin for xTool Studio ${version ?? '(unknown)'} — closest available: ${found.folder}.${reset}`);
    console.log(`   The patch checks every target and aborts without writing anything if the code does not match.`);
    const ok = process.env.XTOOL_PLUGIN_ALLOW_FALLBACK === '1' || await confirmYesNo(`Try with the plugins for "${found.folder}"? (y/N) : `);
    if (!ok) throw new Error(`❌ ${red}Installation cancelled: no plugin for xTool Studio ${version ?? '(unknown)'}.${reset}\n`);
  }
  return found;
}

/** Loads plugin-<lang>.mjs from a plugin folder */
async function loadPlugin(lang, dir = SCRIPT_DIR) {
  const file = path.join(dir, `plugin-${lang}.mjs`);
  if (!fs.existsSync(file)) {
    throw new Error(`Plugin file not found: ${path.relative(SCRIPT_DIR, file) || file}`);
  }
  return import(pathToFileURL(file).href);
}

/** Language from the command line */
function langFromArgs(argv) {
  for (const a of argv.slice(3)) {
    const m = /^--lang=(\w+)$/i.exec(a);
    const v = (m ? m[1] : a).toLowerCase();
    if (SUPPORTED_LANGS.includes(v)) return v;
  }
  const env = (process.env.XTOOL_PLUGIN_LANG || '').toLowerCase();
  return SUPPORTED_LANGS.includes(env) ? env : null;
}

/** Asks the user which language to install */
async function askLang() {
  let sys = 'en';
  try {
    const code = Intl.DateTimeFormat().resolvedOptions().locale.toLowerCase().slice(0, 2);
    if (SUPPORTED_LANGS.includes(code)) sys = code;
  } catch { /* keep default */ }
  if (!process.stdin.isTTY) return sys;

  console.log('Select the plugin language:');
  console.log();
  LANGS.forEach((l, i) => console.log(`  ${yellow}${i + 1}${reset}) ${l.name}`));
  console.log(`  ${yellow}0${reset}) Quit`);
  const def = String(SUPPORTED_LANGS.indexOf(sys) + 1);
  console.log();
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = q => new Promise(resolve => {
    rl.question(q, resolve);
    rl.once('close', () => resolve(null));
  });

  let chosen = null;
  while (!chosen) {
    const answer = await ask('Type your choice: ');
    if (answer === null) { chosen = sys; break; }
    const t = answer.trim().toLowerCase();
    if (t === '0') { chosen = 'quit'; break; }
    const byNumber = /^\d+$/.test(t) ? LANGS[Number(t) - 1] : null;
    if (byNumber) chosen = byNumber.code;
    else if (SUPPORTED_LANGS.includes(t)) chosen = t;
    else {
      console.log();
      console.log(`❌ ${red}Invalid choice! Please type a number from 1 to ${LANGS.length}, or 0 to quit.${reset}\n`);
    }
  }
  rl.close();
  console.log();
  return chosen === 'quit' ? null : chosen;
}


/** Reads the Chromium Pickle ASAR header from an open file descriptor or path. */
export function readAsarHeader(asarPath) {
  const fd = fs.openSync(asarPath, 'r');
  try {
    const stat = fs.fstatSync(fd);
    const prefix = Buffer.alloc(16);
    fs.readSync(fd, prefix, 0, 16, 0);

    const hdrSize = prefix.readUInt32LE(4);
    const jsonLen = prefix.readUInt32LE(12);
    const baseOffset = 8 + hdrSize;

    const jsonBuf = Buffer.alloc(jsonLen);
    fs.readSync(fd, jsonBuf, 0, jsonLen, 16);
    const header = JSON.parse(jsonBuf.toString('utf8'));

    return {
      fileSize: stat.size,
      hdrSize,
      jsonLen,
      baseOffset,
      payloadSize: stat.size - baseOffset,
      header
    };
  } finally {
    fs.closeSync(fd);
  }
}

/**
 * Builds a 16-byte Chromium Pickle header + 4-byte aligned JSON buffer for ASAR.
 * Also returns the SHA256 of the (unpadded) header JSON, which is what
 * Electron's ElectronAsarIntegrity (macOS Info.plist) validates.
 */
export function buildAsarHeaderBuffer(headerObj) {
  const jsonStr = JSON.stringify(headerObj);
  const jsonBuf = Buffer.from(jsonStr, 'utf8');
  const jsonLen = jsonBuf.length;
  // Pad to 4-byte boundary
  const paddedJsonLen = Math.ceil(jsonLen / 4) * 4;
  const picklePayloadSize = 4 + paddedJsonLen;
  const hdrSize = 4 + picklePayloadSize;
  const totalHeaderBuf = Buffer.alloc(8 + hdrSize, 0);

  totalHeaderBuf.writeUInt32LE(4, 0);
  totalHeaderBuf.writeUInt32LE(hdrSize, 4);
  totalHeaderBuf.writeUInt32LE(picklePayloadSize, 8);
  totalHeaderBuf.writeUInt32LE(jsonLen, 12);
  jsonBuf.copy(totalHeaderBuf, 16);

  return {
    buffer: totalHeaderBuf,
    baseOffset: 8 + hdrSize,
    headerHash: crypto.createHash('sha256').update(jsonBuf).digest('hex')
  };
}

/** Computes ASAR SHA256 integrity object for a Buffer */
export function computeIntegrity(buf) {
  const fullHash = crypto.createHash('sha256').update(buf).digest('hex');
  const blocks = [];
  for (let offset = 0; offset < buf.length; offset += BLOCK_SIZE) {
    const slice = buf.subarray(offset, Math.min(offset + BLOCK_SIZE, buf.length));
    blocks.push(crypto.createHash('sha256').update(slice).digest('hex'));
  }
  return {
    algorithm: 'SHA256',
    hash: fullHash,
    blockSize: BLOCK_SIZE,
    blocks
  };
}

/** Finds the editor router.*.js entry inside the ASAR header */
export function findRouterEntry(header) {
  const jsFiles = header?.files?.['.vite']?.files?.['renderer']?.files?.['editor']?.files?.['static']?.files?.['js']?.files;
  if (!jsFiles) {
    throw new Error('❌ ${red}Could not find .vite/renderer/editor/static/js directory inside app.asar.${reset}');
  }
  const routerName = Object.keys(jsFiles).find(name => /^router\..*\.js$/.test(name));
  if (!routerName) {
    throw new Error('❌ ${red}Could not find router.*.js inside app.asar.${reset}');
  }
  return {
    fileName: routerName,
    entry: jsFiles[routerName]
  };
}

/** Reads a specific file entry from an ASAR archive into a Buffer */
export function readFileFromAsar(asarPath, baseOffset, entry) {
  const fd = fs.openSync(asarPath, 'r');
  try {
    const buf = Buffer.alloc(entry.size);
    fs.readSync(fd, buf, 0, entry.size, baseOffset + Number(entry.offset));
    return buf;
  } finally {
    fs.closeSync(fd);
  }
}

/** Reads the xTool Studio version from package.json inside an ASAR (null if unavailable) */
export function readAsarVersion(asarPath, info = null) {
  try {
    const hdr = (info || readAsarHeader(asarPath));
    const entry = hdr.header?.files?.['package.json'];
    if (!entry || entry.offset === undefined) return null;
    const pkg = JSON.parse(readFileFromAsar(asarPath, hdr.baseOffset, entry).toString('utf8'));
    return typeof pkg.version === 'string' ? pkg.version : null;
  } catch {
    return null;
  }
}

/** Checks if xTool Studio is currently running (Windows + macOS) */
function isXToolRunning() {
  try {
    if (IS_WIN) {
      const out = execFileSync('tasklist', ['/FI', 'IMAGENAME eq xTool Studio.exe', '/NH'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore']
      });
      return out.toLowerCase().includes('xtool studio.exe');
    }
    if (IS_MAC) {
      // pgrep exits with status 1 (-> throws) when nothing matches.
      const out = execFileSync('pgrep', ['-f', '/Contents/MacOS/xTool Studio'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore']
      });
      return out.trim().length > 0;
    }
    return false;
  } catch {
    return false;
  }
}

/** Stream-copies a byte range from srcPath to dstFd */
function copyFileRangeSync(srcPath, srcOffset, length, dstFd) {
  const srcFd = fs.openSync(srcPath, 'r');
  const chunkSize = 4 * 1024 * 1024;
  const buf = Buffer.allocUnsafe(chunkSize);
  let remaining = length;
  let readPos = srcOffset;

  try {
    while (remaining > 0) {
      const toRead = Math.min(chunkSize, remaining);
      const bytesRead = fs.readSync(srcFd, buf, 0, toRead, readPos);
      if (bytesRead <= 0) break;
      fs.writeSync(dstFd, buf, 0, bytesRead);
      readPos += bytesRead;
      remaining -= bytesRead;
    }
  } finally {
    fs.closeSync(srcFd);
  }
}

function getPaths() {
  let resourcesDir;
  let appBundle = null;

  resourcesDir = resolveResourcesDir();
  if (!resourcesDir) {
    // Not found: return the default location so that the callers can report a clear error
    resourcesDir = IS_MAC
      ? path.join('/Applications/xTool Studio.app', 'Contents', 'Resources')
      : winResourceCandidates()[0];
  }

  if (IS_MAC && !appBundle) {
    const maybe = path.resolve(resourcesDir, '..', '..');
    if (maybe.endsWith('.app')) appBundle = maybe;
  }

  return {
    resourcesDir,
    appBundle,
    asarPath: path.join(resourcesDir, 'app.asar'),
    backupPath: path.join(resourcesDir, 'app.asar.bak'),
    tmpPath: path.join(resourcesDir, 'app.asar.tmp'),
    plistPath: appBundle ? path.join(appBundle, 'Contents', 'Info.plist') : null,
    plistBackupPath: path.join(resourcesDir, 'Info.plist.bak')
  };
}

/**
 * If the app enables Electron's embedded ASAR integrity check, Info.plist holds
 * ElectronAsarIntegrity -> Resources/app.asar -> hash (SHA256 of the header JSON).
 * Update it so the patched archive still passes validation.
 */
function updateMacAsarIntegrity(plistPath, headerHash) {
  if (!plistPath || !fs.existsSync(plistPath)) return;
  try {
    execFileSync(PLISTBUDDY, ['-c', 'Print :ElectronAsarIntegrity', plistPath], { stdio: 'pipe' });
  } catch {
    console.log('ℹ️  No ElectronAsarIntegrity entry in Info.plist — nothing to update.');
    return;
  }
  try {
    execFileSync(
      PLISTBUDDY,
      ['-c', `Set :ElectronAsarIntegrity:Resources/app.asar:hash ${headerHash}`, plistPath],
      { stdio: 'pipe' }
    );
    console.log('🔐 Updated ElectronAsarIntegrity hash in Info.plist.');
  } catch (err) {
    console.warn(`⚠️  Could not update ElectronAsarIntegrity in Info.plist: ${err.message}`);
  }
}

/**
 * Modifying anything inside the .app invalidates its code signature.
 * Re-sign it ad hoc (local signature) and clear the quarantine flag.
 */
function resignMacApp(appBundle) {
  if (!appBundle) return;
  console.log('✍️  Re-signing xTool Studio.app (ad-hoc signature, can take a few seconds)...');
  try {
    execFileSync('xattr', ['-dr', 'com.apple.quarantine', appBundle], { stdio: 'ignore' });
  } catch { /* attribute may not be present */ }
  try {
    execFileSync('codesign', ['--force', '--deep', '--sign', '-', appBundle], { stdio: 'pipe' });
    console.log('✅ App re-signed!');
  } catch (err) {
    console.warn(`⚠️  Automatic re-signing failed: ${err.message}`);
    console.warn(`   Run manually in Terminal:\n   codesign --force --deep --sign - "${appBundle}"`);
  }
}

function permissionHint(err) {
  const target = err && err.path ? ` (${err.path})` : '';
  if (IS_MAC) {
    return [
      '',
      `🔒 macOS refused write access to the xTool Studio app bundle${target}.`,
      '   Fix (pick one):',
      '   • System Settings -> Privacy & Security -> App Management (or Full Disk Access):',
      '     enable your Terminal app, then quit and reopen Terminal and retry.'
    ].join('\n');
  }
  return [
    '',
    `🔒 Permission denied${target}.`,
    '   Fix (pick one):',
    '   • Close xTool Studio completely (check the system tray / Task Manager), then retry.',
    '   • Run the script as Administrator (right-click -> Run as administrator).',
    '     This is usually needed when xTool Studio is installed in Program Files.'
  ].join('\n');
}

/** Blocks until xTool Studio is closed, telling the user what to do */
async function waitForXToolToClose(action) {
  let warned = false;
  while (isXToolRunning()) {
    if (!warned) {
      console.log(`\n⏳ xTool Studio is currently running. Please close it.`);
      console.log(`   The ${action} will continue automatically as soon as it closes!`);
      warned = true;
    }
    await new Promise(r => setTimeout(r, 1000));
  }
}

/** Commands */
export async function checkStatus() {
  const { asarPath, backupPath, plistBackupPath } = getPaths();
  if (!fs.existsSync(asarPath)) {
  	console.error(`❌ ${red}xTool Studio app.asar not found at: ${asarPath}${reset}`);
    console.error(notFoundHint());
    process.exit(1);
  }
  const info = readAsarHeader(asarPath);
  const xtoolVersion = readAsarVersion(asarPath, info);
  const resolved = resolvePluginDir(xtoolVersion);
  const { fileName, entry } = findRouterEntry(info.header);
  const routerBuf = readFileFromAsar(asarPath, info.baseOffset, entry);
  const routerCode = routerBuf.toString('utf8');

  // The marker is "/* XTOOL_MASK_PLUGIN_<LANG> */" in every plugin version
  const markerMatch = /XTOOL_MASK_PLUGIN_([A-Z]{2})/.exec(routerCode);
  const installedPlugin = markerMatch ? LANGS.find(l => l.code === markerMatch[1].toLowerCase()) : null;

  const isPatched = Boolean(markerMatch);
  const installedLang = installedPlugin?.name ?? (markerMatch ? markerMatch[1] : null);
  const hasBackup = fs.existsSync(backupPath);
  const backupVersion = hasBackup ? readAsarVersion(backupPath) : null;

  const readablePlatforms = {
    win32: 'Windows',
    darwin: 'macOS',
    linux: 'Linux'
  };
  const platformName = readablePlatforms[process.platform] || process.platform;

  console.log(`💻 Platform       → ${platformName} (${process.arch})`);
  console.log(`🧩 xTool Studio   → v${xtoolVersion ?? 'unknown'}`);
  console.log(`🟢 Node Version   → ${process.version}`);
  console.log(`📁 ASAR Archive   → ${asarPath}`);
  console.log(`📍 Target Module  → ${fileName} (${entry.size} bytes)`);
  console.log(`💾 ASAR Backup    → ${hasBackup ? 'YES' + (backupVersion ? ' - v' + backupVersion : '') + ' (' + backupPath + ')' : 'NO'}`);
  if (hasBackup && backupVersion && xtoolVersion && backupVersion !== xtoolVersion && !isPatched) {
    console.log(`   ⚠️  ${yellow}The backup comes from another xTool Studio version; it will be refreshed at the next install.${reset}`);
  }
  if (IS_MAC) {
    console.log(`📄 Plist Backup   → ${fs.existsSync(plistBackupPath) ? 'YES (' + plistBackupPath + ')' : 'NO'}`);
  }
  console.log(`🔖 Plugin Version → ${plugin_version}`);
  const pluginStatusText = isPatched ? '✅ INSTALLED' : '⚪ NOT INSTALLED';
  const statusDisplay = installedLang ? `${pluginStatusText} - ${installedLang}` : pluginStatusText;
  console.log(`📦 Plugin Status  → ${statusDisplay}`);
  return { isPatched, hasBackup };
}

export async function installPlugin(lang = 'en') {
  const { asarPath, backupPath, tmpPath, appBundle, plistPath, plistBackupPath } = getPaths();
  if (!fs.existsSync(asarPath)) {
    throw new Error(
      `❌ ${red}xTool Studio not found at: ${asarPath}${reset}\n${notFoundHint()}`
    );
  }

  // Detect the installed xTool Studio version and pick the matching plugin folder
  const xtoolVersion = readAsarVersion(asarPath);
  console.log(`🧩 xTool Studio version detected: ${xtoolVersion ?? 'unknown'}`);
  const pluginDir = await selectPluginDir(xtoolVersion);
  console.log(`📂 Using plugin for version ${pluginDir.folder}`);
  const { applyCircleMaskPatch, PLUGIN_MARKER } = await loadPlugin(lang, pluginDir.dir);

  // Wait for xTool Studio to be closed
  await waitForXToolToClose('installation');

  console.log('🔍 Checking xTool Studio archive...');
  const currentInfo = readAsarHeader(asarPath);
  const { entry: curRouterEntry } = findRouterEntry(currentInfo.header);
  const curRouterCode = readFileFromAsar(asarPath, currentInfo.baseOffset, curRouterEntry).toString('utf8');

  const alreadyPatched = /XTOOL_MASK_PLUGIN_[A-Z]{2}/.test(curRouterCode);
  const backupIsStale = () => {
    const bakVersion = readAsarVersion(backupPath);
    return Boolean(bakVersion && xtoolVersion && bakVersion !== xtoolVersion);
  };

  if (!fs.existsSync(backupPath)) {
    if (alreadyPatched) {
      throw new Error(`❌ ${red}app.asar is already patched, but app.asar.bak backup was not found.${reset}`);
    }
    console.log(`💾 Creating backup of original app.asar -> ${backupPath} ...`);
    fs.copyFileSync(asarPath, backupPath);
    if (IS_MAC && plistPath && fs.existsSync(plistPath) && !fs.existsSync(plistBackupPath)) {
      fs.copyFileSync(plistPath, plistBackupPath);
    }
  } else if (backupIsStale()) {
    // xTool Studio was updated since the backup was made: the old backup must NOT be reused,
    // otherwise the install would silently downgrade the application.
    if (alreadyPatched) {
      throw new Error(
        `❌ ${red}app.asar is patched but its backup comes from another xTool Studio version (${readAsarVersion(backupPath)}).${reset}\n` +
        `   Reinstall xTool Studio, then run the installer again.\n`
      );
    }
    console.log(`♻️  xTool Studio was updated (backup v${readAsarVersion(backupPath)} → installed v${xtoolVersion}). Refreshing backup...`);
    fs.copyFileSync(asarPath, backupPath);
    if (IS_MAC && plistPath && fs.existsSync(plistPath)) {
      fs.copyFileSync(plistPath, plistBackupPath);
    }
  } else {
    console.log(`💾 Using existing clean backup: ${backupPath}`);
  }

  // Read clean unpatched archive from backupPath
  const baseInfo = readAsarHeader(backupPath);
  const { fileName, entry } = findRouterEntry(baseInfo.header);
  const originalBuf = readFileFromAsar(backupPath, baseInfo.baseOffset, entry);
  const originalCode = originalBuf.toString('utf8');

  console.log(`🛠️  Applying Shape & Polygon Mask patch (${lang.toUpperCase()}) to ${fileName}...`);
  const patchedCode = applyCircleMaskPatch(originalCode);
  const patchedBuf = Buffer.from(patchedCode, 'utf8');

  // Verify ES module syntax before writing to ASAR
  const syntaxCheckFile = path.join(os.tmpdir(), `.xtool-syntax-check-${process.pid}.mjs`);
  try {
    fs.writeFileSync(syntaxCheckFile, patchedBuf);
    execFileSync(process.execPath, ['--check', syntaxCheckFile], { stdio: 'pipe' });
    console.log('✅ JavaScript ES module syntax check passed!');
  } finally {
    if (fs.existsSync(syntaxCheckFile)) {
      fs.unlinkSync(syntaxCheckFile);
    }
  }

  // Append patched router.*.js at the end of original ASAR payload
  const newOffset = String(baseInfo.payloadSize);
  entry.size = patchedBuf.length;
  entry.offset = newOffset;
  entry.integrity = computeIntegrity(patchedBuf);

  const { buffer: newHeaderBuf, headerHash } = buildAsarHeaderBuffer(baseInfo.header);

  console.log('📦 Building updated app.asar archive...');
  const outFd = fs.openSync(tmpPath, 'w');
  try {
    fs.writeSync(outFd, newHeaderBuf, 0, newHeaderBuf.length);
    copyFileRangeSync(backupPath, baseInfo.baseOffset, baseInfo.payloadSize, outFd);
    fs.writeSync(outFd, patchedBuf, 0, patchedBuf.length);
  } finally {
    fs.closeSync(outFd);
  }

  let attempts = 0;
  let warnedLock = false;
  while (true) {
    await waitForXToolToClose('installation');
    try {
      fs.renameSync(tmpPath, asarPath);
      break;
    } catch (err) {
      const retryable = IS_WIN && ['EPERM', 'EACCES', 'EBUSY'].includes(err.code) && ++attempts < 10;
      if (!retryable) {
        try { fs.unlinkSync(tmpPath); } catch { /* ignore */ }
        throw err;
      }
      if (!warnedLock) {
        console.log('\n⏳ Waiting for Windows to release app.asar...');
        warnedLock = true;
      }
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  if (IS_MAC) {
    updateMacAsarIntegrity(plistPath, headerHash);
    resignMacApp(appBundle);
  }

  console.log('🎉 Shape & Polygon Mask Plugin has been successfully installed into xTool Studio!');
  console.log('👉 Open xTool Studio -> Add an image -> Smart Mask -> Extraction methods -> Mask.');
  console.log('☕ Enjoying the plugin? Consider supporting future development with a donation :)');
}

export async function uninstallPlugin() {
  const { asarPath, backupPath, appBundle, plistPath, plistBackupPath } = getPaths();
  
  if (!fs.existsSync(backupPath)) {
    console.log('ℹ️ Backup file (app.asar.bak) not found — original archive is already active.');
    return;
  }

  // After an xTool Studio update the backup belongs to the previous version: restoring it would downgrade the app.
  if (fs.existsSync(asarPath)) {
    const curVersion = readAsarVersion(asarPath);
    const bakVersion = readAsarVersion(backupPath);
    if (curVersion && bakVersion && curVersion !== bakVersion) {
      console.log(`ℹ️ app.asar.bak comes from xTool Studio ${bakVersion}, but ${curVersion} is installed.`);
      console.log('   xTool Studio was updated, so the plugin is no longer in the installed archive — nothing to restore.');
      return;
    }
  }

  if (process.stdin.isTTY) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const ask = q => new Promise(resolve => {
      rl.question(q, resolve);
      rl.once('close', () => resolve(null));
    });

    let confirmed = false;
    while (true) {
      const answer = await ask('Uninstall the plugin and restore the original xTool Studio? (y/n) : ');
      if (answer === null) { confirmed = false; break; }
      const t = answer.replace(/\s+/g, '').toLowerCase();
      if (['y', 'yes'].includes(t)) {
        confirmed = true;
        break;
      } else if (['n', 'no'].includes(t)) {
        confirmed = false;
        break;
      } else {
        console.log(`\n❌ ${red}Invalid choice! Please type y or n.${reset}\n`);
      }
    }
    rl.close();
    console.log();

    if (!confirmed) {
      console.log(`⚠️  ${yellow}Uninstall cancelled! Nothing was changed.${reset}`);
      return;
    }
  }

  await waitForXToolToClose('uninstallation');
  console.log('🔄 Restoring original app.asar...');
  fs.copyFileSync(backupPath, asarPath);

  if (IS_MAC) {
    if (plistPath && fs.existsSync(plistBackupPath)) {
      console.log('🔄 Restoring original Info.plist...');
      fs.copyFileSync(plistBackupPath, plistPath);
    }
    resignMacApp(appBundle);
    console.log('ℹ️  The app is now signed locally (ad-hoc).');
  }
  console.log('✅ Original xTool Studio state has been restored successfully!');
  if (IS_MAC) {
    console.log('   To get xTool\'s original signature back, reinstall xTool Studio.');
  }
}

function isMainModule() {
  if (!process.argv[1]) return false;
  // Normalise a path for comparison: real path, and case-insensitive on Windows
  const norm = p => {
    let r;
    try { r = fs.realpathSync.native(p); } catch { r = path.resolve(p); }
    return IS_WIN ? r.toLowerCase() : r;
  };
  try {
    const self = fileURLToPath(import.meta.url);
    const arg = path.resolve(process.argv[1]);
    return norm(self) === norm(arg) || path.basename(self).toLowerCase() === path.basename(arg).toLowerCase();
  } catch {
    return false;
  }
}

if (isMainModule()) {
  const cmd = (process.argv[2] || 'status').toLowerCase();
  (async () => {
    try {
      await ensureXToolLocated();
      if (cmd === 'install') {
        const lang = langFromArgs(process.argv) || await askLang();
        if (!lang) {
          console.log(`⚠️  ${yellow}Installation cancelled. Nothing was changed.${reset}`);
          return;
        }
        await installPlugin(lang);
      } else if (cmd === 'uninstall' || cmd === 'restore') {
        await uninstallPlugin();
      } else {
        await checkStatus();
      }
    } catch (err) {
      console.error(`\n❌ ${red}Error: ${err.message}${reset}`);
      if (err.code === 'EACCES' || err.code === 'EPERM') {
        console.error(permissionHint(err));
      }
      process.exit(1);
    }
  })();
}
