import { describe, expect, test } from "vitest";
import { add } from "./math.helper";

describe("add", () => {
  test("dos numberos positivos", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    //   ! 3. Assert
    expect(result).toBe(3);
  });
  test("dos numberos negativos", () => {
    // ! 1. Arrange
    const a = -1;
    const b = -2;

    // ! 2. Act
    const result = add(a, b);

    //   ! 3. Assert
    expect(result).toBe(a + b);
  });
});
