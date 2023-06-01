import { Container } from "./styles";

type Props = {
  msg: string;
};

export const Error = ({ msg }: Props) => {
  return <Container>{msg}</Container>;
};
