import { Link } from 'react-router-dom';
import { Container } from './styles'

type Props = {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
}

export const CountryCard = ({ flag, name, population, region, capital }: Props) => {
    return (
        <Container>
            <Link to="/">
                <div className="country-flag">
                    <img src={flag} alt="" />
                </div>
                <div className="country-info">
                    <h4>{name}</h4>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </Link>
        </Container>
    )
}