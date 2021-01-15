# TypeScript Library Starter

A boilerplate to start building a JavaScript library written with [TypeScript](https://www.typescriptlang.org/). This boilerplate is a simplification of [@bitjson/typescript-starter](https://github.com/bitjson/typescript-starter).

## FAQs

### What is included?
- TypeScript compiler generating outputs for both CommonJS and ES modules.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) configured to play well with TypeScript (including recommended presets). 
  Check other supported rules in [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

### Why are there two builds? (`main` and `module`)

The `src` of `typescript-starter` is compiled into two separate builds: `main` and `module`.
- The `main` build is [configured to use the CommonJS module system](https://github.com/alex-arriaga/typescript-starter/blob/master/configuration/ts/tsconfig.main.json). 
- The `module` build [uses the new es6 module system](https://github.com/alex-arriaga/typescript-starter/blob/master/configuration/ts/tsconfig.module.json).

Because Node.js LTS releases do not yet support the es6 module system, some projects which depend on your project will follow the `main` field in [`package.json`](https://github.com/bitjson/typescript-starter/blob/master/package.json). Tools which support the new system (like [Rollup](https://github.com/rollup/rollup), [Webpack](https://webpack.js.org/), or [Parcel](https://parceljs.org/)) will follow the `module` field, giving them the ability to statically analyze your project. These tools can tree-shake your `module` build to import only the code they need.
