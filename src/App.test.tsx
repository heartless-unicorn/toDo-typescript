import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("page renders all elements", () => {
  test("renders input and submit button", () => {
    render(<App />);
    const input = screen.getByRole("input");
    expect(input).toBeInTheDocument()
  });
});
