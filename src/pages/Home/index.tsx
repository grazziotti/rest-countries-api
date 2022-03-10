import { FilterArea } from "./FilterArea"
import { Container } from "./styles"
import { CountriesArea } from './CountriesArea'
import { PageContainer } from "../../components/mainComponents"

export const Home = () => {
    return (
        <Container>
            <PageContainer>
                <FilterArea />
                <CountriesArea />       
            </PageContainer>
        </Container>
    )
}