import { useContext, useState } from "react";
import { Context } from "../../../contexts/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";

export const Dropdown = () => {
  const { state, dispatch } = useContext(Context);
  const [selectedRegion, setSelectedRegion] = useState(state.countries.region);
  const [isOpen, setIsOpen] = useState(false);
  const regions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar"
  ];

  const handleClickRegion = (region: string) => {
    setSelectedRegion(region);
    dispatch({
      type: "SET_REGION",
      payload: { region }
    });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container isOpen={isOpen} data-testid="region-filter-dropdown">
      <button onClick={toggleDropdown}>
        <span>{selectedRegion}</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <ul>
        {regions.map((region, index) => (
          <li key={index}>
            <a href="#" onClick={() => handleClickRegion(region)}>
              {region}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};
