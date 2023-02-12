import { describe, expect, test } from '@jest/globals';
import { SpecExamplesParser as examples } from '@testndev/spec-examples-parser';
import { greetings } from '../../src/greetings';

describe(`Our_App is able to greet customers (sample with Jest & SpecExamplesParser for examples)`, () => {

  describe(`local greetings formats`, () => {
    examples.from(`
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

  describe('specific phrases for anonymous', () => {
    examples.from(`
        name        | language | expectedPhrase
        $undefined  | french   | "Bonjour à vous !"
        "undefined" | french   | "Bonjour à vous !"
        "   "       | english  | Hello there!
        " null  "   | english  | Hello there!
        "Anonymous" | english  | Hello there!
        ""          | spanish  | ¡Hola!
     `)
      .forEach(({ name, language, expectedPhrase }) => {
        test(`Our_App says "${expectedPhrase}" to "${name}" in "${language}"`, () => {
          const greetingsPhrase = greetings(name === '$undefined' ? undefined : name, language);
          expect(greetingsPhrase).toBe(expectedPhrase);
        });
      });
  });
});

