const Execises = require("./ex");
const Ex = new Execises();

// EX1

test("expect isEven to return true when 2", function () {
  expect(Ex.isEven(2)).toBeTruthy();
});

test("expect isEven to return true when 0 ", function () {
  expect(Ex.isEven(0)).toBeTruthy();
});
test("expect isEven to return false when odd", function () {
  expect(Ex.isEven(1)).toBeFalsy();
});
test("expect isEven to return false when odd and negative", function () {
  expect(Ex.isEven(-1)).toBeFalsy();
});

test("expect isEven to return false when not valid paramater", () => {
  expect(Ex.isEven("a")).toBeFalsy();
});
// EX2

test("expect arr to have length 0 when its length is 0 ", function () {
  let arr = [];
  expect(Ex.removeAtLeastOne(arr).length).toBe(0);
});

test("expect arr to have less values ", function () {
  let arr = [1, 1, 1, 1, 1, 1];
  expect(Ex.removeAtLeastOne(arr).length).toBeLessThan(6);
});

// EX3

test("expect to return empty string ", function () {
  let str = "!#.,'";
  expect(Ex.simplify(str)).toBe("");
});

test("expect to remove first char of string ", function () {
  let str = "!aaa";
  expect(Ex.simplify(str)).toBe("aaa");
});

test("expect to remove last char of string ", function () {
  let str = "aaa#";
  expect(Ex.simplify(str)).toBe("aaa");
});

test("expect not to remove anything ", function () {
  let str = "abcde";
  expect(Ex.simplify(str)).toBe("abcde");
});

// EX 4

test("expect to return Error no booleans", function () {
  let boolArr = [];
  expect(Ex.validate(boolArr)).toEqual({ error: "Need at least one boolean" });
});

test("expect to return True more true than false", function () {
  let boolArr = [true, true, false];

  expect(Ex.validate(boolArr)).toBeTruthy();
});

test("expect to return False less trues than false", function () {
  let boolArr = [true, false, false];

  expect(Ex.validate(boolArr)).toBeFalsy();
});

test("expect to return False same amount of true and false", function () {
  let boolArr = [true, false];

  expect(Ex.validate(boolArr)).toBeFalsy();
});

// EXTENSION

test("called push", () => {
  const Ex = new Execises();

  const spy = jest.spyOn(Array.prototype, "push");
  Ex.add(1, 2);
  expect(spy).toHaveBeenCalled();
});

test("called push with 1 and 2 ", () => {
  const Ex = new Execises();

  const spy = jest.spyOn(Ex, "add");
  Ex.add(1, 2);
  expect(spy).toHaveBeenCalledWith(1, 2);
});
