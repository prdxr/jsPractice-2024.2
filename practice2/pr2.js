// Практическая работа №1 (все сниппеты заданий копируются в консоль браузера)

function pr2Task1() {
    // Задание 1 (копировать в браузер)
    console.log("\n\n===Task 1: print user, edit properties, sum ages===");

    let user1 = {
        name: "Ivan",
        age: 40,
        city: "Moscow"
    }
    console.log(user1);

    user1.age = 42;
    user1.gender = "M";
    user1.city = undefined;
    console.log("after changes:");
    console.log(user1);

    let user2 = {
        name: "Maxim",
        age: 18,
        city: "Saint-Petersburg"
    }

    console.log("total age: " + (user1.age + user2.age));
}
function pr2Task2() {
    // Задание 2 (копировать в браузер)
    console.log("\n\n===Task 2: let string, print len, [0] and [-1], substr===");
    
    let varString = "someText";
    let searchQuery = prompt("Enter substring search query: "); 
    let foundAt = varString.indexOf(searchQuery);
    let searchResult = foundAt > -1 ? "found at " + foundAt : "not found";
    console.log(
        "length: " + varString.length +
        "\nfirst char: " + varString[0] +
        "\nlast char: " + varString[varString.length-1] +
        "\nstart with foo: " + varString.startsWith("foo") +
        "\nends with bar: " + varString.endsWith("bar") +
        "\nsubstring '" + searchQuery + "' " + searchResult
    );
}
function pr2Task3() {
    // Задание 3 (копировать в браузер)
    console.log("\n\n===Task 3: arrays===");

    varArray = [null, true, 2, 'three', 4n];
    console.log("first elem: " + varArray[0] + 
                "\nlast elem: " + varArray[varArray.length-1]
    );

    console.log("before change: " + varArray);
    varArray[1] = false;
    console.log("after change: " + varArray);

    let newArray = varArray;

    console.log("old array: " + varArray + "\nnew array: " + newArray);

    function concatArrays(arr1, arr2) {
        // easy - arr1.concat(arr2);
        for (elem in arr2) {
            arr1.push(arr2[elem]);
        }
        return arr1;

    }
    console.log(concatArrays(varArray, newArray));

    let users = [
        { name: "Ivan", age: 40 },
        { name: "Maxim", age: 18 },
        { name: "Anton", age: 27 },
    ];
    
    function getNames(arr) {
        let namesArr = [];
        for (elem in arr) {
            namesArr.push(arr[elem].name);
        }
        return namesArr;
    }
    console.log("names array: ", getNames(users));

    function meanArray(arr){
        mean = 0
        for (i = 0; i < arr.length; i++) {
            mean += parseInt(arr[i]);
            console.log("elem: ", arr[i], "mean: ", mean);
        }
        mean /= arr.length;
        console.log("mean: ", mean, "len: ", arr.length);
        return mean;
    }

    arr = [1, 5, 4, 3, 2];
    console.log("arr: ", arr, "\nmean: ", meanArray(arr));

}
function pr2Task4() {
    // Задание 4 (копировать в браузер)
    console.log("\n\n===Task 4: sets===");
    
    let set4 = new Set();
    set4.add(1).add(2).add(3).add(4);
    console.log("set4: ", set4);

    set4.delete(1);
    console.log("deleted first. set4 now: ", set4);
}
function pr2Task5() {
    // Задание 5 (копировать в браузер)
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
