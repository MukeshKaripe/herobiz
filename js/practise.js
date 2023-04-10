function f(a, b) {
    return a + b;
}
console.log(f(2, 3));
function addition() {
    const a = 10;
    const b = 5;
    return a + b;

}
console.log(addition());

function square() {
    // const a = prompt('enter a number:');
    const a = 10;
    var b = (`the given value is ${a} square is ${Math.sqrt(a)}`);
    // return Math.sqrt(a);
    return b;
}
console.log(square());
function areatriangle(a, b) {
    const c = (a * b) / 2;
    return c;
}
console.log(`the trianglearea is ${areatriangle(10, 5)}`);
//generate random number
const ran = Math.random();
console.log(ran);
function wholenum() {
    var a = -1;
    if (a > 0) {
        console.log(`a is positive: ${a}`);

    }
    else if (a < 0) {
        console.log(`a is negative : ${a}`);
    }
    else {
        console.log('a is zero');

    }
    // return 'ok';



}
console.log(wholenum());
function evennum(a) {
    if (a % 2 == 0) {
        console.log(`a is even:${a} `);
    }
    else
        console.log(`a is odd:${a} `);
    return true;

}
console.log(`here is output:${evennum(-210)} `);
function largestamongthree() {
    var a = 1;
    var b = 2;
    var c = 3;
    if (a > b & a > c) {
        console.log(`a is greater:${a} `);

    }
    else if (b > a & b > c) {
        console.log(`b is greater: ${b}`);

    }
    else if (c > a & c > b) {
        console.log(`c is greater : ${c}`);
    }
}
console.log(largestamongthree());
function primenumber(a) {
    if (a == 0 || a == 1) {
        console.log(` ${a} is not prime number`);
    }
    else if (a > 1) {
        for (var i = 2; a >= i; i++) {
            if (a % i == 0) {
                console.log(`${a} is not a prime`);
                break;
            }
            else {
                console.log(`${a} is prime number`);
            }
        }
    }
    return;
}
console.log(primenumber(9));
function hundredprime() {
    let a = 0;
    for (var i = 1; i < a; i++) {

        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                a = a + 1;
            }
        } if (a == 2) {
            console.log(`${a} is prime number`);
        }
    }
    for(var i=1;i < 100;i++){
        for(var j=1;j<=i;j++){
            if(i % j==0){
                c=c+1;
                
            }
            
        }
        if(c == 2){
            console.log(`${i}`);

        }
       
    }
}
console.log(hundredprime());
let n = 10;
if (n < 0) {
    console.log(`invalid ${n}`);
}
else if (n == 0) {
    console.log(`fac is 1 for ${n}`);
}

else {
    let f = 1;

    for (var i = 1; i <= n; i++) {

        f *= i;
    }

    console.log(`factorial of ${n} is ${f} `)
}
function multipLICATION() {
    let n = 8;
    if (n < 0) {
        console.log(`error`);

    }
    if (n == 0) {
        console.log(` ${n} is always 1`);

    }
    else {
        let f = 1;
        for (var i = 1; i <= 10; i++) {
            f = n * i;
            console.log(`${n} * ${i} = ${f} `);
        }

    }
}
multipLICATION();
function fubonaccisequence() {
    let g = "";
    let num = 5;
    let n1 = 0, n2 = 1, nextterm;
    for (var i = 2; i <= num; i++) {
        nextterm = n2 + n1;
        n1 = n2;
        n2 = nextterm;
        g = g + nextterm + ",";

        // document.writeln (nextterm);

    }
    console.log(`${g + " "}`);
}
fubonaccisequence();
function armstrong() {
    let sum = 0;
    const n = 153;
    let temp = n;
    while (temp > 0) {
        let rem = temp % 10;
        sum += rem * rem * rem;
        temp = parseInt(temp / 10);


    }
    if (sum == n) {
        console.log(`yes ${n} is armstrong`);
    }
    else {
        console.log(`not armstrong`);

    }
}
armstrong();
function calculator() {
    let n1 = 10;
    let n2 = 5;
    let res;
    let oper = '+';
    switch (oper) {
        case '+': {
            res = n1 + n2;
            break;
        }
        case '-': {
            res = n1 - n2;
            break;
        }
        case '*': {
            res = n1 * n2;
            break;
        }
        case '/': {
            res = n1 / n2;
        }

    }
    console.log(` ${n1} ${oper} ${n2} = ${res}`);
}
calculator();
function armstronginterval() {
    const n = 1000;
    let temp = n;


    for (var i = 0; i <= n; i++) {
        let numd = i.toString().length;
        let sum = 0;
        let temp = i;
        while (temp > 0) {
            let rem = temp % 10;
            sum += rem ** numd;
            temp = parseInt(temp / 10);


        }
        if (sum == i) {
            console.log(`armstrong numbers ${i}`);
        }

    }

}
armstronginterval();
function naturalnumbers() {
    let n = 100;
    let sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;


    }
    console.log(`sum of numbers:${sum}`);
}
naturalnumbers();

function copyprime(){
    var n=200;
    var c=0;
    for(var i=1;i < 100;i++){
        for(var j=1;j<=i;j++){
            if(i % j==0){
                c=c+1;
                
            }
            
        }
        if(c == 2){
            console.log(`${i}`);

        }
       
    }
}
copyprime();