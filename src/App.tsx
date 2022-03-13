import { ThemeProvider } from 'styled-components'
import { useContext, useEffect, useState } from 'react'

import { light, dark } from './styles/themes'

import { GlobalStyles } from './styles/global'
import { Header } from './components/Header'
import { Routes } from './routes'
import { Context } from './contexts/Context'
import { api } from './services/api'

const App = () => {
  const { dispatch } = useContext(Context)
  const initialTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(initialTheme ? initialTheme : 'light')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const SetCountries = async () => {
      dispatch({
          type: 'SET_COUNTRIES',
          payload: {
              data: await api.getAll()
          }
      })
  }

  useEffect(() => {
      SetCountries()
  }, [])


  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <Header onToggleTheme={handleToggleTheme} />
      <Routes />
    </ThemeProvider>
  )
}

export default App
