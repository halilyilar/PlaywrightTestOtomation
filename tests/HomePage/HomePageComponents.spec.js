import { test, expect } from '@playwright/test';

  test('test', async ({ page }) => {
  await page.goto('https://circleboom.com');
  await page.waitForSelector("#__next > section > div.hero_hero_body__E7XHX > div.hero_title__17TsZ");
  const getStarted=page.getByText('Get StartedTwitter ManagementTwitter management toolPublishSocial media manageme').nth(1);
  const TwitterTool=page.getByRole('link', { name: 'circleboom_twitter Twitter Management Twitter management tool' });
  const PublishTool=page.getByRole('link', { name: 'circleboom_publish Publish Social media management tool' });
  const LearnMoreTwitter=page.locator("(//a[@class='hero_learn_more__V6IHc'])[1]");
  const LearnMorePublish=page.locator("(//a[@class='hero_learn_more__V6IHc'])[1]");
  await getStarted.hover();
  
  expect(PublishTool).toBeEditable();
  expect(TwitterTool).toBeEditable();
  expect(getStarted).toBeEditable(); 
  expect(LearnMorePublish).toBeEditable(); 
  expect(LearnMoreTwitter).toBeEditable();  
  
})