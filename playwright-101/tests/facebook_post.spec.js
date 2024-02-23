import { test, expect } from '@playwright/test';

test('Login Facebook and Post Hello Playwright!', async ({ page }) => {

  // Login Facebook
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('xxx');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('xxx');

  // Post Facebook 'Hello Playwright!'
  await page.getByTestId('royal_login_button').click();
  await page.getByRole('button', { name: 'Your profile' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'Ketwadee Kaewmanee' }).click();
  await page.getByRole('button', { name: 'What\'s on your mind?' }).click();
  await page.getByRole('paragraph').click();
  await page.getByLabel('What\'s on your mind?').fill('Hello Playwright!');
  await page.getByLabel('Post', { exact: true }).click();
});