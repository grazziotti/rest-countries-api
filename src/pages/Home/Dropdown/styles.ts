import styled from "styled-components";

type Props = {
  isOpen: boolean;
};

export const Container = styled.div<Props>`
  position: relative;
  max-width: 20rem;
  width: 100%;
  margin-left: 2.4rem;
  font-size: 1.4rem;
  font-weight: 600;
  z-index: 1;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5.6rem;
    padding: 0 2.4rem;
    border-radius: 0.4rem;
    background-color: ${(props) => props?.theme?.colors?.element};
    color: ${(props) => props?.theme?.colors?.textPrimary};
    box-shadow: ${(props) => props?.theme?.elementShadow};

    span {
      font-weight: 600;
    }

    svg {
      transform: ${(props) => (props?.isOpen ? "rotate(180deg)" : "rotate(0)")};
      transition: transform 0.3s;
    }
  }

  ul {
    display: ${(props) => (props?.isOpen ? "block" : "none")};
    position: absolute;
    left: 0;
    margin-top: 0.4rem;
    width: 100%;
    padding: 1.6rem 0;
    border-radius: 0.45rem;
    background-color: ${(props) => props?.theme?.colors?.element};
    box-shadow: ${(props) => props?.theme?.elementShadow};

    a {
      display: flex;
      padding: 0.8rem 2.4rem;
      text-align: start;
      font-weight: inherit;
      color: ${(props) => props?.theme?.colors?.textPrimary};

      &:hover {
        background-color: ${(props) => props?.theme?.colors?.background};
      }
    }
  }

  @media (max-width: 570px) {
    max-width: 50%;
    margin-top: 4rem;
    margin-left: 0;
  }
`;
