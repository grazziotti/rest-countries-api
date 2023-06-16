import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test } from "vitest";
import App from "../src/App";

describe("App", () => {
  test("Should render home page", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const header = getByText("Where in the world?");
    const searchBar = getByPlaceholderText("Search for a country...");
    const dropdown = getByTestId("region-filterd-dropdown");

    expect(header).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
  });
});
