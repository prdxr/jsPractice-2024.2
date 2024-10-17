// Практическая работа №3
import { 
    addConsts as myAdd, subConsts as mySub, 
    multConsts as myMult, divConsts as myDiv, 
    modConsts as myMod, powConsts as myPow
} from './mathModule.js';

function pr3Task3() {
    // Задание 3
    console.log("\n\n===Task 3: modules===");
    console.log("\nworking with PI=3.14 and E=2.72...");
    console.log("custom P+E: \t" + myAdd());
    console.log("custom P-E: \t" + mySub());
    console.log("custom P*E: \t" + myMult());
    console.log("custom P/E: \t" + myDiv());
    console.log("custom P%E: \t" + myMod());
    console.log("custom P^E: \t" + myPow());

    console.log("\nnow 5 and 2...");
    console.log("custom 5+2: \t" + myAdd(5, 2));
    console.log("custom 5-2: \t" + mySub(5, 2));
    console.log("custom 5*2: \t" + myMult(5, 2));
    console.log("custom 5/2: \t" + myDiv(5, 2));
    console.log("custom 5%2: \t" + myMod(5, 2));
    console.log("custom 5^2: \t" + myPow(5, 2));
}

pr3Task3();