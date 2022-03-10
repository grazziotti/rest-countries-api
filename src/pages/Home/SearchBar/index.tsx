import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../contexts/Context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

export const SearchBar = () => {
    const { dispatch } = useContext(Context)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        dispatch({
            type: 'SEARCH_TEXT',
            payload: { searchText }
        })
    }, [searchText])

    const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    return (
        <Container>
            <form onSubmit={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input 
                    type="text" 
                    name="search" 
                    value={searchText}
                    placeholder="Search for a country..."
                    onChange={handleChangeSearchText} 
                />
            </form>
        </Container>
    )
}