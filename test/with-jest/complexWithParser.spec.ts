import { describe, expect, test } from '@jest/globals';
import { from } from '@testndev/spec-examples-parser';
import { greetingsWithFullName } from '../../src/greetings';

describe(`local greetings formats with full name`, () => {

  from(` 
          firstName   | lastName  | language | expectedPhrase
          John        | Wick      | french   | Bonjour « John WICK » !
          édouard     | Wick      | english  | Hello “Édouard WICK”!
          ROSA        | Wick      | spanish  | ¡Hola «Rosa WICK»!         
`)
    .forEach(({ firstName, lastName, language, expectedPhrase }) => {
      test(`Our_App answers "${expectedPhrase}" in ${language}`, () => {
        expect(greetingsWithFullName(firstName, lastName, language)).toBe(expectedPhrase);
      });
    });
});
