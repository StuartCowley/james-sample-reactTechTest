import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/app";

describe("App", () => {
  const { asFragment } = render(<App />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
