import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("should render firstname and lastname", () => {
    // ARRANGE
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();
    // vemos todo el html renderizado
    // console.log(container.innerHTML);

    // ACT
    const h1 = container.querySelector("h1"); // primer h1

    // ASSERT
    expect(h1?.innerHTML).toContain("Pepe");
  });
  test("should render with screen", () => {
    render(<MyAwesomeApp />);
    screen.findByRole("heading");
    //   luego mejoramos los test con screen
    // con los eventos es mejor usar screen y no solo container
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
    // es rigido el snapshot para las pruebas
    // si el componente recibe muchas modificaciones
    // mejor no usar snapshot
  });
});
