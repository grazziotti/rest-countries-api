import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'

import { light, dark } from './styles/themes'

import { GlobalStyles } from './styles/global'
import { Header } from './components/Header'
import { Routes } from './routes'

const App = () => {
  const initialTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(initialTheme ? initialTheme : 'light')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <Routes />
    </ThemeProvider>
  )
}

export default App
