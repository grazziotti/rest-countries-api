import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test } from "vitest";
import App from "../src/App";
import { ContextProvider } from "./contexts/Context";

describe("App", () => {
  test("should render home page", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const header = getByTestId("header");
    const toggleThemeBtn = getByTestId("toggle-theme-btn");
    const searchBar = getByPlaceholderText("Search for a country...");
    const dropdown = getByTestId("region-filter-dropdown");
    const countriesArea = getByTestId("countries-area");

    expect(header).toBeInTheDocument();
    expect(getByText("Where in the world?")).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(countriesArea).toBeInTheDocument();
    expect(toggleThemeBtn).toBeInTheDocument();
  });

  test("should render detail page", async () => {
    const { getByText, getByTestId, queryByText } = render(
      <MemoryRouter initialEntries={["/detail/BRA"]}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    const header = getByTestId("header");
    const toggleThemeBtn = getByTestId("toggle-theme-btn");
    const backBtn = getByTestId("back-btn");

    expect(header).toBeInTheDocument();
    expect(getByText("Where in the world?")).toBeInTheDocument();
    expect(toggleThemeBtn).toBeInTheDocument();
    expect(backBtn).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText("Top Level Domain:"));
      expect(getByText("Currencies:")).toBeInTheDocument();
      expect(getByText("Languages:")).toBeInTheDocument();
      expect(getByText("Brasília")).toBeInTheDocument();
      expect(queryByText("Border Countries:")).toBeInTheDocument();
      expect(getByText("Argentina")).toBeInTheDocument();
    });
  });

  test("should toggle dark mode when dark mode button is clicked", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    const toggleThemeBtn = getByTestId("toggle-theme-btn");

    expect(localStorage.getItem("theme")).toBe("light");

    fireEvent.click(toggleThemeBtn);

    expect(localStorage.getItem("theme")).toBe("dark");
  });

  test("should render country cards after loading", async () => {
    const { getByText, getByTestId, queryByText, queryByTestId } = render(
      <MemoryRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    expect(getByTestId("loader")).toBeInTheDocument();

    await waitFor(() => {
      expect(queryByTestId("loader")).not.toBeInTheDocument();
      expect(queryByText("Suriname")).not.toBeInTheDocument();
      expect(getByText("Brazil")).toBeInTheDocument();
      expect(getByText("Argentina")).toBeInTheDocument();
      expect(getByText("Japan")).toBeInTheDocument();
    });
  });

  test("should filter countries based on search input", async () => {
    const { getByText, queryByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText("Brazil")).toBeInTheDocument();
      expect(getByText("Argentina")).toBeInTheDocument();
      expect(queryByText("Japan")).toBeInTheDocument();
    });

    const searchBar = getByPlaceholderText("Search for a country...");
    fireEvent.change(searchBar, { target: { value: "bra" } });

    expect(getByText("Brazil")).toBeInTheDocument();
    expect(queryByText("Argentina")).not.toBeInTheDocument();
    expect(queryByText("Japan")).not.toBeInTheDocument();
  });

  test("should filter countries based on selected region in dropdown", async () => {
    const { getByText, getByTestId, queryByText } = render(
      <MemoryRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    const dropdown = getByTestId("region-filter-dropdown");
    const dropdownItens = dropdown.querySelectorAll("li a");
    const selectedRegionLink = dropdownItens[3];

    expect(selectedRegionLink).toBeInTheDocument();
    expect(selectedRegionLink.innerHTML).toBe("Asia");

    await waitFor(() => {
      expect(getByText("Japan")).toBeInTheDocument();
      expect(getByText("Brazil")).toBeInTheDocument();
    });

    fireEvent.click(selectedRegionLink);

    await waitFor(() => {
      expect(getByText("Japan")).toBeInTheDocument();
      expect(queryByText("Brazil")).not.toBeInTheDocument();
    });
  });

  test("Should display filtered countries based on selected region and search query", async () => {
    const { getByText, getByTestId, queryByText, getByPlaceholderText } =
      render(
        <MemoryRouter>
          <ContextProvider>
            <App />
          </ContextProvider>
        </MemoryRouter>
      );

    const dropdown = getByTestId("region-filter-dropdown");
    const dropdownItens = dropdown.querySelectorAll("li a");
    const selectedRegionLink = dropdownItens[3];

    expect(selectedRegionLink).toBeInTheDocument();
    expect(selectedRegionLink.innerHTML).toBe("Asia");

    const searchBar = getByPlaceholderText("Search for a country...");

    fireEvent.click(selectedRegionLink);
    fireEvent.change(searchBar, { target: { value: "Jap" } });

    await waitFor(() => {
      expect(getByText("Japan")).toBeInTheDocument();
      expect(queryByText("Brazil")).not.toBeInTheDocument();
    });
  });

  test("should navigate to detail page when a country card is clicked", async () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    const countriesArea = getByTestId("countries-area");
    await waitFor(() => {
      expect(getByText("Brazil")).toBeInTheDocument();
      expect(getByText("Japan")).toBeInTheDocument();
    });

    const country = countriesArea.querySelector("a");
    const dropdownItens = country?.querySelector("h4");
    expect(dropdownItens?.innerHTML).toBe("Brazil");
    expect(country).toBeInTheDocument();

    fireEvent.click(country);

    expect(getByText("Back")).toBeInTheDocument();
    expect(getByText("Top Level Domain:"));
    expect(getByText("Currencies:")).toBeInTheDocument();
    expect(getByText("Languages:")).toBeInTheDocument();
  });

  test("should back to Home Page when the back button was clicked", async () => {
    const { container, getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter initialEntries={["/detail/BRA"]}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    const backBtn = getByText("Back");

    expect(backBtn).toBeInTheDocument();
    await waitFor(() => {
      expect(getByText("Top Level Domain:"));
      expect(getByText("Currencies:")).toBeInTheDocument();
      expect(getByText("Languages:")).toBeInTheDocument();
      expect(getByText("Brasil")).toBeInTheDocument();
    });

    fireEvent.click(backBtn);
    const header = container.querySelector("header");
    const countriesArea = getByTestId("countries-area");

    expect(header).toBeInTheDocument();
    expect(countriesArea).toBeInTheDocument();
    expect(getByPlaceholderText("Search for a country...")).toBeInTheDocument();
    expect(getByText("Brazil"));
  });

  test("should render NotFound component when entering a non existing route", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/blablabla"]}>
        <App />
      </MemoryRouter>
    );

    const h2 = container.getElementsByTagName("h2")[0];

    expect(h2.innerHTML).toBe("404 - Page Not Found");
  });

  test("should display 'Country not found' message for invalid search", async () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const searchBar = getByPlaceholderText("Search for a country...");
      fireEvent.change(searchBar, { target: { value: "blablabla" } });
      expect(
        getByText("Country not found. Please enter a valid country name.")
      ).toBeInTheDocument();
    });
  });

  test("should display 'Country not found' message when no countries match the selected region", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    const dropdown = getByTestId("region-filter-dropdown");
    const dropdownItens = dropdown.querySelectorAll("li a");

    const selectedRegionLink = dropdownItens[3];

    expect(selectedRegionLink).toBeInTheDocument();
    expect(selectedRegionLink.innerHTML).toBe("Asia");

    fireEvent.click(selectedRegionLink);

    const searchBar = getByPlaceholderText("Search for a country...");
    fireEvent.change(searchBar, { target: { value: "Brazil" } });

    await waitFor(() => {
      expect(
        getByText("Country not found. Please enter a valid country name.")
      ).toBeInTheDocument();
    });
  });

  test("should display 'Country not found' message on the detail page for invalid country", async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/detail/blablabla"]}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText("Country not found.")).toBeInTheDocument();
    });
  });
});
