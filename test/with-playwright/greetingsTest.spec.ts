import { test, expect } from '@playwright/test';
import { SpecExamplesParser as examples } from '@testndev/spec-examples-parser';
import { greetings } from '../../src/greetings';

const examplesTable = examples.from(`
  name      | language | greetingWord | expectedPhrase
  BOB       | french   | Bonjour      | "Bonjour Bob !"
  Sébastien | french   | Bonjour      | "Bonjour Sébastien !"
  édouard   | english  | Hello        | Hello Édouard!
  ROSA      | spanish  | Hola         | ¡Hola Rosa!
  `);


test.describe(`Sample with Playwright Test framework`, () => {
  // simple test, without examples
  test(`Greetings are returned in English by default`, async () => {
    expect(greetings('Tom')).toBe('Hello Tom!');
  });

  // sample test/spec, 
  // with examples table given in Gherkin textual format
  // + detailed 'steps' 

  test.describe('for-each', () => {
    examplesTable.forEach((data) => { testTemplate(data); });
  });

  test.describe('for-of', () => {
    for (const data of examplesTable) { testTemplate(data); }
  });

  test.describe('map', () => {
    examplesTable.map((data) => { testTemplate(data); });
  });

});

function testTemplate({ expectedPhrase, name, language, greetingWord }) {
  test(`Our_App respects local format ("${expectedPhrase}" if "${name}" speaks "${language}")`, async () => {
    const greetingsPhrase = greetings(name, language);
    expect(greetingsPhrase).toContain(greetingWord);
    expect(greetingsPhrase).toBe(expectedPhrase);
  });
}
