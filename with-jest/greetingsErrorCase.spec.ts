import { describe, expect, test } from '@jest/globals'; 
import { greetings } from '../src/greetings';

describe(`Our_App is able to greet customers (sample with Jest)`, () => {
 
  describe(`not all languages are supported`, () => {
    //sample with examples directly in a simple JS array
    ['Wakandan', 'Sindarin', 'Syldavian'].forEach((language) => {
      test(`Greetings with ${language} are not supported`, async () => {
        expect(() => {
          // @ts-ignore
          greetings('Tom', language);
        }).toThrowError(`Sorry, I don't speak ${language}. Supported languages are: french, spanish, english.`);
      });
    });
  });
});