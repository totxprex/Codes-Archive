// //coding challenge 8

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',], ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 9.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


// let [players1, players2] = game.players

// // console.log(players1)
// // console.log(players2)

// // let [first, ...rest2] = ['Davis', 'Muller', 'Lewandoski', 'Kimmich', 'Tolu']  //playing with Rest Parameter
// // console.log(rest2)

// let [gk, ...fieldplayers] = players1

// let allplayers = [...players1, ...players2]

// let players1Final = [...players1, 'Thiago', 'Courtinho', 'Perisic']

// let { team1, x: draw, team2 } = game.odds

// console.log(team1)


// let printGoals = function (...allplayers2) {
//   console.log(allplayers2)
//   let stringDone = allplayers2.join(', ')
//   console.log(`${stringDone} scored ${allplayers2.length} goals`)
// }

// printGoals(...game.scored)


// let res = team1 < team2 && console.log('Team 1')
// let res2 = team2 < team1 && console.log('Team 2')













//#coding challenge 9


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',], ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


let [players1, players2] = game.players

let [gk, ...fieldplayers] = players1

let allplayers = [...players1, ...players2]

let players1Final = [...players1, 'Thiago', 'Courtinho', 'Perisic']

// let { team1, x: draw, team2 } = game.odds

let printGoals = function (...allplayers2) {
  console.log(allplayers2)
  let stringDone = allplayers2.join(', ')
  console.log(`${stringDone} scored ${allplayers2.length} goals`)
}




for (let loop of game.scored.entries()) {
  console.log(`Goal ${loop[0] + 1}: ${loop[1]}`)
}

let sum = 0
let result = 0

for (let loop of Object.entries(game.odds)) {
  sum = sum + loop[1]
  result = sum / (loop.length + 1)
}
console.log(sum)
console.log(result)




for (let loop of Object.entries(game.odds)) {
  console.log(`Odds of ${loop[0] == 'x' ? '' : 'victory'} ${game[loop[0]] || 'Draw'}: ${loop[1]}`)
}


let scores = {
}


for (let loop of game.scored.entries()) {
  scores[loop[1]] = scores[loop[1]] ? 1 + scores[loop[1]] : 1
}

console.log(scores)













//Coding challenge 11

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);


let arrSet = new Set([...gameEvents.values()])

console.log(arrSet.keys())
let arr = [...arrSet]

console.log(arr)

gameEvents.delete(64)

console.log([...gameEvents.keys()])

let key = [...gameEvents.keys()]
let lastKey = key[key.length - 1]
console.log(key.shift())
console.log(key)




for (let loop of gameEvents) {
  console.log(`${loop[0] < 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${loop[0]}: ${loop[1]}`)
}







//Coding challenge 11

let input = document.querySelector('.codingchallege4undersection9')


let undersocoretocamel = function (text) {
  let lowerCase = text.toLowerCase()
  let splitContent = lowerCase.split('\n')
  let arr = []
  let emo = '✔️'


  for (let loop of splitContent) {
    let splitContent2 = loop.split('_')
    let firtLetterCapital = splitContent2[1][0].toUpperCase() + splitContent2[1].slice(1)
    let concatt = splitContent2[0].trimStart() + firtLetterCapital.trimStart()
    arr.push(concatt)
  }
  let sum = ''


  for (let loop2 = 0; loop2 <= arr.length - 1; loop2++) {
    let senetece = `${arr[loop2].padEnd(17, ' ')} ${emo.repeat(loop2 + 1)} \n`
    console.log(senetece)
    sum = sum + senetece
    input.value = sum
  }

}


document.querySelector('.b1').addEventListener('click', function () {
  undersocoretocamel(input.value)
})





//random challenge

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


let splitted = flights.split('+')

// console.log(splitted)
let arr1 = []
for (let loop of splitted) {
  let splitted2 = loop.split(';')
  arr1.push(splitted2)
  console.log(arr1)
}




for (let loop1 of arr1) {
  let str = `${loop1[0].includes('Delayed') ? '🚩' : ''} ${loop1[0].replaceAll('_', ' ').trimStart()} from ${loop1[1].slice(0, 3).toUpperCase()} to ${loop1[2].slice(0, 3).toUpperCase()} (${loop1[3].slice(0, 2)}h${loop1[3].slice(3, 5)})`.padStart(50, ' ')
  console.log(str)
}













