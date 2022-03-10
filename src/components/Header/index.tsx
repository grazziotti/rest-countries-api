import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'
import { PageContainer } from '../mainComponents';

type Props = {
    onToggleTheme: () => void;
}

export const Header = ({ onToggleTheme }: Props) => {
    return (
        <Container>
            <PageContainer>
                <h1 className="title">Where in the world?</h1>
                <button className="toggle-theme-btn" onClick={() => onToggleTheme()}>
                    <FontAwesomeIcon icon={faMoon} />
                    Dark Mode
                </button>
            </PageContainer>
        </Container>
    )
}