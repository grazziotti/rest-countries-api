import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";
import { PageContainer } from "../mainComponents";

type Props = {
  onToggleTheme: () => void;
  currentTheme: string;
};

export const Header = ({ onToggleTheme, currentTheme }: Props) => {
  return (
    <Container data-testid="header">
      <PageContainer>
        <h1 className="title">Where in the world?</h1>
        <button
          className="toggle-theme-btn"
          data-testid="toggle-theme-btn"
          onClick={() => onToggleTheme()}
        >
          <FontAwesomeIcon icon={currentTheme === "light" ? faSun : faMoon} />
          Dark Mode
        </button>
      </PageContainer>
    </Container>
  );
};
