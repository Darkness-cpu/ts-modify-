/// <reference path="fourslash.ts" />

// @module: nodenext

// @Filename: /package.json
//// {
////   "imports": {
////     "#thing": "./src/something.ts"
////   }
//// }

// @Filename: /src/something.ts
//// export function something(name: string): any;

// @Filename: /a.ts
//// import {} from "/*1*/";

verify.completions({
    marker: ["1"],
    exact: ["#thing"],
    isNewIdentifierLocation: true,
});