/// <reference path="fourslash.ts" />

// @module: nodenext

// @Filename: /package.json
//// {
////   "imports": {
////     "#*.js": "./src/*.ts"
////   }
//// }

// @Filename: /src/something.ts
//// export function something(name: string): any;

// @Filename: /a.ts
//// import {} from "/*1*/";

verify.completions({
    marker: ["1"],
    exact: ["#something.js"],
    isNewIdentifierLocation: true,
});