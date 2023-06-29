import { Container } from "./styles";

export const Loader = () => {
  return (
    <Container>
      <div className="lds-ellipsis" data-testid="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
