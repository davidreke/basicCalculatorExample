// console.log('linked');

function returnValue(numberOne, numberTwo, operation) {
    console.log(numberOne, numberTwo, operation)
    numberOne =parseInt(numberOne)
    numberTwo = parseInt(numberTwo)
    switch (operation){
        case "add":
        var answer = add(numberOne, numberTwo); 
        break;
        case "subtract":
        var answer = subtract(numberOne, numberTwo);
        break;
    }
    console.log('answer: ', answer)
    document.getElementById('answer').innerHTML= answer
}

function add (num1, num2){
    console.log('add ',num1 + num2)
    return num1 + num2
}

function subtract (num1, num2){
    console.log('subract ',num1, num2)
    return num1 - num2
}