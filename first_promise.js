const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 250); // 250 milliseconds
});

myFirstPromise.then((successMessage) => {
    console.log(`Yay! ${successMessage}`);
});