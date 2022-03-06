import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'

import { light, dark } from './styles/themes'

import { GlobalStyles } from './styles/global'
import { Header } from './components/Header'
import { Routes } from './routes'

const App = () => {
  const [theme, setTheme] = useState('light')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <Routes />
    </ThemeProvider>
  )
}

export default App
