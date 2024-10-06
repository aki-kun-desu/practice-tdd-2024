import { Dollar } from "../src/dollar";

test("$5 * 2 = $10", () => {
  const five = Dollar(5);
  five.times(2);
  expect(five.getAmount()).toBe(10);
});
