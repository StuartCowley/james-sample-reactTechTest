import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("it renders an image", () => {
  const { asFragment } = render(<SearchResults />);
  it("renders", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
