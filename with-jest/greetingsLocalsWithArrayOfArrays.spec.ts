import { describe, expect, test } from '@jest/globals';
import { greetings } from '../src/greetings';


describe(`Our_App is able to greet customers (sample with Jest & "Arrays of Arrays" for examples)`, () => {

  describe(`local greetings formats`, () => {
    [
      ['Sébastien', 'french', 'Bonjour', 'Bonjour Sébastien !'],
      ['édouard', 'english', 'Hello', 'Hello Édouard!'],
      ['ROSA', 'spanish', 'Hola', '¡Hola Rosa!'],
    ].forEach(([name, language, greetingWord, expectedPhrase]) => {
      test(`Our_App says "${expectedPhrase}" to "${name}" in "${language}"`, () => {
        const greetingsPhrase = greetings(name, language);
        expect(greetingsPhrase).toContain(greetingWord);
        expect(greetingsPhrase).toBe(expectedPhrase);
      });
    });
  });

  describe('specific phrases for anonymous', () => {
    [
      [undefined, 'french', "Bonjour à vous !"],
      ["undefined", 'french', "Bonjour à vous !"],
      ["   ", 'english', 'Hello there!'],
      [" null  ", 'english', 'Hello there!'],
      ["Anonymous", 'english', 'Hello there!'],
      ["", 'spanish', '¡Hola!'],
    ]
      .forEach(([name, language, expectedPhrase]) => {
        test(`Our_App says "${expectedPhrase}" to "${name}" in "${language}"`, () => {
          const greetingsPhrase = greetings(name, language);
          expect(greetingsPhrase).toBe(expectedPhrase);
        });
      });
  })
});
