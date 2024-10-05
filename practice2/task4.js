// Практическая работа №2

function pr2Task4() {
    // Задание 4 (NODE)
    console.log("\n\n===Task 4: sets===");
    
    let set4 = new Set();
    set4.add(1).add(2).add(3).add(4);
    console.log("set4: ", set4);

    set4.delete(1);
    console.log("deleted first. set4 now: ", set4);
}

pr2Task4();