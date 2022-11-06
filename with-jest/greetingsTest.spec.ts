import { describe, expect, test } from '@jest/globals';
import { SpecExamplesParser as examples } from '@testndev/spec-examples-parser';
import { greetings } from '../src/greetings';

describe(`Our_App is able to greet customers (sample with Jest)`, () => {

  // simple test, without examples
  test(`Our_App greets in English by default`, () => {
    expect(greetings('Tom')).toBe('Hello Tom!');
  });

  describe(`Our_App respects local greetings formats for supported languages`, () => {
    // sample test/spec, 
    // with examples table given in Gherkin textual format
    examples.fromGherkinFormatTable(`
      name      | language | greetingWord | expectedPhrase
      Sébastien | french   | Bonjour      | "Bonjour Sébastien !"
      édouard   | english  | Hello        | Hello Édouard!
      ROSA      | spanish  | Hola         | ¡Hola Rosa!
  `)
      .forEach(({ name, language, greetingWord, expectedPhrase }) => {
        test(`Our_App says "${expectedPhrase}" to "${name}" in "${language}"`, () => {
          const greetingsPhrase = greetings(name, language);
          expect(greetingsPhrase).toContain(greetingWord);
          expect(greetingsPhrase).toBe(expectedPhrase);
        });
      });
  });

  describe(`Our_App doesn't support all languages`, () => {
    //sample with examples directly in a simple JS array
    ['italian', 'danish'].forEach((language) => {
      test(`Greetings with ${language} are not supported`, async () => {
        expect(() => {
          // @ts-ignore
          greetings('Tom', language);
        }).toThrow(`Sorry, I don't speak "${language}" language.`);
      });
    });
  });
});