//// [tests/cases/compiler/argumentsPropertyNameInJsMode2.ts] ////

//// [a.js]
function f(x) {
  arguments;
}

f(1, 2, 3);


//// [a.js]
function f(x) {
    arguments;
}
f(1, 2, 3);
