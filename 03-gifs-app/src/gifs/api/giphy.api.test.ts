import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphyApi", () => {
  test("should be configure correctly", () => {
    const params = giphyApi.defaults.params;

    // evaluar datos primitivos
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");

    // evaluar objetos profundos
    expect(params).toStrictEqual({
      lang: "es",
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});
