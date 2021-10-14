import { test, expect } from '@playwright/test';
const url = 'http://localhost:3000/user'


test('header exists', async ({ page }) => {
    await page.goto(url);
    
    await expect(page.locator('text=User List').first()).toBeVisible();
  
});

test('user list populated', async ({ page }) => {
  await page.goto(url);
  
  await expect(page.locator('.userLineItem').first()).toBeVisible();

});

test('display selected user on click', async ({ page }) => {
  await page.goto(url);
  
  await page.click('.userLineItem');
  await expect(page.locator('text=ID: 1').first()).toBeVisible();

});