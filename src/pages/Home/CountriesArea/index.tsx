import { useContext } from 'react'
import { Context } from '../../../contexts/Context'
import { CountryCard } from '../CountryCard'

import { Container } from './styles'

export const CountriesArea = () => {
    const { state } = useContext(Context)

    return (
        <Container>
            {state.countries.data.map( (country, index) => {
                return <CountryCard 
                    key={index}
                    flag={country.flag}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                />
            })}
        </Container>
    )
}