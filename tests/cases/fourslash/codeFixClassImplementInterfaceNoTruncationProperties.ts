/// <reference path="fourslash.ts" />

//// type props = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
//// type manyprops = `${props}${props}`;
//// 
//// interface Foo<T extends string> {
////     manyProps(a: {[K in T]: {[K2 in T]: `${K}.${K2}`}}): void;
//// }
////     
//// class Bar implements Foo<manyprops> {
//// }

verify.codeFix({
    description: "Implement interface 'Foo<manyprops>'",
    newFileContent:
`type props = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
type manyprops = \`\${props}\${props}\`;

interface Foo<T extends string> {
    manyProps(a: {[K in T]: {[K2 in T]: \`\${K}.\${K2}\`}}): void;
}
    
class Bar implements Foo<manyprops> {
        throw new Error("Method not implemented.");
    }
}`,
});