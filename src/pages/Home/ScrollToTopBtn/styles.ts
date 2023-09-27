import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
  padding: 2.4rem;
  z-index: 99;
  opacity: 0;
  transition: 0.3s;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.element};
  border-radius: 100%;
  box-shadow: ${(props) => props.theme.elementShadow};

  &.animate {
    opacity: 1;
  }

  @media (max-width: 980px) {
    bottom: 1.6rem;
    right: 1.6rem;
  }

  @media (max-width: 570px) {
    bottom: 1.6rem;
    right: 0.8rem;
    padding: 1.6rem;
  }
`;
