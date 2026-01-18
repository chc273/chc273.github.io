/**
 * View Count Tracker using Supabase
 * Tracks and displays page views for blog posts
 */

(function() {
  'use strict';

  // Supabase configuration
  const SUPABASE_URL = 'https://otgbdjbbgwdidmydiowh.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Z2JkamJiZ3dkaWRteWRpb3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMDE4MDgsImV4cCI6MjA4MDU3NzgwOH0.TkgRUZ3ZfcHEdiyn3YuzDUL9G-F4Z4h0JWmqG0Ut5A8';
  
  const STORAGE_KEY = 'view_tracker_visited';
  const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes

  /**
   * Get the current page path
   */
  function getPagePath() {
    return window.location.pathname;
  }

  /**
   * Check if user has already visited this page in this session
   */
  function hasVisitedInSession(path) {
    try {
      const visited = sessionStorage.getItem(STORAGE_KEY);
      if (!visited) return false;
      
      const visitedPaths = JSON.parse(visited);
      const visitTime = visitedPaths[path];
      
      if (!visitTime) return false;
      return (Date.now() - visitTime) < SESSION_DURATION;
    } catch (e) {
      return false;
    }
  }

  /**
   * Mark page as visited in this session
   */
  function markAsVisited(path) {
    try {
      const visited = sessionStorage.getItem(STORAGE_KEY);
      const visitedPaths = visited ? JSON.parse(visited) : {};
      visitedPaths[path] = Date.now();
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(visitedPaths));
    } catch (e) {
      // Ignore errors (e.g., private browsing mode)
    }
  }

  /**
   * Call Supabase RPC to increment view count
   */
  async function incrementView(path) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_page_view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ page_path: path })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const count = await response.json();
      return count;
    } catch (error) {
      console.error('Failed to increment view:', error);
      return null;
    }
  }

  /**
   * Get view count for a page from Supabase
   */
  async function getViewCount(path) {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/page_views?path=eq.${encodeURIComponent(path)}&select=views`,
        {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.length > 0 ? data[0].views : 0;
    } catch (error) {
      console.error('Failed to get view count:', error);
      return null;
    }
  }

  /**
   * Update a single view count display element
   */
  function updateElementDisplay(element, count) {
    if (count === null || count === undefined) return;

    // Skip display update for hidden tracking elements
    if (element.classList.contains('view-count-hidden') ||
        element.style.cssText.includes('display:none') ||
        element.style.cssText.includes('display: none')) {
      return;
    }

    element.textContent = count === 1 ? '1 view' : `${count.toLocaleString()} views`;
    element.style.display = '';
    element.classList.remove('view-count-loading');
    element.classList.add('view-count-loaded');
  }

  /**
   * Initialize view tracking
   */
  async function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Find all view count elements
    const viewCountElements = document.querySelectorAll('[data-view-count]');
    if (viewCountElements.length === 0) return;

    const currentPath = getPagePath();

    // Process each view count element
    for (const element of viewCountElements) {
      const postPath = element.dataset.postPath;
      
      if (!postPath) continue;

      // Check if we're on the actual post page (not a list page)
      const isOnPostPage = currentPath === postPath;

      if (isOnPostPage && !hasVisitedInSession(postPath)) {
        // We're on the post's own page and haven't visited recently - increment view
        const count = await incrementView(postPath);
        if (count !== null) {
          updateElementDisplay(element, count);
        }
        markAsVisited(postPath);
      } else {
        // Either on a list page, or already visited - just fetch and display the count
        const count = await getViewCount(postPath);
        if (count !== null) {
          updateElementDisplay(element, count);
        }
      }
    }
  }

  // Start tracking
  init();
})();
