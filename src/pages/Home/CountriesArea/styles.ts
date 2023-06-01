import styled from "styled-components";

type Props = {
  animate?: boolean;
};

export const Container = styled.div<Props>`
  margin: 4.5rem 0;

  .loading-content {
    display: flex;
    justify-content: center;

    .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }

    .lds-ellipsis div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.textPrimary};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    .lds-ellipsis div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }

    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }

      100% {
        transform: scale(0);
      }
    }

    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }

      100% {
        transform: translate(24px, 0);
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7.2rem;
    opacity: ${(props) => (props.animate ? 1 : 0)};
    transition: opacity 0.3s;

    @media (min-width: 1025px) and (max-width: 1300px) {
      gap: 3rem;
    }

    @media (max-width: 1025px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 980px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 570px) {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
      gap: 4rem;
      margin-top: 3.2rem;
    }
  }
`;
