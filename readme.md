# `@testndev/spec-examples-parser`: samples


Samples of use of [`@testndev/spec-examples-parser`](https://github.com/testndev/spec-examples-parser) NPM package with many JS/TS testing frameworks.

---

  - samples with [**Jest**](#with-jest), in **TypeScript**
  - samples with [**Mocha** + Chai, in **JavaScript**](#with-mocha--chai-in-javascript)
  - samples with [**Mocha** + Chai, in **TypeScript**](#with-mocha--chai-in-typescript)
  - samples with [**Playwright**](#with-playwright), in **TypeScript**


## With Jest

### Location

Tests files are located in [test/with-jest](test/with-jest)

### Execution

execute all of them:

```bash
npm run test:jest
```

or 

```bash
cd test/with-jest
npx jest
```


### Results & Report

HTML report will be available in [test/with-jest/test-report.html](test/with-jest/test-report.html)


## With Mocha + Chai (in Typescript)

### Location

Tests files are located in [test/with-ts-mocha](test/with-ts-mocha)

### Execution

execute all of them:

```bash
npm run test:ts-mocha
```

or 

```bash
cd test/with-ts-mocha
npx ts-mocha *.spec.ts
```

### Results & Report

...

## With Mocha + Chai (in JavaScript)

### Location

Tests files are located in [test/with-js-mocha](test/with-js-mocha)

### Execution

execute all of them:

```bash
npm run test:js-mocha
```

or 

```bash
npx mocha test/with-js-mocha/*.spec.js
```

### Results & Report

...

## With Playwright

### Location

Tests files are located in [test/with-playwright](test/with-playwright)

### Execution

execute all of them:

```bash
npm run test:playwright
```

or 

```bash
cd test/with-playwright
npx playwright test
```

### Results & Report

HTML report will be available in [test/with-playwright/test-report/index.html](test/with-playwright/test-report/index.html)
