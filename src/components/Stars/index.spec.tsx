import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Stars from ".";

jest.mock("../../contexts/userData", () => ({
  useGitHub: jest.fn(() => ({ userData: { followers: 0, public_repos: 0 } })),
}));

describe("Stars component", () => {
  it("should render default empty stars when user has no followers and repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 0, public_repos: 0 },
      });

    render(<Stars />);

    const StarOutlineIcon = screen.getAllByTestId("StarOutlineIcon");

    expect(StarOutlineIcon).toHaveLength(5);
  });

  it("should render 1 filled star when user has up to 2 followers and 1 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 2, public_repos: 1 },
      });

    render(<Stars />);

    const StarOutlineIcon = screen.getAllByTestId("StarOutlineIcon");
    const StarSharpIcon = screen.getAllByTestId("StarSharpIcon");

    expect(StarOutlineIcon).toHaveLength(4);
    expect(StarSharpIcon).toHaveLength(1);
  });

  it("should render 2 filled stars when user has up to 4 followers and 3 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 4, public_repos: 3 },
      });

    render(<Stars />);

    const StarOutlineIcon = screen.getAllByTestId("StarOutlineIcon");
    const StarSharpIcon = screen.getAllByTestId("StarSharpIcon");

    expect(StarOutlineIcon).toHaveLength(3);
    expect(StarSharpIcon).toHaveLength(2);
  });

  it("should render 3 filled stars when user has up to 6 followers and 5 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 6, public_repos: 6 },
      });

    render(<Stars />);

    const StarOutlineIcon = screen.getAllByTestId("StarOutlineIcon");
    const StarSharpIcon = screen.getAllByTestId("StarSharpIcon");

    expect(StarOutlineIcon).toHaveLength(2);
    expect(StarSharpIcon).toHaveLength(3);
  });

  it("should render 4 filled stars when user has up to 9 followers and 7 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 9, public_repos: 10 },
      });

    render(<Stars />);

    const StarOutlineIcon = screen.getAllByTestId("StarOutlineIcon");
    const StarSharpIcon = screen.getAllByTestId("StarSharpIcon");

    expect(StarOutlineIcon).toHaveLength(1);
    expect(StarSharpIcon).toHaveLength(4);
  });

  it("should render 5 filled stars when user has 10 or more followers and 8 or more repositories", () => {
    jest
      .spyOn(require("../../contexts/userData"), "useGitHub")
      .mockReturnValue({
        userData: { followers: 100, public_repos: 42 },
      });

    render(<Stars />);

    const StarSharpIcon = screen.getAllByTestId("StarSharpIcon");

    expect(StarSharpIcon).toHaveLength(5);
  });
});
