// Практическая работа №2

function pr2Task2() {
    // Задание 2 (браузер)
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

pr2Task2();