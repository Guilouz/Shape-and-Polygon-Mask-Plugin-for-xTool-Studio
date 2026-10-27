#!/bin/bash
cd "$(dirname "$0")" || exit 1

white=`echo -en "\033[m"`
yellow=`echo -en "\033[1;33m"`
green=`echo -en "\033[01;32m"`
red=`echo -en "\033[01;31m"`

close_window() {
  MYTTY="$(tty)"
  ( sleep 1; osascript -e "tell application \"Terminal\" to close (every window whose tty of selected tab is \"$MYTTY\")" ) >/dev/null 2>&1 &
}

finish() {
  echo
  read -n 1 -s -r -p "Press any key to close..."
  echo
  close_window
  exit "${1:-0}"
}

banner() {
  local text="  Shape & Polygon Mask Plugin for xTool Studio${1:+ - $1}  "
  local bar
  bar="$(printf '%*s' "${#text}" '' | tr ' ' '─')"
  echo "$bar"
  echo "${green}$text${white}"
  echo "$bar"
  echo
}

if [ ! -f "./node/node" ]; then
  clear
  banner ""
  echo "🟢 Node.js not found locally."
  mkdir -p "./node"
  mkdir -p "./tmp"
  
  ARCH=$(uname -m)
  [ "$ARCH" = "x86_64" ] && ARCH="x64"
  
  LATEST_URL=$(curl -s https://nodejs.org/dist/latest/ | grep -oE "node-v[0-9]+\.[0-9]+\.[0-9]+-darwin-${ARCH}\.tar\.gz" | head -n 1)
  if [ -n "$LATEST_URL" ]; then
  	echo
    echo "📥 Download from https://nodejs.org/dist/latest/$LATEST_URL ..."
    curl -# "https://nodejs.org/dist/latest/$LATEST_URL" -o "./tmp/node.tar.gz"
    if [ -f "./tmp/node.tar.gz" ]; then
      EXTRACTED_DIR=$(tar -tf "./tmp/node.tar.gz" | head -n 1 | cut -f1 -d"/")
      tar -xzf "./tmp/node.tar.gz" -C "./tmp"
      cp "./tmp/$EXTRACTED_DIR/bin/node" "./node/node"
      chmod +x "./node/node"
      rm -rf "./tmp"
      echo
      echo "✅ Node.js successfully downloaded! Starting the installer.."
      sleep 2
    fi
  else
  	echo
    echo "❌ ${red}Automatic download of Node.js failed!${white}"
    sleep 3
  fi
fi

find_node() {
  xattr -dr com.apple.quarantine "./node" 2>/dev/null
  NODE=""
  if [ -f "./node/node" ]; then
    chmod +x "./node/node" 2>/dev/null
    if "./node/node" --version >/dev/null 2>&1; then
      NODE="./node/node"
    else
      echo "❌ ${red}Node.js cannot run on this Mac (wrong architecture? Apple Silicon = arm64, Intel = x64).${white}"
    fi
  fi
  if [ -z "$NODE" ] && command -v node >/dev/null 2>&1; then
    NODE="$(command -v node)"
  fi
  if [ -z "$NODE" ]; then
    echo "❌ ${red}Node.js not found!${white}"
    echo "Put the 'node' binary for your Mac in the node folder,"
    echo "or install v18 or newer from https://nodejs.org (or: brew install node)."
    finish 1
  fi
}

install_plugin() {
  clear
  banner "Installer"
  find_node
  "$NODE" ./plugin/patcher.mjs install
  finish 0
}

uninstall_plugin() {
  clear
  banner "Uninstaller"
  find_node
  "$NODE" ./plugin/patcher.mjs uninstall
  finish 0
}

check_status() {
  clear
  banner "Status"
  find_node
  "$NODE" ./plugin/patcher.mjs status
  finish 0
}

# ------------------------------- Main menu -------------------------------
clear
banner
echo "  ${yellow}1${white}) Install plugin"
echo "  ${yellow}2${white}) Uninstall plugin"
echo "  ${yellow}3${white}) Check plugin status"
echo "  ${yellow}0${white}) Quit"
echo

while true; do
  read -r -p "Type your choice : " CHOICE || { echo; close_window; exit 0; }
  CHOICE="${CHOICE//[[:space:]]/}"
  case "$CHOICE" in
    1) install_plugin ;;
    2) uninstall_plugin ;;
    3) check_status ;;
    0) close_window; exit 0 ;;
    *)
      echo
      echo "❌ ${red}Invalid choice! Please type a number from 1 to 3, or 0 to quit.${white}"
      echo
      ;;
  esac
done