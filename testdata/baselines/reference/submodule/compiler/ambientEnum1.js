//// [tests/cases/compiler/ambientEnum1.ts] ////

//// [ambientEnum1.ts]
    declare enum E1 {
        y = 4.23
    }
    
    // Ambient enum with computer member
    declare enum E2 {
        x = 'foo'.length
    }

//// [ambientEnum1.js]
