import { ThemeProvider } from '@mui/material'
import Home from './pages/Home/Home'
import { useThemeContext } from './components/ThemeContextProvider/ThemeContextProvider'

const App = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
