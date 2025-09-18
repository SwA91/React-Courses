import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  test("should render search bar correctly", () => {
    const { container } = render(<SearchBar onQuery={() => {}}></SearchBar>);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("should call onquery with teh correct value after 700ms", async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    // espera hasta que sea invocado y evaluado
    // necesario el await para esperar su ejecucion y evaluar los test
    await waitFor(() => {
      // ! ojo con el timeout del debounce
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith("test");
    });
    // screen.debug();
  });

  test("should call onl once with the last value (debounce)", async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.change(input, { target: { value: "te" } });
    fireEvent.change(input, { target: { value: "test" } });

    // se espera a que termine el debounce
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledTimes(1);
      expect(onQuery).toHaveBeenCalledWith("test");
    });
  });

  test("should call onquery when button cliekd with the input value", () => {
    // espiamos al onQuery
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    // simulamos el cambio de valor en el input
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    // simulamos el boton de busqueda
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // validamos lo espiado del onQuery
    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith("test");
  });

  test("should the input has the correct placeholder value", () => {
    const value = "buscar gif";
    render(<SearchBar onQuery={() => {}} placeholder={value} />);

    expect(screen.getByPlaceholderText(value)).toBeDefined();
  });
});
