import { render, screen } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Adil",
          last: "Bulsari",
        },
        picture: {
          large: "https://randomuser.me/api/potraits/men/39.jpg",
        },
        login: {
          username: "Messi - The GOAT",
        },
      },
      {
        name: {
          first: "Adil",
          last: "Bulsari",
        },
        picture: {
          large: "https://randomuser.me/api/potraits/men/39.jpg",
        },
        login: {
          username: "Messi - The GOAT",
        },
      },
      {
        name: {
          first: "Adil",
          last: "Bulsari",
        },
        picture: {
          large: "https://randomuser.me/api/potraits/men/39.jpg",
        },
        login: {
          username: "Messi - The GOAT",
        },
      },
      {
        name: {
          first: "Adil",
          last: "Bulsari",
        },
        picture: {
          large: "https://randomuser.me/api/potraits/men/39.jpg",
        },
        login: {
          username: "Messi - The GOAT",
        },
      },
      {
        name: {
          first: "Adil",
          last: "Bulsari",
        },
        picture: {
          large: "https://randomuser.me/api/potraits/men/39.jpg",
        },
        login: {
          username: "Messi - The GOAT",
        },
      },
    ],
  },
};

describe("Followers List", () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValueOnce(mockResponse);
  });
  afterEach(() => {
    mockAxios.reset();
  });
  it("Render a single follower", async () => {
    //arrange
    render(<MockFollowersList />);
    //act
    const followerDivElement = await screen.findByTestId("follower-item-0");
    //assert
    expect(followerDivElement).toBeInTheDocument();
  });
  it("Render all follower", async () => {
    //arrange
    render(<MockFollowersList />);
    //act
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    //assert
    expect(followerDivElement.length).toBe(5);
  });
});
