import { Dollar } from "../src/dollar";

test("$5 * 2 = $10", () => {
  const five = Dollar(5);
  let product = five.times(2);
  expect(product.getAmount()).toBe(10);
  product = five.times(3);
  expect(product.getAmount()).toBe(15);
});
