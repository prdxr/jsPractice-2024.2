// Практическая работа №3
async function pr3Task2() {
    // Задание 2
    console.log("\n\n===Task 2: callback/promise/await===");

    let printData = (message) => { 
        const SUCCESS = true;
        if(SUCCESS){
            console.log(message);
        } else {
            throw new Error("callback failed!");
        }
    }

    function useCallback(callbackFunc) {
        console.log("started outer callback func, wait 2s...")
        let data = "i am the callback data";
        setTimeout(() => {
            callbackFunc(data);
        }, 2000);
    }

    useCallback(printData);

    function usePromise() {
        console.log("started outer promise func, wait 2s...")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const SUCCESS = true;
                if (SUCCESS) {
                    resolve("promise handled");
                } else {
                    reject("Error encountered!");
                }
            }, 2000);
        });
    }

    usePromise()
        .then((r) => console.log(r))
        .catch((e) => console.error(e));
    
    async function useAsyncFirst(){
        console.log("started outer async 1 promise func, wait 2s...")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const SUCCESS = true;
                if (SUCCESS){
                    resolve("async promise handled");
                } else {
                    reject("async promise failed!");
                }
            }, 2000);
        });
    }

    try {
        const RESULT = await useAsyncFirst();
        console.log(RESULT);
    } catch (err) {
        console.error(err);
    }

    async function useAsyncSecond(){
        console.log("started outer async 2 promise func, wait 2s...")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const SUCCESS = true;
                if (SUCCESS){
                    resolve("async promise handled");
                } else {
                    reject("async promise failed!");
                }
            }, 2000);
        });
    }

    async function executeParallel(){
        try {
            let [result1, result2] = await Promise.all(
                [useAsyncFirst(), useAsyncSecond()]
            );
            console.log(result1);
            console.log(result2);
        } catch (err) {
            console.error(err);
        }
    }

    executeParallel();
}

await pr3Task2();