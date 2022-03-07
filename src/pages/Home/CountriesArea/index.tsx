import { useContext } from 'react'
import { Context } from '../../../contexts/Context'
import { filteredCountries } from '../../../redurcers/countriesReducer'
import { CountryCard } from '../CountryCard'

import { Container } from './styles'

export const CountriesArea = () => {
    const { state } = useContext(Context)

    const list = filteredCountries(state.countries)

    return (
        <Container>
            {list.map( (country, index) => {
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