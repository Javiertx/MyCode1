const kelvin = 280; //Variable constante grados Kelvin
const celsius = kelvin - 273; //Variable Celsius
let fahrenheit = celsius * (9/5) + 32; //Variable no constante para redondear temperatura
fahrenheit = Math.floor(fahrenheit); //Redondeo de la variable
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${kelvin} degrees kelvin.`);
console.log(`The temperature is ${celsius} degrees celsius.`);
let newton = celsius * (33/100); //crear temperatura en Newton
newton = Math.floor(newton); //redondear
console.log(`The temperature is ${newton} degrees newton.`);

