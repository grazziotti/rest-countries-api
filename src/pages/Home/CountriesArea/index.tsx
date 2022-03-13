import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../contexts/Context'
import { filteredCountries } from '../../../redurcers/countriesReducer'
import { CountryCard } from '../CountryCard'

import { Container } from './styles'

export const CountriesArea = () => {
    const { state } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        loading ? setTimeout(() => setAnimate(false), 10) : setTimeout(() => setAnimate(true), 10)
    }, [loading])

    const countryList = filteredCountries(state.countries)

    useEffect(() => {
        setLoading(countryList.length <= 0)
    }, [countryList])

    return (
        <Container animate={animate}> 
            {!loading && 
                <div className="content">
                    {countryList.map( (country, index) => (
                        <CountryCard 
                            key={index}
                            flag={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            alphaCode={country.alpha3Code}
                        />
                    ))}
                </div>
            }
        </Container>  
    )
}