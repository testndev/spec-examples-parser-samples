import {describe, test} from 'mocha';
import {expect} from 'chai';
import { SpecExamplesParser as examples } from '@testndev/spec-examples-parser';
import { greetings } from '../src/greetings';

describe(`Sample with Mocha + Chai`, () => {

  // simple test, without examples
  test(`Greetings are returned in English by default`, async () => {
    expect(greetings('Tom')).equals('Hello Tom!');
  });

  // sample test/spec, 
  // with examples table given in Gherkin textual format
  examples.fromGherkinFormatTable(`
  name      | language | greetingWord | expectedPhrase
  Sébastien | french   | Bonjour      | "Bonjour Sébastien !"
  édouard   | english  | Hello        | Hello Édouard!
  ROSA      | spanish  | Hola         | ¡Hola Rosa!
  `)
    .forEach(({ name, language, greetingWord, expectedPhrase }) => {
      test(`Greetings asked in ${language} respect local format`, () => {
        const greetingsPhrase = greetings(name, language);
        expect(greetingsPhrase).contains(greetingWord);
        expect(greetingsPhrase).equals(expectedPhrase);
      });
    });

 
});