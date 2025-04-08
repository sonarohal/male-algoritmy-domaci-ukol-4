const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 
  24, 19, -25, -2, -1, 11, 32, -31, 5
];


const allNumbers = document.getElementById('allNumbers');
const squaresNumbers = document.getElementById('squaresNumbers');
const negativeNumbers = document.getElementById('negativeNumbers');
const absoluteValues = document.getElementById('absoluteValues'); 
const evenNumbers = document.getElementById('evenNumbers'); 
const divisible3 = document.getElementById('divisible3'); 
const distance5 = document.getElementById('distance5'); 
const squares5 = document.getElementById('squares5'); 
 

let listAllNumbers = ''; 
let listSquaresNumbers = ''; 
let listNegativeNumbers = ''; 
let listAbsoluteValues = '';
let listEvenNumbers = ''; 
let listDivisible3 = ''; 
let listDistance5 = ''; 
let listSquares5 = ''; 
 

numbers.forEach(function(number) {
  listAllNumbers += `<p>${number}</p>`; 
  listSquaresNumbers += `<p>${number * number}</p>`;
  listAbsoluteValues += `<p>${Math.abs(number)}</p>`;

 
if (number < 0 ) {
  listNegativeNumbers += `<p>${number}<p>`;
}
if (number % 2 === 0) {
    listEvenNumbers += `<p>${number}</p>`; 
}
if (Math.abs(number) % 3 === 0) {
  listDivisible3 += `<p>${number}</p>`; 
} 

const distance5 = Math.abs(number - 5); 
listDistance5 += `<p>Vzdialenosť ${number} od 5 je: ${distance5}</p>`;

const squares5 = distance5 * distance5; 
listSquares5 += `<p>Druhá mocnina vzdialenosti čísla ${number} od 5 je ${squares5}</p>`; 
}); 

const countNegative = numbers.filter(num => num < 0).length;
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;
const positiveSum = numbers.filter(num => num > 0).reduce((acc, num) => acc + num, 0);



allNumbers.innerHTML = listAllNumbers; 
squaresNumbers.innerHTML = listSquaresNumbers; 
negativeNumbers.innerHTML = listNegativeNumbers; 
absoluteValues.innerHTML = listAbsoluteValues; 
evenNumbers.innerHTML = listEvenNumbers; 
divisible3.innerHTML = listDivisible3; 
distance5.innerHTML = listDistance5;
squares5.innerHTML = listSquares5;
document.getElementById('countNegative').innerText = `Počet záporných čísel je: ${countNegative}`;
document.getElementById('sumAll').innerText = `Súčet všetkých čísel je: ${sum}`;
document.getElementById('average').innerText = `Súčet priemeru všetkých čísel je: ${average}`;
document.getElementById('positiveSum').innerText = `Súčet všetkých kladných čísel je: ${positiveSum}`;
