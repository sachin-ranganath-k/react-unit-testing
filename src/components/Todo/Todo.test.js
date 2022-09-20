import { render, screen, waitFor } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo Component", () => {
  it("Todo via REST API Call (Option 1)", async () => {
    render(<Todo />);
    //Passes but Not recommanded
    expect(await screen.findByText("delectus aut autem")).toBeInTheDocument();
  });

  it("Todo via REST API Call (Option 2)", async () => {
    render(<Todo />);
    //Passes but Not recommanded
    await waitFor(() => {
      expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    });
  });
});
