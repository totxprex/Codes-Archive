let calcAverage = averagedolphin => averagedolphin / 3
let scoredolphin = calcAverage(44 + 23 + 71) //dophin average with arrow function
let scorekoalas = calcAverage(65 + 54 + 49) //koalas average with arrow function

console.log(scoredolphin)
console.log(scorekoalas)

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) { console.log(`Dolphins Wins with point ${avgDolphins} vs ${avgKoalas}`) }
  else if (avgKoalas >= avgDolphins * 2) { console.log(`Koalas Wins with point ${avgDolphins} vs ${avgKoalas}`) }
  else { console.log("No Team Wins") }
}

checkWinner(scoredolphin, scorekoalas)

// // Test Data 2

let scoredolphin1 = calcAverage(85 + 54 + 41) //dophin average with arrow function
let scorekoalas1 = calcAverage(23 + 34 + 27) //koalas average with arrow function

console.log(scoredolphin1)
console.log(scorekoalas1)

checkWinner(scoredolphin1, scorekoalas1)