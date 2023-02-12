/* eslint-disable mocha/no-setup-in-describe */
import {describe, test} from 'mocha';
import {expect} from 'chai';
import { greetings } from '../../src/greetings';

describe(`Our_App is able to greet customers (sample with Mocha + Chai)`, () => {
 
  describe(`not all languages are supported`, () => {
    //sample with examples directly in a simple JS array
    ['Wakandan', 'Sindarin', 'Syldavian'].forEach((language) => {
      test(`Greetings with ${language} are not supported`, async () => {
        expect(() => { 
          greetings('Tom', language);
        }).throw(`Sorry, I don't speak ${language}. Supported languages are: french, spanish, english.`);
      });
    });
  });
});