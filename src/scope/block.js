function fruits() {
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //blockScope
        const fruit3 = 'Mango' //block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()