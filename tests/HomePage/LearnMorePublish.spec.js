import { test, expect } from '@playwright/test';

  test('test', async ({ page }) => {
  await page.goto('https://circleboom.com');
  await page.waitForSelector("#__next > section > div.hero_hero_body__E7XHX > div.hero_title__17TsZ");
  const LearnMorePublish=page.locator("(//a[@class='hero_learn_more__V6IHc'])[2]");
  await LearnMorePublish.click(); 
  await page.waitForTimeout(2000)
  
  expect.soft(page).toHaveTitle("The most intuitive Social Media Management Tool");

 })