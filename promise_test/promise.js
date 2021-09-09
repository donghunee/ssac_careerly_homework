
const promise1 = function(condition){
    return new Promise((resolve,reject) => {
    if(condition) {
        resolve("true");
    } else {
        reject("false");
    }
});
};

promise1(true)
.then((message)=> {
    console.log(message);
}) 
.catch((error) => {
    console.log(error);
});

const promiseChain1 = (params) => {
    return new Promise((resolve,reject) => {
        console.log("func1");
        setTimeout(() => {
            resolve(`func 1 success: ${params}`);
        }, 1000);
    });
};

const promiseChain2 = (params) => {
    return new Promise((resolve,reject) => {
        console.log("func2");
        setTimeout(() => {
            reject(`func 2 faild: ${params}`);
        }, 1000);
    });
};

const promiseChain3 = (params) => {
    return new Promise((resolve,reject) => {
        console.log("func3");
        setTimeout(() => {
            resolve(`func 2 faild: ${params}`);
        }, 1000);
    });
};

promiseChain1("start")
.then(promiseChain2)
.then(promiseChain3)
.catch((error) => console.log(error));