import { Container } from "./styles";

export const Loader = () => {
  return (
    <Container>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
