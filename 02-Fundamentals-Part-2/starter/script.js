"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(85, 54, 41);

// console.log(scoreDolphin, scoreKoalas)

// function checkWinner(avgDolphin, avgKoalas) {
//     if (avgDolphin > avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphin} vs ${avgKoalas})`);
//     } else if (avgKoalas > avgDolphin * 2) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphin})`);
//     }
// }

// checkWinner(scoreDolphin, scoreKoalas);

// const friends = ['gary', 'bary', 'carey'];
// const newlength = friends.push('mary');
// console.log(friends)
// console.log(newlength)

// friends.unshift('John')
// console.log(friends)

// const popped = friends.pop();
// console.log(popped)
// console.log(friends)

// friends.shift()
// console.log(friends)

// const indexBary = friends.indexOf('bary');
// console.log(indexBary);

// const indBery = friends.includes('bary')
// console.log(indBery)

// friends.push(23)
// console.log(friends)

// function calcTip(billAmount) {
//     if (billAmount > 50 && billAmount < 300) {
//         return billAmount * 0.15
//     } else {
//         return billAmount * 0.2
//     }
// }

// console.log(calcTip(300))

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)
// const totalAmounts = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
// console.log(totalAmounts)

// const mark = {
//     fullname: 'mark miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         return this.mass / (this.height ** 2)
//     }
// }

// const john = {
//     fullname: 'john smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         return this.mass / (this.height ** 2)
//     }
// }

// mark.bmi = mark.calcBMI();
// john.bmi = john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})!`)
// } else {
//     console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})!`)
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     totals[i] = tips[i] + bills[i];
// }

// console.log(bills, tips, totals)
