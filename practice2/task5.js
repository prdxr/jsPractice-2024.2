// Практическая работа №2

function pr2Task5() {
    // Задание 5 (NODE)
    console.log("\n\n===Task 5: map===");

    map5 = new Map();
    map5.set(true, "first elem");
    map5.set(2, null);
    map5.set("3", "third elem");
    console.log("map5 last elem value: ", map5.get("3"));

    console.log("map5 before deletion: ", map5);
    map5.delete(2);
    console.log("map5 after deletion: ", map5);
}

pr2Task5();