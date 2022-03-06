import { FilterArea } from "./FilterArea"
import { Container } from "./styles"
import { CountriesArea } from './CountriesArea'

export const Home = () => {
    return (
        <Container>
            <div className="container">
                <FilterArea />
                <CountriesArea />
            </div>
        </Container>
    )
}