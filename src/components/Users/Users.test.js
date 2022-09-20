import { screen, render, waitFor } from "@testing-library/react";
import Users from "./Users";
import { fetchAPI } from "../utils/fetchAPI";

jest.mock("../utils/fetchAPI");

describe("renders the users comp with rest api data [MOCKING]", () => {
  it("render", async () => {
    const usersList = [
      {
        id: 1,
        name: "Sachin",
      },
      {
        id: 2,
        name: "Ranganath",
      },
    ];
    fetchAPI.mockResolvedValue(usersList);
    render(<Users />);
    await waitFor(() => {
      expect(screen.getByText("Sachin")).toBeInTheDocument();
    });
  });

  it("renders error in comp properly with API data [MOCKING]", async () => {
    fetchAPI.mockRejectedValue(new Error("error occured"));
    render(<Users />);
    await waitFor(() => {
      expect(screen.getByText(/Sorry/i)).toBeInTheDocument();
    });
  });
});
