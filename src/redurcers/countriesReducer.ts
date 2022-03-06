import { api } from "../services/api";

import { CountryType } from '../types/CountryType'
import { ReducerActionType } from '../types/ReducerActionType'

export type CountriesType = {
    data: CountryType[];
    region: string;
    searchText: string;
}

export const countriesInitialState: CountriesType = {
    data: await api.getAll(),
    region: '',
    searchText: '',
}

export const filteredItems = (state: CountriesType) => {
    const { data, region, searchText } = state;
    if (region.length === 0) {
        return data.filter((item) => item.name.toLowerCase().startsWith(searchText.toLowerCase()));
    } else {
        const filteredByRegion = data.filter((item) => item.region === region);
        return filteredByRegion.filter((item) => item.name.toLowerCase().startsWith(searchText.toLowerCase()));
    }
}

export const countriesReducer = (state: CountriesType, action: ReducerActionType) => {
    switch(action.type) {
        case 'SET_REGION':
            return {...state, region: action.payload.region}
        break
        case 'SEARCH_TEXT':
            return {...state, searchText: action.payload.text}
        break
    }

    return state
}