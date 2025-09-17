import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

// simula retornos ej. http
const mockItemCounter = vi.fn((props: unknown) => {
  return (
    <div
      data-testid="item-counters"
      name={props.name}
      quantity={props.quantity}
    ></div>
  );
});

// mockeamos la importación del componente en el componente padre
vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// componente ficticio
// alteramos las importaciones del render que hace por debajo
// vi.mock("./shopping-cart/ItemCounter", () => ({
// capturo y regreso lo que quiera
//   ItemCounter: (props: unknown) => (
// <div
//   data-testid="item-counters"
//   name={props.name}
//   quantity={props.quantity}
// ></div>
//   ),
// }));

describe("FirstStepApp", () => {
  afterEach(() => {
    // limpiar los mocks despues de cada test
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp></FirstStepsApp>);
    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of itemcounter components", () => {
    render(<FirstStepsApp></FirstStepsApp>);
    const itemCounters = screen.getAllByTestId("item-counters");
    screen.debug();

    expect(itemCounters.length).toBe(3);
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepsApp></FirstStepsApp>);

    // controlamos cuantas veces se llamo al mock
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: " nintendo",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: " playstation 4",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: " xbox 260",
      quantity: 3,
    });
  });
});
