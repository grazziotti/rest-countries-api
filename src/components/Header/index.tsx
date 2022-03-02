import { HeaderArea } from './styles'
import moonIconLight from '../../../public/images/moon-outline.svg'
import moonIconDark from '../../../public/images/moon-outline-dark.svg'

type Props = {
    onToggleTheme: () => void;
    theme: string;
}

export const Header = ({ onToggleTheme, theme }: Props) => {
    return (
        <HeaderArea>
            <div className="container">
                <h1 className="title">Where in the world?</h1>
                <button className="toggle-theme-btn" onClick={() => onToggleTheme()}>
                    <img src={theme === 'light' ? moonIconLight : moonIconDark} alt="Moon Icon" />
                    Dark Mode
                </button>
            </div>
        </HeaderArea>
    )
}