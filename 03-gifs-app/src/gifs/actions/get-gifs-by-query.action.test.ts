import AxiosMockAdaptar from "axios-mock-adapter";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { giphySearchResponseMock } from "../../mock-data/giphy.response.data";
import { giphyApi } from "../api/giphy.api";
import { getGifsByQuery } from "./get-gifs-by-query.action";

describe("getGifsByQuery", () => {
  // test("should return a list of gifs", async () => {
  //   // llamada real a la api
  //   const gifs = await getGifsByQuery("goku");
  //   // console.log(gifs);
  //   const [gif1] = gifs;
  //   // validar el tipado de propiedades de un objeto
  //   expect(gif1).toEqual({
  //     id: expect.any(String),
  //     height: expect.any(Number),
  //     width: expect.any(Number),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //   });
  // });

  // unica instancia reutilizable
  let mock = new AxiosMockAdaptar(giphyApi);

  beforeEach(() => {
    // mock.reset();
    mock = new AxiosMockAdaptar(giphyApi);
  });

  test("should return a list of gifs", async () => {
    // capturamos una llamada GET
    // devolvemos un mock respuesta
    // todo esto a nivel global, ojo!
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const gifs = await getGifsByQuery("goku");
    expect(gifs.length).toBe(10);
    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.width).toBe("number");
      expect(typeof gif.height).toBe("number");
    });
  });

  test("should return a list of gifs if query is empty", async () => {
    // queremos testear la implementacion real
    mock.restore();
    const gifs = await getGifsByQuery("");
    expect(gifs.length).toBe(0);
  });

  test("should handle error when the API return an error", async () => {
    // espia el comportamiento de un objeto
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      // error() es una funcion, devolvemos una funcion vacia,
      //  y no el chorizo de error que manda el original
      .mockImplementation(() => {
        // console.log("mockImplementation");
      });

    mock.onGet("/search").reply(400, {
      data: {
        message: "bad request",
      },
    });

    const gifs = await getGifsByQuery("goku");

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    // nos aseguramos que se lanzo el error() con algo
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
  });
});
