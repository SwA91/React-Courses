import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import * as gifActions from "../actions/get-gifs-by-query.action";
import { useGifs } from "./useGifs";

// pruebas de integacion porque se hacen llamadas a API`s

describe("useGifs", () => {
  test("should return default values methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    // handleSearch
    const { result } = renderHook(() => useGifs());

    // esperamos que acabe la llamada
    await act(async () => {
      // esperamos que acabe la llamada
      await result.current.handleSearch("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs when handleTermClicked is called", async () => {
    // handleSearch
    const { result } = renderHook(() => useGifs());

    // esperamos que acabe la llamada
    await act(async () => {
      // esperamos que acabe la llamada
      await result.current.handleTermClicked("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    // no pasa por la cache
    await act(async () => {
      await result.current.handleTermClicked("goku");
    });
    expect(result.current.gifs.length).toBe(10);

    // pasa por la cache pero lanzamos una excepcion
    // ya que nos interesa ver lo que devolvio de la cache
    vi.spyOn(gifActions, "getGifsByQuery")
      // lanzamos una excepcion con reject
      .mockRejectedValue(new Error("this is my custom error"));

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return no more than 8 previous term", async () => {
    const { result } = renderHook(() => useGifs());
    vi.spyOn(gifActions, "getGifsByQuery")
      // resolvemos con un array vacio
      .mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("goku1");
    });
    await act(async () => {
      await result.current.handleSearch("goku2");
    });

    expect(result.current.previousTerms.length).toBe(2);
    // evaluamos que se llamo correctamente
    expect(result.current.previousTerms).toStrictEqual(["goku2", "goku1"]);

    // console.log(result.current.previousTerms);
  });
});
