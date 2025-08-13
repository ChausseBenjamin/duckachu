# Installation Guide

## Loading the Extension in Firefox

### Method 1: Temporary Installation (for testing)

1. Open Firefox
2. Type `about:debugging` in the address bar and press Enter
3. Click on "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on..."
5. Navigate to the extension folder and select `manifest.json`
6. The extension will be loaded and active until you restart Firefox

### Method 2: Developer Installation (persistent)

1. Open Firefox
2. Type `about:config` in the address bar and press Enter
3. Accept the warning if prompted
4. Search for `xpinstall.signatures.required`
5. Double-click to set it to `false`
6. Type `about:addons` in the address bar
7. Click the gear icon and select "Install Add-on From File..."
8. Select the `manifest.json` file

### Testing the Extension

1. Go to any supported search engine (Google, Bing, DuckDuckGo, etc.)
2. Search for something starting with `!`, for example:
   - `!gh firefox` (search GitHub for "firefox")
   - `!w cats` (search Wikipedia for "cats")
   - `!yt music` (search YouTube for "music")
   - `!a laptop` (search Amazon for "laptop")

The extension should intercept these searches and redirect you directly to the target site.

### Supported Search Engines

- Google (google.com)
- Bing (bing.com)  
- DuckDuckGo (duckduckgo.com)
- Yahoo (yahoo.com)
- Yandex (yandex.com)
- Baidu (baidu.com)

### Popular Bang Examples

- `!gh` - GitHub
- `!w` - Wikipedia
- `!yt` - YouTube  
- `!a` - Amazon
- `!so` - Stack Overflow
- `!r` - Reddit
- `!t` - Twitter
- `!fb` - Facebook
- `!li` - LinkedIn
- `!gm` - Google Maps

For a complete list of available bangs, see: https://duckduckgo.com/bang