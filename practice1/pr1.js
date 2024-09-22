// Практическая работа №1 (все сниппеты заданий копируются в консоль браузера)

function pr1Task1() {
        // Задание 1 (копировать в браузер)
        console.log("\n\n===Task 1: print users, change property===");

        var oldUser = {
            name: "Ivan",
            age: 40,
            city: "Moscow"
        }
    
        let youngUser = {
            name: "Maxim",
            age: 18,
            city: "Saint-Petersburg"
        }
    
        const BASED_USER = {
            name: "chad",
            age: 32,
            city: "yes"
        }
    
        console.log(oldUser);
        console.log(youngUser);
        console.log(BASED_USER);
    
        oldUser.age *= 2;
    
        console.log("\nafter change:");
        console.log(oldUser);
    
}

function pr1Task2() {
    // Задание 2 (копировать в браузер)
    console.log("\n\n===Task 2: print vars and their types===");

    let booleanVar = true;
    let stringVar = "text";
    let intVar = 42;

    console.log(booleanVar + " is " + typeof(booleanVar));
    console.log(stringVar + " is " + typeof(stringVar));
    console.log(intVar + " is " + typeof(intVar));
}

function pr1Task3() {
    // Задание 3 (копировать в браузер)
    console.log("\n\n===Task 3: get max of 3 numbers===");

    let numberA = parseInt(prompt("number a: "));
    let numberB = parseInt(prompt("number b: "));
    let numberC = parseInt(prompt("number c: "));
    let maxNumber = numberA;
    if (numberB > maxNumber) {
        maxNumber = numberB;
    }
    if (numberC > maxNumber) {
        maxNumber = numberC;
    }

    console.log("The maximum is ", maxNumber);
}

function pr1Task4() {
    // Задание 4 (копировать в браузер)
    console.log("\n\n===Task 4: cycles===");

    let n = 1;
    console.log("--while--")
    while (n < 11) {
        console.log(n);
        n++;
    }

    n = 1;
    console.log("--do while--")
    do {
        console.log(n);
        n++;
    } while (n < 11)

    console.log("--for--")
    for (n = 1; n < 11; n++) {
        console.log(n);
    }
}

function pr1Task5() {
    // Задание 5 (копировать в браузер)
    console.log("\n\n===Task 5: math functions===");

    function summBasic(numberA, numberB) {
        return numberA + numberB;
    }

    let summAnon = function(numberA, numberB) {
        return numberA + numberB;
    }

    let summArrow = (numberA, numberB) => {
        numberA + numberB
    }

    summBasic(1, 2);
    summAnon(3, 4);
    summArrow(5, 6);
}