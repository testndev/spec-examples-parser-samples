import { describe, expect, test } from '@jest/globals';
import { greetings } from '../src/greetings';

// simple tests, with single example each
describe(`Our_App is able to greet customers (sample with Jest)`, () => {

  test(`Our_App greets anonymous`, () => {
    expect(greetings()).toBe('Hello there!');
  });

  test(`Our_App greets in English by default`, () => {
    expect(greetings('Tom')).toBe('Hello Tom!');
  });

  test(`Our_App says 'Bonjour Sébastien !' to "Sébastien" in "french"`, () => {
    const greetingsPhrase = greetings('Sébastien', 'french');
    expect(greetingsPhrase).toContain('Bonjour');
    expect(greetingsPhrase).toBe('Bonjour Sébastien !');
  });

});