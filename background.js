/*
 * Duckachu - Lightning fast duck bangs Firefox extension
 * Copyright (c) 2025 Duckachu Contributors
 * Licensed under the MIT License
 */

// Background script for Duckachu extension

// Import bangs data using fetch API since background scripts don't have DOM
let bangs = [];
let defaultBang = null;

// Load the bangs data when the extension starts
async function loadBangs() {
  try {
    const response = await fetch(browser.runtime.getURL('bangs.json'));
    bangs = await response.json();
    
    // Set default bang to Google
    defaultBang = bangs.find(b => b.t === 'g') || bangs[0];
    console.log('Duckachu: Loaded', bangs.length, 'bangs');
  } catch (error) {
    console.error('Failed to load bangs:', error);
  }
}

// Process bang redirect similar to unduck
function getBangRedirectUrl(query) {
  if (!query || !bangs.length) return null;
  
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return null;
  
  // Look for bang pattern: !bangname
  const match = trimmedQuery.match(/!(\S+)/i);
  
  const bangCandidate = match?.[1]?.toLowerCase();
  const selectedBang = bangs.find(b => b.t === bangCandidate) || defaultBang;
  
  // Remove the first bang from the query
  const cleanQuery = trimmedQuery.replace(/!\S+\s*/i, '').trim();
  
  // If the query is just `!gh`, use the domain directly instead of search
  if (cleanQuery === '') {
    return selectedBang ? `https://${selectedBang.d}` : null;
  }
  
  // Format the URL with the search query
  const searchUrl = selectedBang?.u.replace(
    '{{{s}}}',
    // Replace %2F with / to fix formats like "!ghr+t3dotgg/unduck"
    encodeURIComponent(cleanQuery).replace(/%2F/g, '/')
  );
  
  return searchUrl || null;
}

// Listen for messages from content scripts
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'processBang') {
    const redirectUrl = getBangRedirectUrl(request.query);
    sendResponse({ redirectUrl });
  }
  return true; // Keep the message channel open for async responses
});

// Load bangs when extension starts
loadBangs();