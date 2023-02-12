const expect = require("chai").expect;
const { greetings } = require("../../dist/greetings.js");

describe(`Our_App is able to greet customers (sample with Mocha + Chai)`, function () {
  describe(`not all languages are supported`, function () {
    //sample with examples directly in a simple JS array
    ["Wakandan", "Sindarin", "Syldavian"].forEach((language) => {
      it(`Greetings with ${language} are not supported`, function () {
        expect(() => {
          greetings("Tom", language);
        }).throw(
          `Sorry, I don't speak ${language}. Supported languages are: french, spanish, english.`
        );
      });
    });
  });
});
