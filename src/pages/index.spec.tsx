import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GitHubProvider } from "../contexts/userData";
import Search from ".";

describe("Search component", () => {
  it("should render the search component with input and button", () => {
    render(
      <GitHubProvider>
        <Search />
      </GitHubProvider>
    );

    const inputElement = screen.getByLabelText("User");
    const buttonElement = screen.getByRole("button", { name: "Search" });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("should disable the search button when input is empty", () => {
    render(
      <GitHubProvider>
        <Search />
      </GitHubProvider>
    );

    const buttonElement = screen.getByRole("button", { name: "Search" });

    expect(buttonElement).toBeDisabled();
  });

  it("should enable the search button when input is not empty", () => {
    render(
      <GitHubProvider>
        <Search />
      </GitHubProvider>
    );

    const inputElement = screen.getByLabelText("User");
    const buttonElement = screen.getByRole("button", { name: "Search" });

    fireEvent.change(inputElement, { target: { value: "danielejsantos" } });

    expect(buttonElement).not.toBeDisabled();
  });

  it("should call getUserData when search button is clicked", async () => {
    render(
      <GitHubProvider>
        <Search />
      </GitHubProvider>
    );

    const inputElement = screen.getByLabelText("User");
    const buttonElement = screen.getByRole("button", { name: "Search" });

    fireEvent.change(inputElement, { target: { value: "danielejsantos" } });
    fireEvent.click(buttonElement);
  });
});
