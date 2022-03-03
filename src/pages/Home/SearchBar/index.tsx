import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

export const SearchBar = () => {
    return (
        <Container>
            <form>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Search for a country..." 
                />
            </form>
        </Container>
    )
}