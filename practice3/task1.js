// Практическая работа №3

function pr3Task1() {
    class MathError extends Error {
        constructor(message) {
            super(message);
            this.name = "MathError";
        }
    }

    console.log("\n\n===Task 1: try-catch===");
    // Задание 1
    function doMath(a, b) {
        try {
            let diff = a - b;
            if (isNaN(diff)) {
                throw new MathError("Non numbers disallowed." + 
                    "You tried " + typeof(a) + "-" + typeof(b) +
                    " and got " + typeof(diff));
            }
            return diff;

        } catch (exception) {
            console.error(exception);
            return NaN;
        }
    }
    console.log("try 2 - 1:\t", doMath(2, 1));
    console.log("try 1 - 2:\t", doMath(1, 2));
    console.log("try true - 2:\t", doMath(true, 2));
    console.log("try a - b:\t", doMath('a', 'b'));
}

pr3Task1()