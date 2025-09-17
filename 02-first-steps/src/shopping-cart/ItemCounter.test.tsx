import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    // ARRANGE
    const name = "Test item";
    render(<ItemCounter name={name} />);
    // screen.debug();

    // que exista
    expect(screen.getByText(name)).toBeDefined();
    // que no sea null
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Test item2";
    const quantity = 10;
    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count when +1 button is pressed", () => {
    render(<ItemCounter name={"test item"} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole("button");
    // literalmente ejecuta el codigo
    fireEvent.click(buttonAdd);

    // muy volatil el getByText ya que puede dar falsa alarmas
    expect(screen.getByText("2")).toBeDefined();
  });

  test("should increase count when -1 button is pressed", () => {
    render(<ItemCounter name={"test item"} quantity={5} />);

    const [, buttonSubtract] = screen.getAllByRole("button");
    // literalmente ejecuta el codigo
    fireEvent.click(buttonSubtract);

    // muy volatil el getByText ya que puede dar falsa alarmas
    expect(screen.getByText("4")).toBeDefined();
  });

  test("should increase count when -1 button is pressed and quantity 1", () => {
    render(<ItemCounter name={"test item"} quantity={1} />);

    const [, buttonSubtract] = screen.getAllByRole("button");
    // literalmente ejecuta el codigo
    fireEvent.click(buttonSubtract);

    // muy volatil el getByText ya que puede dar falsa alarmas
    expect(screen.getByText("1")).toBeDefined();
  });

  test("should change to red when count is 1", () => {
    const name = "test item";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("red");
  });

  test("should change to black when count is greater than 1", () => {
    const name = "test item";
    const quantity = 2;
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("black");
  });
});
