var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Operador ternário -
// Abreviação de condicionais com if e else
var idade = 21;
var possuiDiabetes = false;
var podeBeber =
  idade >= 18 && !possuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);
//Geralmente utilizado quando precisamos atribuir um valor para uma variável,
// dependendo de uma condição.

// if abreviado
var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade");
