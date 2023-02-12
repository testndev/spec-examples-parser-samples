import { describe, expect, test } from '@jest/globals';
import { greetings } from '../src/greetings';


describe(`Our_App is able to greet customers (sample with Jest & "Arrays of Objects" for examples)`, () => {

  describe(`local greetings formats`, () => {
    [
      { name: 'Sébastien', language: 'french', greetingWord: 'Bonjour', expectedPhrase: 'Bonjour Sébastien !' },
      { name: 'édouard', language: 'english', greetingWord: 'Hello', expectedPhrase: 'Hello Édouard!' },
      { name: 'ROSA', language: 'spanish', greetingWord: 'Hola', expectedPhrase: '¡Hola Rosa!' },
    ].forEach(({ name, language, greetingWord, expectedPhrase }) => {
      test(`Our_App says "${expectedPhrase}" to "${name}" in "${language}"`, () => {
        const greetingsPhrase = greetings(name, language);
        expect(greetingsPhrase).toContain(greetingWord);
        expect(greetingsPhrase).toBe(expectedPhrase);
      });
    });
  });

  describe('specific phrases for anonymous', () => {
    [
      { name: undefined, language: 'french', expectedPhrase: "Bonjour à vous !" },
      { name: "undefined", language: 'french', expectedPhrase: "Bonjour à vous !" },
      { name: "   ", language: 'english', expectedPhrase: 'Hello there!' },
      { name: " null  ", language: 'english', expectedPhrase: 'Hello there!' },
      { name: "Anonymous", language: 'english', expectedPhrase: 'Hello there!' },
      { name: "", language: 'spanish', expectedPhrase: '¡Hola!' },
    ]
      .forEach(({ name, language, expectedPhrase }) => {
        test(`Our_App says "${expectedPhrase}" to "${name}" in "${language}"`, () => {
          const greetingsPhrase = greetings(name, language);
          expect(greetingsPhrase).toBe(expectedPhrase);
        });
      });
  })
});
