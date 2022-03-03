import { SearchBar } from '../SearchBar'
import { Dropdown } from '../Dropdown'

import { Container } from './styles'

export const FilterArea = () => {
    return (
        <Container>
            <SearchBar />
            <Dropdown />
        </Container>
    )
}