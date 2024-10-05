// Практическая работа №2

function pr2Task1() {
    // Задание 1 (NODE)
    console.log("\n\n===Task 1: print user, edit properties, sum ages===");

    let user1 = {
        name: "Ivan",
        age: 40,
        city: "Moscow"
    }
    console.log(user1);

    user1.age = 42;
    user1.gender = "M";
    // user1.city = undefined;      - не удаляет свойство, а скрывает
    delete user1.city;
    console.log("after changes:");
    console.log(user1);

    let user2 = {
        name: "Maxim",
        age: 18,
        city: "Saint-Petersburg"
    }

    console.log("total age: " + (user1.age + user2.age));
}

pr2Task1();