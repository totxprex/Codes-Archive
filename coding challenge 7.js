// coding challenge 7

let markDetails = {
  MarkFullName: 'Mark Miller',
  MarkMass: 78,
  Markheight: 1.69,
  calcBMIMark: function () {
    let bMIValue = this.MarkMass / (this.Markheight ** 2)
    this.bMI = bMIValue //Note new property created
    return this.bMI
  }
}

let johnDetails = {
  JohnFullName: 'John Smith',
  JohnMass: 92,
  JohnHeight: 1.95,
  calcJohnMark: function () {
    let bMIValue1 = this.JohnMass / (this.JohnHeight ** 2)
    this.bMI1 = bMIValue1 //Note new property created
    return this.bMI1
  }
}

console.log(markDetails.calcBMIMark())
console.log(johnDetails.calcJohnMark())

console.log(`${markDetails.MarkFullName}'s BMI(${markDetails.calcBMIMark()}) is greater than ${johnDetails.JohnFullName}'s BMI (${johnDetails['calcJohnMark']()}).`)

console.log(markDetails.bMI)
console.log(johnDetails.bMI1)
//what I am doing here is calling the markDetails's new property 'bMI' added using fucntion calcJohnMark. This works because calcJohnMark has already been invoked or called.



// console.log(`${markDetails.bMI > johnDetails.bMI1 ? `${markDetails.MarkFullName}'s BMI(${markDetails.calcBMIMark()}) is greater than ${johnDetails.JohnFullName}'s BMI (${johnDetails['calcJohnMark']()})` : `${markDetails.MarkFullName}'s BMI(${markDetails.calcBMIMark()}) is less than ${johnDetails.JohnFullName}'s BMI (${johnDetails.calcJohnMark()})`}`) // Using Ternery operator inside template literal