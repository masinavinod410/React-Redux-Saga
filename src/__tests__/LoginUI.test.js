import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import LoginUI from "../Components/LoginUI";

describe("Login Page Unit Test", () => {
  it("Should render Login component", () => {
    render(<LoginUI />);
    const element = screen.getByTestId("userName");
    expect(element).toBeInTheDocument();
  });
});
