import { test, expect } from '@playwright/test';
const url = 'http://localhost:3000/'


test('basic page layout', async ({ page }) => {
  await page.goto(url);
  
  await expect(page).toHaveTitle('React + Atom + Next.js');

});

test('profile form displays', async ({ page }) => {
    await page.goto(url);
    
    await expect(page.locator('text=Profile').first()).toBeVisible();
  
});