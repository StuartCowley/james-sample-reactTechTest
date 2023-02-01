import React from "react";
import { render } from "@testing-library/react";
import SearchComponent from "../components/Search";

describe("it renders correcty", () => {
  const { asFragment } = render(<SearchComponent />);
  it("renders a search box", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
