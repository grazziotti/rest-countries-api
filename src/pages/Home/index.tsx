import { FilterArea } from "./FilterArea";
import { Container } from "./styles";
import { CountriesArea } from "./CountriesArea";
import { PageContainer } from "../../components/mainComponents";
import ScrollToTopBtn from "./ScrollToTopBtn";

export const Home = () => {
  return (
    <Container>
      <PageContainer>
        <FilterArea />
        <CountriesArea />
        <ScrollToTopBtn />
      </PageContainer>
    </Container>
  );
};
