# Jest with TypeScript

This post describes how to run Jest tests in TypeScript. The general approach used here is to use a ts-jest package to run. 

Note: I'm mainly following `ts-jest` official documentation @ https://kulshekhar.github.io/ts-jest/

---

## Initialize npm Project

```bash
npm init
```

## Install `ts-jest` and dependencies

```bash
npm i -D typescript jest ts-test @types/jest
```

## Create `ts-jest config` 

```bash
npx ts-jest config:init
```

## Run Tests

```bash
npm run test
```

---

## Jest Config file 
By default Jest does not compile `.ts` files so we have to make it transpile TypeScript with `ts-jest`. 

## package.json 
Add a `test` script to make tests runnable. 