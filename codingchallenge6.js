// // coding challenge 6


let tipCalculator = function (billvalue) {
  let tipss = billvalue >= 50 && billvalue <= 300 ? 15 / 100 * billvalue : 20 / 100 * billvalue
  return tipss
}

let bills = [125, 555, 44]
let tip = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])]
console.log(tip)

let total = [tipCalculator(bills[0]) + bills[0], tipCalculator(bills[1]) + bills[0], tipCalculator(bills[2]) + bills[2]]
console.log(total)