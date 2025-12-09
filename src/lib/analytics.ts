/**
 * Google Analytics 4 Configuration
 * 
 * Instructions to set up:
 * 1. Create GA4 property at https://analytics.google.com
 * 2. Copy your Measurement ID (G-XXXXXXXXXX)
 * 3. Add to Vercel environment variables:
 *    - Key: NEXT_PUBLIC_GA_ID
 *    - Value: Your G-XXXXXXXXXX ID
 * 4. Redeploy to activate tracking
 */

// Get GA ID from environment variable
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Check if GA is enabled
export const isGAEnabled = !!GA_TRACKING_ID && process.env.NODE_ENV === 'production';

// Page view tracking
export const pageview = (url: string) => {
    if (!isGAEnabled) return;

    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// Event tracking
type GTagEvent = {
    action: string;
    category: string;
    label?: string;
    value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
    if (!isGAEnabled) return;

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};

// Custom events for portfolio
export const trackProjectView = (projectName: string) => {
    event({
        action: 'view_project',
        category: 'Projects',
        label: projectName,
    });
};

export const trackContactFormSubmit = () => {
    event({
        action: 'submit_form',
        category: 'Contact',
        label: 'Contact Form',
    });
};

export const trackResumeDownload = () => {
    event({
        action: 'download',
        category: 'Resume',
        label: 'PDF Download',
    });
};

export const trackExternalLink = (url: string, label: string) => {
    event({
        action: 'click',
        category: 'External Link',
        label: `${label} - ${url}`,
    });
};
