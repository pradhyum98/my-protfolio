# How to Check Your SEO Score

Since we have optimized your portfolio for SEO, use these tools to verify your score.

## 1. Google Lighthouse (Built-in)
*Best for testing local changes or quick checks.*

1.  Open your website in **Google Chrome**.
    *   Live: `https://pradhyum-data-analyst.vercel.app`
    *   Local: `http://localhost:3000`
2.  Right-click on the page and select **Inspect**.
3.  Click on the **Lighthouse** tab in the developer tools panel (look for the `>>` icon if hidden).
4.  Select the **SEO**, **Accessibility**, and **Best Practices** categories.
5.  Select **Device: Mobile** (Google indexes mobile-first).
6.  Click **Analyze page load**.

**Target Score:** 90-100.

## 2. PageSpeed Insights
*Best for official Google ranking analysis.*

1.  Visit [PageSpeed Insights](https://pagespeed.web.dev/).
2.  Enter your URL: `https://pradhyum-data-analyst.vercel.app`
3.  Click **Analyze**.
4.  Review the **SEO** and **Best Practices** scores at the bottom.

## 3. SEO Checks We Implemented
If you see a high score, it's because we:
*   ✅ Added dynamic **Title** and **Description** meta tags.
*   ✅ Configured **OpenGraph** and **Twitter Cards** for social sharing.
*   ✅ Added a valid **Sitemap** (`/sitemap.xml`) and **Robots.txt**.
*   ✅ Implemented **Structured Data (JSON-LD)** for "Person" and "WebSite".
*   ✅ Used semantic HTML (`<main>`, `<article>`, `<h1>`, etc.).
*   ✅ Added `alt` tags to images (make sure to fill in any missing ones in your project data!).

## Troubleshooting
*   **"Robots.txt is not valid"**: Vercel sometimes caches this. Redeploy if needed.
*   **"Document does not have a meta description"**: Ensure every project in `src/content/projects.ts` has a `summary` (which maps to description).
*   **"Image elements do not have [alt] attributes"**: Check `src/content/projects.ts` images.
