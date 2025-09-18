import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// creamos sus referencias
const handlAddMock = vi.fn();
const handlSubtractMock = vi.fn();

// simulacion mokeada
vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 20,
    handlSubtract: handlSubtractMock,
    handleAdd: handlAddMock,
    handleReset: vi.fn(),
  }),
}));

describe("MyCounterApp2", () => {
  test("should render the component", () => {
    render(<MyCounterApp></MyCounterApp>);
    // screen.debug();
    expect(
      screen.getByRole("heading", {
        level: 1,
      }).innerHTML
    ).toContain("counter: 20");

    expect(
      screen.getByRole("button", {
        name: "-1",
      }).innerHTML
    ).toBeDefined();
  });

  test("should call handleAdd if button is clicked", () => {
    render(<MyCounterApp></MyCounterApp>);
    const button = screen.getByRole("button", {
      name: "+1",
    });
    fireEvent.click(button);

    // quiero capturar el handleAdd si es llamado o no
    expect(handlAddMock).toHaveBeenCalled();
  });
});
