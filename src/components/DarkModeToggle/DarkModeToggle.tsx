import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/material';
import { useThemeContext } from '../ThemeContextProvider/ThemeContextProvider';


const DarkModeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  const StyledA = styled('a')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    alignItems: 'center',
    height: '5vh',
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
  }))

  return (
    <StyledA onClick={toggleTheme}>
      {theme.palette.mode === 'dark' ? <LightModeIcon fontSize='large' /> : <DarkModeIcon fontSize='large' />}
    </StyledA>
  )
}

export default DarkModeToggle