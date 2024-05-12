import { test, expect } from '@playwright/test';

  test('test', async ({ page }) => {
  await page.goto('https://circleboom.com');
  await page.waitForSelector("#__next > section > div.hero_hero_body__E7XHX > div.hero_title__17TsZ");
  const LearnMoreTwitter=page.locator("(//a[@class='hero_learn_more__V6IHc'])[1]");
  await LearnMoreTwitter.click();
  await page.waitForSelector("#__next > header > div > div > nav > a.layout_nav_item__kYYEW.layout_product_link__7Rb19");
  const title=await page.title();
  console.log(title);
  
  expect(page).toHaveTitle("Circleboom - Boom your social circle!");

 })