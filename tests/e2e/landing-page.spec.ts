import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check that the page title is correct
    await expect(page).toHaveTitle(/TeamSync/);
  });

  test('should display navigation', async ({ page }) => {
    await page.goto('/');

    // Check for navigation elements
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByText('Features')).toBeVisible();
    await expect(page.getByText('Pricing')).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');

    // Check for hero content
    await expect(
      page.getByRole('heading', { name: /Manage your remote team/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Start Free Trial/i })
    ).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    await page.goto('/');

    // Check that all main sections are present
    await expect(page.locator('#features')).toBeVisible();
    await expect(page.locator('#pricing')).toBeVisible();
    await expect(page.locator('#faq')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Click on Features link
    await page.getByRole('link', { name: 'Features' }).click();

    // Wait for smooth scroll to complete
    await page.waitForTimeout(1000);

    // Check that we scrolled to features section
    const featuresSection = page.locator('#features');
    await expect(featuresSection).toBeInViewport();
  });

  test('should display footer', async ({ page }) => {
    await page.goto('/');

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check for footer content
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByText(/© \d{4} TeamSync/)).toBeVisible();
  });
});
