import { Header } from './components/Header'
import { GlobalStyles } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
    </ThemeProvider>
  )
}

export default App
