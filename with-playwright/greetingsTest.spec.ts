import { test, expect } from '@playwright/test';
import { SpecExamplesParser as examples } from '@testndev/spec-examples-parser';
import { greetings } from '../src/greetings';

test.describe(`Sample with Playwright Test framework`, () => {

  // simple test, without examples
  test(`Greetings are returned in English by default`, async () => {
    expect(greetings('Tom')).toBe('Hello Tom!');
  });

  // sample test/spec, 
  // with examples table given in Gherkin textual format
  // + detailed 'steps' 
  examples.fromGherkinFormatTable(`
  name      | language | greetingWord | expectedPhrase
  Sébastien | french   | Bonjour      | "Bonjour Sébastien !"
  édouard   | english  | Hello        | Hello Édouard!
  ROSA      | spanish  | Hola         | ¡Hola Rosa!
  `)
    .forEach(({ name, language, greetingWord, expectedPhrase }) => {
      test(`Our_App respects local format ("${expectedPhrase}" if "${name}" speaks "${language}")`, async () => {
        let greetingsPhrase;
        await test.step(`Given customer enters his name as "${name}" (with exactly this case)`, async () => { });
        await test.step(`…and customer selects "${language}" as preferred language`, async () => { });
        await test.step(`When customer asks for greetings`, async () => {
          greetingsPhrase = greetings(name, language);
        });
        await test.step(`Then system answers with correct greeting word: "${greetingWord}"`, async () => {
          expect(greetingsPhrase).toContain(greetingWord);
        });
        await test.step(`…and complete greetings phrase is correctly formatted ("${expectedPhrase}")`, async () => {
          expect(greetingsPhrase).toBe(expectedPhrase);
        });
      });
    });

  //sample with examples directly in a simple JS array
  ['italian', 'danish'].forEach((language) => {
    test(`Our_App is not able to greets in ${language}`, async () => {
      expect(() => {
        // @ts-ignore
        greetings('Tom', language);
      }).toThrow(`Sorry, I don't speak "${language}" language.`);
    });
  });
});