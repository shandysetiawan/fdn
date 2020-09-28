import React from "react";
import { render } from "@testing-library/react";
import Billboard from "../../components/billboard";

it("renders correctly", () => {
  const { getByText } = render(<Billboard />);
  expect(getByText("Billboard 970x250")).toBeInTheDocument();
});