//coding challenge 12

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: [0, 0, 0, 0],
  registerNewAnswer: function () {
    let str = this.options.join(`\n`)
    let promptt = Number(prompt(`${this.question}\n${str}\nWrite Option Number`))
    if (promptt == 0) {
      this.answers[0] = this.answers[0] + 1
    }
    else if (promptt == 1) {
      this.answers[1] = this.answers[1] + 1
    }
    else if (promptt == 2) {
      this.answers[2] = this.answers[2] + 1
    }
    else if (promptt == 3) {
      this.answers[3] = this.answers[3] + 1
    }
    else { alert('Invalid Number') }
  },
  displayResults: function (str1 = 'array') {
    if (str1 === 'string') { alert(`Poll results are ${this.answers.join(', ')}`) }
    else { console.log(this.answers) }
  }
};

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll)) //using the bind fucntion method to call the event

document.querySelector('.poll').addEventListener('click', function () {
  poll.registerNewAnswer()
}) //using the normal fucntion

document.querySelector('.showpoll').addEventListener('click', function () {
  poll.displayResults('string')
})



let data1 = [5, 2, 3]
let data2 = [1, 5, 3, 9, 6, 1]

let newObj = {
  answers: [...data1, ...data2]
}

poll.displayResults.call(newObj, 'array')

// console.log(newObj.answers)












//#Coding challenge 12. Practicing advanced arr methods

let juliaData = [3, 5, 2, 12, 7]
let kateData = [4, 1, 15, 8, 3]

let juliaData2 = [9, 16, 6, 8, 3]
let kateData2 = [10, 5, 6, 1, 4]


let checkDogs = function (arr1, arr2) {
  let mod = arr1
  let modJuliaarr = mod.splice(1, 2)
  let newArr = [...modJuliaarr, ...arr2]

  console.log(newArr)

  newArr.forEach(function (elm, indx) {
    if (elm >= 3) {
      console.log(`Dog number ${indx + 1} is an Adult, and is ${elm} years old!`)
    }
    else {
      console.log(`Dog number ${indx + 1} is a Kid, and is ${elm} years old!!`)
    }
  })
}



checkDogs(juliaData, kateData)
console.log('---NEXT')
checkDogs(juliaData2, kateData2)













//coding challenge


let data4 = [5, 1, 4, 1, 15, 8, 3]
let data5 = [16, 6, 10, 5, 6, 1, 4]


let calcAverageHumanAge = function (arr) {
  let res = arr.map(function (el, inde, arr) {
    if (el <= 2) {
      return 2 * el
    }
    else {
      return 16 + el * 4
    }
  }).filter(function (el, ind, arr) {
    return el >= 18
  }).reduce(function (acc, el, inde, arr) {
    return acc + el / arr.length
  }, 0) //start accumulator from 0 set
  console.log(res)
}

calcAverageHumanAge(data4)
calcAverageHumanAge(data5)




















//Coding Challenge
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];


let recommendFoodPortion = dogs.map(function (el, ind) {
  let recoFoodPortion = el.weight ** 0.75 * 28
  el.recoFoodPortion = Math.trunc(recoFoodPortion)
  return el
}).find(function (el) {
  return el.owners.includes('Sarah')
})
console.log(recommendFoodPortion)

if (recommendFoodPortion.curFood > recommendFoodPortion.recoFoodPortion) { console.log(`Dog is eating too much!`) }
else if (recommendFoodPortion.curFood > (recommendFoodPortion.recoFoodPortion * 0.90) && recommendFoodPortion.curFood < (recommendFoodPortion.recoFoodPortion * 1.10)) {
  console.log(`Dog is eating Okay Amount`)
}
else { console.log(`Dog is eating too little`) }


console.log(dogs)


let ownersEatTooMuch = Array.from(dogs, function (el, ind) {
  if (el.curFood > el.recoFoodPortion) {
    return el.owners
  }
}).filter(function (el) {
  return el != undefined
}).flat()

console.log(ownersEatTooMuch.join(' and ') + ' Eat Too Much')



let ownersEatTooLittle = Array.from(dogs, function (el, ind) {
  if (el.curFood < el.recoFoodPortion) {
    return el.owners
  }
}).filter(function (el) {
  return el != undefined
}).flat()

console.log(ownersEatTooLittle.join(' and ') + ' Eat Too Little')



let same = dogs.some(function (el) {
  return el.curFood == el.recoFoodPortion
})

console.log(same)

let okay = dogs.some(function (el) {
  return el.curFood > (el.recoFoodPortion * 0.90) && el.curFood < (el.recoFoodPortion * 1.10)
})

console.log(okay)

