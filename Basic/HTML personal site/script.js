// let name = prompt("Enter your name: ", "Who");

function testSwap() {
    let a = 8;
    let b = 5;

    console.log(a, b);
    let tmp = a;
    a = b
    b = tmp;
    console.log(a, b);
}

testSwap();

function countChar() {
    let myName = "Pitchakorn Thiprangsi";
    let yourName = prompt("Enter your name : ");

    const maxLength = 2;
    let numOfYourName= yourName.length;
    let remainLength = maxLength - numOfYourName;
    
    remainLength >= 0 ? alert(1) : alert(2);
    if (remainLength >= 0) {
        alert(`You use ${numOfYourName}. you remain ${remainLength}`)
        console.log(`Hi my name is ${myName} Welcome ${yourName} to my website`)
    } else {
        countChar(yourName);
    }
}

//countChar();

function bmiCalculator(weight, height) {
    return parseInt(Number(weight) / Math.pow((height), 2));
}

const cal = bmiCalculator(50, 1.72);
console.log(cal);