import { useContext } from 'react'
import { Context } from '../../contexts/Context'
import { Link, useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'
import { PageContainer } from '../../components/mainComponents'

export const Detail = () => {
    const { state } = useContext(Context)
    const params = useParams()    
    const country = state.countries.data.find( country => country.alpha3Code.toLowerCase() === params.country?.toLowerCase())

    let borderCountries = country?.borders === undefined
        ?   ['']
        :   country?.borders
            .map( borderCountry => state.countries.data.find( country => country.alpha3Code === borderCountry))
            .map( borderCountry => { if (borderCountry !== undefined) return borderCountry.name })

    window.scrollTo({ top: 0 })

    return (
        <Container>
            {country !== undefined &&
                <PageContainer>
                    <Link className="back-btn" to="/" >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back
                    </Link>
                    <div className="country-detail">
                        <div className="country-detail--flag">
                            <img src={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`} alt={`${country.name} flag`} />    
                        </div>
                        <div className="country-detail--info">
                            <h2 className="country-detail--name">{country.name}</h2>
                            <div className="country-detail--list">
                                <ul>
                                    <li>Native Name: <span>{country.nativeName}</span></li>
                                    <li>Population: <span>{country.population.toLocaleString().replace('.', ',')}</span></li>
                                    <li>Region: <span>{country.region}</span></li>
                                    <li>Sub Region: <span>{country.subregion}</span></li>
                                    <li>Capital: <span>{country.capital}</span></li>
                                </ul>
                                <ul>
                                    <li>Top Level Domain: 
                                        <span>{' '}
                                            {country.topLevelDomain && country.topLevelDomain.map( top => top)}
                                        </span>
                                    </li>    
                                    <li>Currencies:{' '} 
                                        <span>
                                            {country.currencies && country.currencies.map( currencie => currencie.name).join(', ')}
                                        </span>
                                    </li>    
                                    <li>Languages:{' '} 
                                        <span>
                                            {country.languages.map( lang => lang.name).join(', ')}
                                        </span>
                                    </li>    
                                </ul>    
                            </div>
                            <div className="country-detail--borders">
                                {country.borders !== undefined &&
                                    <>
                                    <p>Border Countries: </p>
                                        {borderCountries.map( (borderCountry, index) => (
                                            <Link 
                                                key={index} 
                                                to={`/detail/${country.borders[index]}`}
                                                onClick={() => window.scrollTo({ top: 0 })}
                                            >{borderCountry}</Link>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </PageContainer>
            }
        </Container>
    )
}