const add = (a, b) => {
  return a + b;
};

console.log(add(5, 10, 20));

const user = {
  name : 'Sunidhi',
  cities: ['Indore', 'Charlotte', 'Chicago'],
  printPlaces() {
    return this.cities.map((city) => this.name + ' has visited ' + city);
  }
};

console.log(user.printPlaces());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
