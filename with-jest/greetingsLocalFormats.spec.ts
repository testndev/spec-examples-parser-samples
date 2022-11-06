import { describe, expect, test } from '@jest/globals';
import { SpecExamplesParser as examples } from '@testndev/spec-examples-parser';
import { greetings } from '../src/greetings';

describe(`Our_App respects local greetings formats for supported languages`, () => {
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
