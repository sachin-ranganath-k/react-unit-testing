import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Company from "./Company";

describe("Company component", () => {
  it("Has company name cognizant", () => {
    render(<Company />);
    const companyNameEl = screen.getByTestId("companyName");
    expect(companyNameEl.textContent).toBe(`cognizant's official website`);
  });

  //Props testing
  it("receives name prop", () => {
    render(<Company name="Cognizant Technology Solutions" />);
    expect(screen.getByTestId("companyFullName")).toHaveTextContent(
      "Cognizant Technology Solutions"
    );
  });

  //input element with 'Enter country' as placeholder
  it(`has an input element with 'Enter country' as placeholder`, () => {
    render(<Company />);
    const country = screen.getByPlaceholderText("Enter Country");
    expect(country).toBeTruthy();
  });

  //useState, onChange testing
  it("should update country onChange event", () => {
    render(<Company />);
    // let's find the input element that has onChange handler
    const countryInput = screen.getByPlaceholderText("Enter Country");

    // now checking if onChange event is working well or not
    // mock fire the onChange event with mock value

    fireEvent.change(countryInput, {
      target: {
        value: "Australia",
      },
    });
    expect(countryInput.value).toBe("Australia");
    expect(screen.getByText("Head over to Cognizant Australia website"));

    fireEvent.change(countryInput, {
      target: {
        value: "UK",
      },
    });
    expect(countryInput.value).toBe("UK");
    expect(screen.getByText("Head over to Cognizant UK website"));
  });

  //Testing inline css
  it("css style with bg color green", () => {
    render(<Company />);
    expect(screen.getByTestId("successNotification")).toHaveStyle(
      "background-color:#00ff00"
    );
  });

  //testing element with css class
  it("css style with class", () => {
    render(<Company />);
    expect(screen.getByTestId("successNotification")).toHaveClass(
      "notification"
    );
  });

  //testing button css with class
  it("css style with class of button", () => {
    render(<Company />);
    expect(screen.getByRole("buttonClick")).toHaveClass("btn-danger");
  });

  //snapshot testing
  it("snapshot testing", () => {
    //npm i react-test-renderer
    const snapshotJSON = renderer.create(<Company name="Cognizant Technology Solutions" />);
    expect(snapshotJSON).toMatchSnapshot();
  });
});
