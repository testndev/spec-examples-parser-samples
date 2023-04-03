const anonymousNames = ['', 'null', 'anonymous', 'undefined'];

const nameTag = '<_NAME_>';

const greetingsPhrases = {
  french: { anonymous: 'Bonjour à vous !', named: `Bonjour ${nameTag} !` },
  spanish: { anonymous: '¡Hola!', named: `¡Hola ${nameTag}!` },
  english: { anonymous: 'Hello there!', named: `Hello ${nameTag}!` }
}

const quotationTemplatesByLanguage = {
  french: `« ${nameTag} »`,
  spanish: `«${nameTag}»`,
  english: `“${nameTag}”`
}

const supportedLanguages = Object.keys(greetingsPhrases);

function isSupportedLanguage(languageName: string) {
  return languageName && supportedLanguages.includes(`${languageName}`.toLowerCase())
}

/**
 * Remove trimming space, set first letter in uppercase, and all other in lowercase
 * default name is ''
 * @param name 
 * @returns 
 */
function cleanName(name: string) {
  const trimmedName = `${name}`.trim();
  if (anonymousNames.includes(trimmedName.toLowerCase())) {
    return '';
  }
  return trimmedName[0].toUpperCase() + trimmedName.substring(1).toLowerCase();
}

/**
 * Remove trimming space, set all letters in uppercase
 * default name is ''
 * @param name 
 * @returns 
 */
function cleanUpperCaseName(name: string) {
  const trimmedName = `${name}`.trim();
  if (anonymousNames.includes(trimmedName.toLowerCase())) {
    return '';
  }
  return trimmedName.toUpperCase();
}

function buildFullName(firstName: string, lastName: string) {
  return cleanName(firstName) + ' ' + cleanUpperCaseName(lastName);
}

function quotedWords(language: string, words: string) {
  return quotationTemplatesByLanguage[language].replace(nameTag, words)
}

/**
 * A function that politely greets people.
 * 
 * It takes into account, if possible, the native language of the person,
 * by spelling their first name correctly.
 * 
 * @param name the person name or nickname
 * @param language the language spoken by this person
 * @returns 
 */
export function greetings(name?: string, language = 'english') {
  if (isSupportedLanguage(language)) {
    if (name && cleanName(name)) {
      return greetingsPhrases[language].named.replace(nameTag, cleanName(name))
    }
    return greetingsPhrases[language].anonymous;
  }
  else {
    const errorMessage = `Sorry, I don't speak ${language}. Supported languages are: ${supportedLanguages.join(', ')}.`
    throw Error(errorMessage);
  }
}

/**
 * A function that politely greets people.
 * 
 * It takes into account, if possible, the native language of the person,
 * by spelling their first name correctly.
 * 
 * @param firstName the person first name or nickname
 * @param lastName the person last name
 * @param language the language spoken by this person
 * @returns 
 */
export function greetingsWithFullName(firstName: string, lastName?: string, language = 'english') {
  if (isSupportedLanguage(language)) {
    if (firstName && lastName && buildFullName(firstName, lastName)) {
      return greetingsPhrases[language].named.replace(nameTag, quotedWords(language, buildFullName(firstName, lastName)))
    }
    else if (firstName && !lastName) {
      return greetings(firstName, language);
    }
    else {
      return greetings(language);
    }
  }
  else {
    const errorMessage = `Sorry, I don't speak ${language}. Supported languages are: ${supportedLanguages.join(', ')}.`
    throw Error(errorMessage);
  }
}