let okayArr = Array.from(dogs, function (el) {
  if (el.curFood > (el.recoFoodPortion * 0.90) && el.curFood < (el.recoFoodPortion * 1.10)) {
    return el
  }
}).filter(function (el) {
  return el != undefined
})

console.log(okayArr)


let shallowCopyArr = Array.from(dogs, function (el) {
  return el
}).sort(function (a, b) {
  return a.recoFoodPortion - b.recoFoodPortion
})
console.log(shallowCopyArr)














//Coding Challenge 18 //OOP

let carFunc = function (make, speed) {
  this.speed = parseInt(`${speed}km/h`)
  this.maker = make
}

carFunc.prototype.accelerate = function () {
  return `The new speed of ${this.maker} is ${this.speed + 10}km/h`
}

carFunc.prototype.brake = function(){
  return `The brake speed of ${this.maker} is ${this.speed - 5}km/h`
}

let Bmw = new carFunc('BMW', 120)
let Mercedes = new carFunc('Mercedes', 95)

console.log(Bmw.accelerate())
console.log(Mercedes.accelerate())

console.log(Bmw.brake())
console.log(Mercedes.brake())


















//coding challenge

let currentSpeed = 120

let carConst = class {
  constructor(make, speed){
    this.maker = make
    this.speed = speed
  }

  accelerate(){
    currentSpeed = currentSpeed + 10
    console.log(`Speed of ${this.maker} UP to ${currentSpeed}`)
  }

  brake(){
    currentSpeed = currentSpeed - 5
    console.log(`Speed of ${this.maker} DOWN to ${currentSpeed}`)
  }

  get speedUS(){
    console.log(`${currentSpeed / 1.6} mi/h`)
  }

  set speedUS(speed){
    console.log(`${speed * 1.6} km/h`)
  }
}

let bmw = new carConst('BMW', 120)
let mercedes = new carConst('Mercedes', 95) 

console.log(bmw)

bmw.accelerate()
bmw.brake()



bmw.speedUS
bmw.speedUS = currentSpeed









//coding challenge

//Class 1 - Parent
let car = function (make, currentSpeed) {
  this.maker = make
  this.currentSpeed = currentSpeed
}

car.prototype.accelerate = function () {
  this.currentSpeed = this.currentSpeed + 20
  this.charge = this.charge - 1
  return `${this.maker} is going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%`
}

car.prototype.brake = function () {
  this.currentSpeed = this.currentSpeed - 1
  return `The brake speed of ${this.maker} is ${this.currentSpeed}km/h`
}

car.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
  return this.charge
}

let toyota = new car('Toyota', 1000)


//Class 2 - Child
let EV = function (make, currentSpeed, battery) {
  this.maker = make
  this.currentSpeed = currentSpeed
  this.charge = battery
}

EV.prototype = car.prototype

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
}

let tesla = new EV('Tesla', 120, 23)


console.log(tesla.chargeBattery(90))
console.log(tesla.accelerate())
console.log(tesla.accelerate())
console.log(tesla.accelerate())
console.log(tesla.brake())

console.log(tesla)





//code chall

// let car = class {
//   constructor(make, currentSpeed) {
//     this.make = make
//     this.speed = currentSpeed
//   }

//   accelerate() {
//     this.speed = this.speed + 20
//     this.charge = this.charge - 1
//     console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`)
//   }

//   brake() {
//     this.speed = this.speed - 1
//     console.log(`${this.make} has stopped at ${this.speed}km/h`)
//   }
// }




// let EV = class extends car {
//   constructor(make, currentSpeed, charge) {
//     super(make, currentSpeed)
//     this.charge = charge
//   }
//   chargeBattery(chargeTo) {
//     this.charge = chargeTo
//     console.log(`Battery is now at ${this.charge}`)
//   }
// }



// let benz = new EV('Benzo', 120, 23)

// console.log(benz)

// benz.chargeBattery(100)
// benz.accelerate()
// benz.accelerate()
// benz.brake()
// benz.accelerate()



































//coding challenge Async and fetch


let WhereAmI = function (lat, lng) {
  let get = fetch(`https://geocode.xyz/${lat},${lng}?json=1`)

  get.then(function (response) {
    if (!response.ok) throw new Error(`Fatal Error`)
    return response.json()
  }).then(function (jsonText) {
    console.log(jsonText)
    console.log(`You are in ${jsonText.city}, ${jsonText.country}`)
    wikidata = jsonText.osmtags.wikidata
  }).catch(function () {
    console.log('Fatal Error')
  })
}


// WhereAmI(52.508, 13.381)
// WhereAmI(19.037, 72.873)
WhereAmI(-33.933, 18.474)