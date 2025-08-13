/*
 * Duckachu - Lightning fast duck bangs Firefox extension
 * Copyright (c) 2025 Duckachu Contributors
 * Licensed under the MIT License
 */

// Content script that runs on search engine pages
(function() {
  'use strict';

  // Function to get the search query from different search engines
  function getSearchQuery() {
    const url = new URL(window.location.href);
    
    // Google
    if (window.location.hostname.includes('google.com')) {
      return url.searchParams.get('q');
    }
    
    // Bing
    if (window.location.hostname.includes('bing.com')) {
      return url.searchParams.get('q');
    }
    
    // DuckDuckGo
    if (window.location.hostname.includes('duckduckgo.com')) {
      return url.searchParams.get('q');
    }
    
    // Yahoo
    if (window.location.hostname.includes('yahoo.com')) {
      return url.searchParams.get('p');
    }
    
    // Yandex
    if (window.location.hostname.includes('yandex.com')) {
      return url.searchParams.get('text');
    }
    
    // Baidu
    if (window.location.hostname.includes('baidu.com')) {
      return url.searchParams.get('wd');
    }
    
    return null;
  }

  // Function to process bang redirect
  function processBangRedirect(query) {
    if (!query || !query.trim()) return false;
    
    // Only process if query starts with !
    if (!query.trim().startsWith('!')) return false;
    
    // Send message to background script to handle the bang redirect
    browser.runtime.sendMessage({
      action: 'processBang',
      query: query.trim()
    }).then(response => {
      if (response && response.redirectUrl) {
        // Redirect to the bang URL
        window.location.replace(response.redirectUrl);
      }
    }).catch(error => {
      console.log('Bang redirect failed:', error);
    });
    
    return true;
  }

  // Check if we should intercept on page load
  function checkAndRedirect() {
    const query = getSearchQuery();
    if (query && processBangRedirect(query)) {
      // Stop the page from loading further if we're redirecting
      window.stop();
    }
  }

  // Run immediately when script loads
  checkAndRedirect();

  // Also monitor for navigation changes (for SPAs)
  let currentUrl = window.location.href;
  const observer = new MutationObserver(() => {
    if (window.location.href !== currentUrl) {
      currentUrl = window.location.href;
      setTimeout(checkAndRedirect, 100); // Small delay to let URL params settle
    }
  });

  observer.observe(document, {
    childList: true,
    subtree: true
  });

})();