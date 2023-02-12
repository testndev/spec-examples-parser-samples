import { test, expect } from '@playwright/test';
import { greetings } from '../../src/greetings';

test.describe(`Our_App is able to greet customers (sample with Playwright)`, () => {

  test.describe(`not all languages are supported`, () => {
    //sample with examples directly in a simple JS array
    ['Wakandan', 'Sindarin', 'Syldavian'].forEach((language) => {
      test(`Greetings with ${language} are not supported`, async () => {
        expect(() => {
          greetings('Tom', language);
        }).toThrow(`Sorry, I don't speak ${language}. Supported languages are: french, spanish, english.`);
      });
    });
  });
});