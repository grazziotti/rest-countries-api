import { Link } from 'react-router-dom';
import { Container } from './styles'

type Props = {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    alphaCode: string;
}

export const CountryCard = ({ flag, name, population, region, capital, alphaCode }: Props) => {
    return (
        <Container>
            <Link to={`/detail/${alphaCode}`}>
                <div className="country-flag">
                    <img src={flag} alt={`${name} flag`} />
                </div>
                <div className="country-info">
                    <h4>{name}</h4>
                    <ul>
                        <li>Population: <span>{population}</span></li>
                        <li>Region: <span>{region}</span></li>
                        <li>Capital: <span>{capital}</span></li>
                    </ul>
                </div>
            </Link>
        </Container>
    )
}