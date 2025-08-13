<div align="center">

  <img alt="Legally distinct electric duck" src="logo.png" width="250px" />

# Duckachu

Lightning Fast DuckDuckGo Bangs!

</div>

This Firefox extension provides fast duck bangs without interfering with your preferred search engine by using a local list of bangs. It only triggers when the first character in a search is a bang (`!`).

## Features

- **Local redirects**: No server calls, all processing happens locally for fast redirects
- **Non-intrusive**: Only activates when searches start with `!`
- **Full compatibility**: Uses the complete DuckDuckGo bang database
- **Multi-engine support**: Works with Google, Bing, DuckDuckGo, Yahoo, Yandex, and Baidu, etc...

## Installation

### From Source

1. Clone or download this repository
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Select the `manifest.json` file from the extension directory
5. The extension will be loaded and active immediately

### How it Works

The extension:
1. Monitors search engine pages for queries starting with `!`
2. Intercepts the search before results load
3. Processes the bang using the cached DuckDuckGo bang database
4. Redirects directly to the target website

## Examples

- `!gh opencode` → redirects to GitHub search for "opencode"
- `!w firefox` → redirects to Wikipedia search for "firefox"
- `!yt cats` → redirects to YouTube search for "cats"
- `!a laptop` → redirects to Amazon search for "laptop"
- `!gh` → redirects directly to github.com (no search)

## Requirements

- Firefox 57 or later (supports WebExtensions API)

## Privacy

This extension:
- Processes all data locally
- Makes no external network requests
- Does not collect or store any personal data
- Only activates on search queries starting with `!`

## Credits

Bang database sourced from the excellent [unduck](https://github.com/t3dotgg/unduck) project by Theo.
