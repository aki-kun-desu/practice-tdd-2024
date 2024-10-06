import { Dollar } from "../src/dollar";

test("$5 * 2 = $10", () => {
  const five = Dollar(5);
  let product = five.times(2);
  expect(product.getAmount()).toBe(10);
  product = five.times(3);
  expect(product.getAmount()).toBe(15);
});

test("equals()", () => {
  expect(Dollar(5).equals(Dollar(5))).toBe(true);
  expect(Dollar(5).equals(Dollar(6))).toBe(false);
});
