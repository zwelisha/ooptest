const { Person } = require("../src/oopSrc");

describe("function Hello in a class Person", function () {

  let person = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives.'])
  
  it("should returns greeting", function () {
    expect(person.hello()).toEqual(`Hello, my name is Ryan and I am 30 years old.I'm a male and my interests are being a hardarse,agile,ssd hard drives.`);
  });
});

describe("class constructor", function () {

  let person = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives.'])

  it("should returns name", function () {
    expect(person.name).toEqual(`Ryan`);
  });

  it("should returns age", function () {
    expect(person.age).toEqual(30);
  });

  it("should returns gender", function () {
    expect(person.gender).toEqual(`male`);
  });

  it("should returns interests", function () {
    expect(person.interests).toEqual(['being a hardarse', 'agile', 'ssd hard drives.']);
  });
});