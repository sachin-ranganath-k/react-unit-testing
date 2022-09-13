import { render, screen } from "@testing-library/react";
import Company from "./Company";

describe("Company component", () => {
  it("Has company name cognizant", () => {
    render(<Company />);
    const companyNameEl = screen.getByTestId("companyName");
    expect(companyNameEl.textContent).toBe(`cognizant's official website`);
  });

  //Props testing
  it("receives ", () => {
    render(<Company name="Cognizant Technology Solutions" />);
    expect(screen.getByTestId("companyFullName")).toHaveTextContent("Cognizant Technology Solutions");
  });
});
