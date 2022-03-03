import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

type Props = {
    onToggleTheme: () => void;
    theme: string;
}

export const Header = ({ onToggleTheme, theme }: Props) => {
    return (
        <Container>
            <div className="container">
                <h1 className="title">Where in the world?</h1>
                <button className="toggle-theme-btn" onClick={() => onToggleTheme()}>
                    <FontAwesomeIcon icon={faMoon} />
                    Dark Mode
                </button>
            </div>
        </Container>
    )
}