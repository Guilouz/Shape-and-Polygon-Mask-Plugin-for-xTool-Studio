@echo off
for /F %%a in ('echo prompt $E ^| cmd') do set "ESC=%%a"
set "WHITE=%ESC%[0m"
set "YELLOW=%ESC%[1;33m"
set "GREEN=%ESC%[1;32m"
set "RED=%ESC%[1;31m"
chcp 65001 >nul
pushd "%~dp0"

if not exist "%~dp0node\node.exe" (
  cls
  echo ──────────────────────────────────────────────
  echo   %GREEN%xTool Studio - Shape ^& Polygon Mask Plugin%WHITE%
  echo ──────────────────────────────────────────────
  echo.
  echo 🟢 Node.js not found locally.
  
  if not exist "%~dp0node" mkdir "%~dp0node"
  if not exist "%~dp0tmp" mkdir "%~dp0tmp"
  
  powershell -NoProfile -Command ^
    "$ProgressPreference = 'SilentlyContinue';" ^
    "$arch = if ($env:PROCESSOR_ARCHITECTURE -eq 'ARM64') { 'arm64' } else { 'x64' };" ^
    "$html = (Invoke-WebRequest -Uri 'https://nodejs.org/dist/latest/' -UseBasicParsing).Content;" ^
    "if ($html -match 'node-v[0-9]+\.[0-9]+\.[0-9]+-win-' + $arch + '\.zip') {" ^
    "    $filename = $Matches[0];" ^
    "    $url = 'https://nodejs.org/dist/latest/' + $filename;" ^
    "    Write-Host '';" ^
    "    Write-Host ('📥 Download from ' + $url + ' ...');" ^
    "    Invoke-WebRequest -Uri $url -OutFile 'tmp\node.zip' -UseBasicParsing;" ^
    "}"
  
  if not exist "tmp\node.zip" (
      echo.
      echo ❌ %RED%Automatic download of Node.js failed!%WHITE%
      timeout /t 3 >nul
  )
  
  powershell -NoProfile -Command ^
    "$ProgressPreference = 'SilentlyContinue';" ^
    "Expand-Archive -Path 'tmp\node.zip' -DestinationPath 'tmp\ext' -Force;" ^
    "$exe = Get-ChildItem -Path 'tmp\ext' -Filter 'node.exe' -Recurse | Select-Object -First 1;" ^
    "Copy-Item $exe.FullName -Destination 'node\node.exe' -Force;" >nul 2>&1
  
  if exist "tmp" rmdir /s /q "tmp"

  echo.
  echo ✅ Node.js successfully downloaded!
  timeout /t 2 >nul
)

if "%~1"=="confirm" (
  if "%~2"=="invalid" (
    echo.
    echo ❌ Invalid choice! Please type y or n.
    echo.
  )
  set "ANSWER="
  set /p "ANSWER=Uninstall the plugin and restore the original xTool Studio? (y/n) : "
  setlocal enabledelayedexpansion
  for %%K in (y yes) do if /i "!ANSWER: =!"=="%%K" exit /b 0
  for %%K in (n no) do if /i "!ANSWER: =!"=="%%K" exit /b 1
  endlocal
  call "%~f0" confirm invalid
  exit /b
)

cls
echo ────────────────────────────────────────────────
echo   %GREEN%Shape ^& Polygon Mask Plugin for xTool Studio%WHITE%
echo ────────────────────────────────────────────────
echo.
echo   %YELLOW%1%WHITE%^) Install plugin
echo   %YELLOW%2%WHITE%^) Uninstall plugin
echo   %YELLOW%3%WHITE%^) Check plugin status
echo   %YELLOW%0%WHITE%^) Quit
echo.
if "%~1"=="invalid" (
  echo ❌ %RED%Invalid choice! Please type a number from 1 to 3, or 0 to quit.%WHITE%
  echo.
)
set "CHOICE="
set /p "CHOICE=Type your choice : "
setlocal enabledelayedexpansion
set "VALID="
for %%K in (0 1 2 3) do if "!CHOICE: =!"=="%%K" set "VALID=%%K"
endlocal & set "VALID=%VALID%"
echo.
if not defined VALID (
  call "%~f0" invalid
  exit /b
)
set "CHOICE=%VALID%"
if "%CHOICE%"=="0" exit /b 0
cls
if "%CHOICE%"=="1" (
  echo ────────────────────────────────────────────────────────────
  echo   %GREEN%Shape ^& Polygon Mask Plugin for xTool Studio - Installer%WHITE%
  echo ────────────────────────────────────────────────────────────
  echo.
)
if "%CHOICE%"=="2" (
  echo ──────────────────────────────────────────────────────────────
  echo   %GREEN%Shape ^& Polygon Mask Plugin for xTool Studio - Uninstaller%WHITE%  
  echo ──────────────────────────────────────────────────────────────
  echo.
)
if "%CHOICE%"=="3" (
  echo ─────────────────────────────────────────────────────────
  echo   %GREEN%Shape ^& Polygon Mask Plugin for xTool Studio - Status%WHITE% 
  echo ─────────────────────────────────────────────────────────
  echo.
)

set "NODE_EXE="
if exist "%~dp0node\node.exe" (
  "%~dp0node\node.exe" --version >nul 2>nul
  if errorlevel 1 (
    echo ❌ %RED%Node.js cannot run on this PC ^(wrong architecture? Intel/AMD = x64, Windows on ARM = arm64^).%WHITE%
  ) else (
    set "NODE_EXE=%~dp0node\node.exe"
  )
)
if not defined NODE_EXE (
  where node >nul 2>nul && set "NODE_EXE=node"
)
if not defined NODE_EXE (
  echo ❌ %RED%Node.js not found!%WHITE%
  echo Put node.exe for your PC in the node folder,
  echo or install v18 or newer from https://nodejs.org ^(or: winget install OpenJS.NodeJS.LTS^).
  echo.
  echo Press any key to close...
  pause >nul
  exit 1
)

if "%CHOICE%"=="1" (
  "%NODE_EXE%" "%~dp0plugin\patcher.mjs" install
)
if "%CHOICE%"=="2" (
  "%NODE_EXE%" "%~dp0plugin\patcher.mjs" uninstall
)
if "%CHOICE%"=="3" (
  "%NODE_EXE%" "%~dp0plugin\patcher.mjs" status
)

echo.
echo Press any key to close...
pause >nul
popd
exit /b 0
