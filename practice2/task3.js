// Практическая работа №2

function pr2Task3() {
    // Задание 3 (NODE)
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
    console.log("var array: ", varArray)

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
        let mean = 0
        for (i = 0; i < arr.length; i++) {
            mean += parseInt(arr[i]);
            console.log("elem: ", arr[i], "mean: ", mean);
        }
        mean /= arr.length;
        console.log("mean: ", mean, "len: ", arr.length);
        return mean;
    }

    let arr = [1, 5, 4, 3, 2];
    console.log("arr: ", arr, "\nmean: ", meanArray(arr));

}

pr2Task3();