import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
  test("should render the component", () => {
    render(<MyCounterApp></MyCounterApp>);

    expect(
      screen.getByRole("heading", {
        level: 1,
      }).innerHTML
    ).toContain("counter: 10");

    expect(
      screen.getByRole("button", {
        name: "-1",
      }).innerHTML
    ).toBeDefined();
  });

  test("should increment the counter", () => {
    render(<MyCounterApp></MyCounterApp>);

    const labelH1 = screen.getByRole("heading", {
      level: 1,
    });

    const button = screen.getByRole("button", {
      name: "+1",
    });
    // launch click
    fireEvent.click(button);

    expect(labelH1.innerHTML).toContain("counter: 11");
  });
});
