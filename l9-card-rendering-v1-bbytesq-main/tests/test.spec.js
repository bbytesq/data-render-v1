// @ts-check

import { test, expect } from '@playwright/test';

test('step1', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });
  const cards = await page.locator('.student-card');
  const cardsAll = await cards.all();
  expect(cardsAll).toHaveLength(8);

  const firstCard = cards.first();
  const name = firstCard.locator('.student-name').first();
  await expect(name).toHaveText('Anna Ivanova');

  const studentValues = firstCard.locator('.value');
  await expect(studentValues.first()).toHaveText('#1');
  await expect(studentValues.nth(1)).toHaveText('20 years');
  await expect(studentValues.nth(2)).toHaveText('P-101');
  await expect(studentValues.nth(4)).toHaveText('4.8/5.0');
});

test('step2', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });

  const activeBadges = await page.locator('.active').all();
  const inactiveBadges = await page.locator('.inactive').all();

  expect(activeBadges).toHaveLength(6);
  expect(inactiveBadges).toHaveLength(2);
});

test('step3', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });

  const genderIcons = page.locator('.gender-icon');
  const maleGenders = page.getByText('♂');
  const femaleGenders = page.getByText('♀');

  expect(await genderIcons.all()).toHaveLength(8);
  expect(await maleGenders.all()).toHaveLength(4);
  expect(await femaleGenders.all()).toHaveLength(4);
});

test('step4', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });
  const emailLinks = await page.locator('.email-link');
  expect(await emailLinks.first().textContent()).toBe('anna.ivanova@university.com');
  expect(await emailLinks.nth(1).textContent()).toBe('a.petrov@university.com');
  expect(await emailLinks.nth(6).textContent()).toBe('o.volkova@university.com');
});
