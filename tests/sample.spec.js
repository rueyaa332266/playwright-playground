const { test, expect } = require('@playwright/test');
test.use({ storageState: 'auth.json' });

test('cs tool', async ({ page }) => {
  await page.goto('https://demo.playing.com/');
  await page.pause();
});