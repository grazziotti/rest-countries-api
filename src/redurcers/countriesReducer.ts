import { api } from "../services/api";

import { CountryType } from '../types/CountryType'
import { ReducerActionType } from '../types/ReducerActionType'

export type CountriesType = {
    data: CountryType[];
    region: string;
    searchText: string;
}

export const countriesInitialState: CountriesType = {
    data: [],
    region: 'All',
    searchText: '',
}

export const filteredCountries = (state: CountriesType) => {
    const { data, region, searchText } = state;

    const filteredData: CountryType[] = region.toLowerCase() === 'all'
        ? data
        : data.filter((country) => country.region.toLowerCase() === region.toLowerCase())

    return filteredData.filter(country => country.name.toLowerCase().startsWith(searchText))
}

export const countriesReducer = (state: CountriesType, action: ReducerActionType) => {
    switch(action.type) {
        case 'SET_COUNTRIES':
            return {...state, data: action.payload.data}
        break   
        case 'SET_REGION':
            return {...state, region: action.payload.region.trim()}
        break
        case 'SEARCH_TEXT':
            return {...state, searchText: action.payload.searchText.toLowerCase().trim()}
        break
    }

    return state
}