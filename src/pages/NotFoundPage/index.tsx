import { Error } from "../../components/Error";
import { Container } from "./styles";

export const NotFoundPage = () => {
  return (
    <Container>
      <Error msg="404 - Page Not Found" />
    </Container>
  );
};
