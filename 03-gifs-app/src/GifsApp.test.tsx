import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { GifsApp } from "./GifsApp";

describe("GifsApp", () => {
  test("should render componente propertly", () => {
    const { container } = render(<GifsApp></GifsApp>);
    expect(container).toMatchSnapshot();
    // provocamos un fallo para probar nuestro build
    // expect(2).toBe(1);
  });
});
