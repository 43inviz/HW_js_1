
//1
let input;
do {
    input = prompt("Введите слово 'duck':");
} while (input !== 'duck');
console.log("Вы ввели правильное слово!");


//2

function sum() {
    return (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') 
        ? arguments[0] + arguments[1] 
        : NaN;
}


console.log(sum(1, "2"));  


//3
