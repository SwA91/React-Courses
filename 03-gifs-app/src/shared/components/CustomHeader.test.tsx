import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "test tiel";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title}></CustomHeader>);
    // screen.debug();

    expect(screen.getByText(title)).toBeDefined();
  });
  test("should render the descripcion when provied", () => {
    const description = "test desc";
    render(
      <CustomHeader title={title} description={description}></CustomHeader>
    );
    // screen.debug();
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);
  });
  test("should not render description when not provided", () => {
    // const { container } = render(<CustomHeader title={title}></CustomHeader>);
    // screen.debug();
    // const divElement = container.querySelector(".content-center");
    // const p = divElement?.querySelector("p");
    // validar que sea nulo
    // expect(p?.innerHTML).toBeNull();
  });
});
