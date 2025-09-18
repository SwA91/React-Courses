import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  // se actualiza por referencia, no nos sirve eso
  // const { result } = renderHook(() => useCounter());

  test("should initialize with default value of 10", () => {
    // renderizamos un hook para test
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test("should initialize with default value of 20", () => {
    const initial = 20;
    const { result } = renderHook(() => useCounter(initial));

    expect(result.current.counter).toBe(initial);
  });

  test("should incremente counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    // se envuelve en act() para los cambios de estados
    act(() => {
      result.current.handleAdd();
      // no se debe repetir sino crear otro act()
      // result.current.handleAdd();
    });

    expect(result.current.counter).toBe(11);
  });

  test("should decrement counter when handlesubtract is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handlSubtract();
    });
    expect(result.current.counter).toBe(9);
  });

  test("should reset to initial value the counter when handlereset is called", () => {
    const { result } = renderHook(() => useCounter());
    // actualizamos el state
    act(() => {
      result.current.handlSubtract();
    });
    act(() => {
      result.current.handlSubtract();
    });
    // reseteamos el state
    act(() => {
      result.current.handleReset();
    });
    expect(result.current.counter).toBe(10);
  });
});
