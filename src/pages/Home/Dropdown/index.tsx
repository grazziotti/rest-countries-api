import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

export const Dropdown = () => {
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Container isOpen={isOpen}>
            <button onClick={toggleDropdown}>
                <span>Filter by Region</span>
                <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <ul>
                {regions.map( (region, index) => (
                    <li key={index}>
                        <a href="#">{region}</a>    
                    </li>
                ))}
            </ul>
        </Container>
    )
}