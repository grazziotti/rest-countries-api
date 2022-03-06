import React, { createContext, useReducer } from 'react'
import { countriesReducer, countriesInitialState, CountriesType } from '../redurcers/countriesReducer'
import { ReducerActionType } from '../types/ReducerActionType'

type initialStateType = {
    countries: CountriesType
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    countries: countriesInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: ReducerActionType) => ({
    countries: countriesReducer(state.countries, action)
})

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}