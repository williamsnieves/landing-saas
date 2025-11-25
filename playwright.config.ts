import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined, // Increased from 1 to 2 for faster CI
  reporter: 'html',
  timeout: 30 * 1000, // 30 seconds per test
  use: {
    baseURL: 'http://localhost:4321/landing-saas',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Only test one mobile device to save time
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4321/landing-saas',
    reuseExistingServer: !process.env.CI,
    timeout: 90 * 1000, // Reduced from 120s to 90s
  },
});
