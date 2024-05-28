// Zadatak 1.

const marko = (78 / 1.69) ** 2;
const josip = (92 / 1.95) ** 2;

let itm = marko > josip;
console.log(itm);

const marko2 = (95 / 1.88) ** 2;
const josip2 = (85 / 1.76) ** 2;
let itm2 = marko2 > josip2;
console.log(itm2);

// 2. nacina

const tezinaM = 78;
const visinaM = 1.69;
const tezinaJ = 92;
const visinaJ = 1.95;
const itmM = (tezinaM / visinaM) ** 2;
const itmJ = (tezinaJ / visinaJ) ** 2;

let itmMj = itmM > itmJ;
console.log(itmMj);

// Zadatak 2.

const zemlja = 'Hrvatska';
const kontinent = 'Europi';
const populacija = 3.8e6;

console.log(
  `${zemlja} ima ${populacija} stanovnika i nalazi se u ${kontinent}`
);

// Zadatak 3.

let varijabla1 = Math.trunc(Math.random() * 100) + 1;
console.log(varijabla1);

let varijabla2 = Math.trunc(Math.random() * 50) + 1;
console.log(varijabla2);

let sum = varijabla1 + varijabla2;
console.log(sum);

let razlika = varijabla1 - varijabla2;
console.log(razlika);

console.log(`Vrijednost sume je ${sum}, a vrijednost razlike je ${razlika}`);

// Zadatak 4.

if (marko > josip) {
  console.log(`Markov ITM ${marko} je veci od Josipovog`);
} else {
  console.log(`Josipov ITM ${josip} je veci od Markovog`);
}

if (marko2 > josip2) {
  console.log(`Markov ITM ${marko2} je veci od Josipovog`);
} else {
  console.log(`Josipov ITM ${josip2} je veci od Markovog`);
}

// Zadatak 5.

const rez1 = '9' - '5';
// 4
console.log(rez1);

const rez2 = '19' - '13' + '17';
// 617
console.log(rez2);

const rez3 = '19' - '13' + 17;
// 23
console.log(rez3);

const rez4 = '123' > 57;
// true
console.log(rez4);

const rez5 = 5 + 6 + '4' + 9 - 4 - 2;
// 1143
console.log(rez5);
