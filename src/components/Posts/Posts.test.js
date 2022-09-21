import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts Component", () => {
  const mockPostList = [
    {
      id: 1,
      title: "first post",
    },
    {
      id: 2,
      title: "second post",
    },
  ];

  async function mockFetch() {
    return {
      status: 200,
      json: async () => {
        return mockPostList;
      },
    };
  }

  beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch); //Add fetch to window object i.e., spying
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  it("renders posts with mock data [SPY]", async () => {
    render(<Posts />);

    expect(await screen.findByText(/first post/)).toBeInTheDocument();
    expect(await screen.findByText(/second post/)).toBeInTheDocument();
  });
});
