/**
 * Newsletter Signup Handler
 * Handles newsletter subscription form submission and subscriber count display
 */

(function() {
  'use strict';

  // Supabase configuration
  const SUPABASE_URL = 'https://otgbdjbbgwdidmydiowh.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Z2JkamJiZ3dkaWRteWRpb3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMDE4MDgsImV4cCI6MjA4MDU3NzgwOH0.TkgRUZ3ZfcHEdiyn3YuzDUL9G-F4Z4h0JWmqG0Ut5A8';

  /**
   * Subscribe to newsletter via Supabase RPC
   */
  async function subscribeToNewsletter(email) {
    console.log('Subscribing email:', email);
    
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/subscribe_to_newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ p_email: email })
      });

      console.log('Subscribe response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Subscribe error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Subscribe result:', data);
      return data;
    } catch (error) {
      console.error('Failed to subscribe:', error);
      throw error;
    }
  }

  /**
   * Send welcome email via Edge Function
   */
  async function sendWelcomeEmail(email) {
    console.log('Sending welcome email to:', email);
    
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/send-confirmation-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          type: 'welcome'  // Send welcome email, not confirmation
        })
      });

      const data = await response.json();
      console.log('Welcome email result:', data);
      return data;
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      // Don't throw - welcome email failure shouldn't break signup
      return { success: false, error: error.message };
    }
  }

  /**
   * Get subscriber count via Supabase RPC
   */
  async function getSubscriberCount() {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_subscriber_count`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const count = await response.json();
      return count;
    } catch (error) {
      console.error('Failed to get subscriber count:', error);
      return null;
    }
  }

  /**
   * Display message to user
   */
  function showMessage(element, message, type) {
    if (!element) return;
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
  }

  /**
   * Hide message
   */
  function hideMessage(element) {
    if (!element) return;
    element.style.display = 'none';
  }

  /**
   * Update subscriber count display
   */
  async function updateSubscriberCount() {
    const countElement = document.getElementById('subscriber-count');
    if (!countElement) return;

    const count = await getSubscriberCount();
    if (count !== null) {
      countElement.textContent = count.toLocaleString();
    }
  }

  /**
   * Initialize newsletter signup form
   */
  function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) {
      console.log('Newsletter form not found on this page');
      return;
    }

    console.log('Newsletter form initialized');

    const emailInput = document.getElementById('newsletter-email');
    const submitButton = document.getElementById('newsletter-submit');
    const messageDiv = document.getElementById('newsletter-message');
    
    if (!emailInput || !submitButton) {
      console.error('Newsletter form elements not found');
      return;
    }

    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoading = submitButton.querySelector('.button-loading');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log('Form submitted');

      const email = emailInput.value.trim();

      // Basic email validation
      if (!email || !email.includes('@')) {
        showMessage(messageDiv, 'Please enter a valid email address.', 'error');
        return;
      }

      // Disable form during submission
      submitButton.disabled = true;
      emailInput.disabled = true;
      if (buttonText) buttonText.style.display = 'none';
      if (buttonLoading) buttonLoading.style.display = 'inline-block';
      hideMessage(messageDiv);

      try {
        // Step 1: Subscribe to database
        const result = await subscribeToNewsletter(email);

        if (result && result.success) {
          showMessage(
            messageDiv,
            '🎉 Successfully subscribed! Check your inbox for a welcome email.',
            'success'
          );
          emailInput.value = '';

          // Step 2: Send welcome email (async, don't wait)
          sendWelcomeEmail(email);

          // Update subscriber count after successful signup
          setTimeout(updateSubscriberCount, 1000);
        } else {
          showMessage(
            messageDiv,
            result?.error || 'Something went wrong. Please try again.',
            'error'
          );
        }
      } catch (error) {
        console.error('Subscription error:', error);
        showMessage(
          messageDiv,
          'Failed to subscribe. Please try again later.',
          'error'
        );
      } finally {
        // Re-enable form
        submitButton.disabled = false;
        emailInput.disabled = false;
        if (buttonText) buttonText.style.display = 'inline-block';
        if (buttonLoading) buttonLoading.style.display = 'none';
      }
    });
  }

  /**
   * Initialize on page load
   */
  function init() {
    console.log('Newsletter signup script loaded');
    initNewsletterForm();
    updateSubscriberCount();
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
