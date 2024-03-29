import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props?.theme?.colors?.element};
  box-shadow: ${(props) => props?.theme?.elementShadow};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    color: ${(props) => props?.theme?.colors?.textPrimary};

    .title {
      font-size: 2.4rem;
      font-weight: 800;
    }

    .toggle-theme-btn {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      font-weight: 600;
      color: ${(props) => props?.theme?.colors?.textPrimary};

      svg {
        margin-right: 0.8rem;
      }
    }

    @media (max-width: 570px) {
      .title {
        font-size: 1.6rem;
      }

      .toggle-theme-btn {
        font-size: 1.4rem;
      }
    }
  }
`;
