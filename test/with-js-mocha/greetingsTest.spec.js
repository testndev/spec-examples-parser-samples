const expect = require("chai").expect;
const { greetings } = require("../../dist/greetings.js");
const examples = require("@testndev/spec-examples-parser").SpecExamplesParser;

describe(`Sample with Mocha + Chai`, function () {
  // simple test, without examples
  it(`Greetings are returned in English by default`, function () {
    expect(greetings("Tom")).equals("Hello Tom!");
  });

  // sample test/spec,
  // with examples table given in Gherkin textual format
  examples
    .from(
      ` name      | language | greetingWord | expectedPhrase
        Sébastien | french   | Bonjour      | "Bonjour Sébastien !"
        édouard   | english  | Hello        | Hello Édouard!
        ROSA      | spanish  | Hola         | ¡Hola Rosa!`
    )
    .forEach(function ({ name, language, greetingWord, expectedPhrase }) {
      it(`Greetings asked in ${language} respect local format`, function () {
        const greetingsPhrase = greetings(name, language);
        expect(greetingsPhrase).contains(greetingWord);
        expect(greetingsPhrase).equals(expectedPhrase);
      });
    });
});
