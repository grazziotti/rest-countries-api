export type CountryType = {
    alpha2Code: string
    alpha3Code: string
    altSpellings: string[]
    area: number
    borders: string[]
    callingCodes: string[]
    capital: string
    cioc: string
    currencies: {code: string, name: string, symbol: string}[]
    demonym: string
    flag: string
    flags: {svg: string, png: string}[]
    independent: true
    languages: object[]
    latlng: number[]
    name: string
    nativeName: string
    numericCode: string
    population: number
    region: string
    regionalBlocs: { acronym: string, name: string }[]
    subregion: string
    timezones: string[]
    topLevelDomain: string[]
    translations: object[]
}