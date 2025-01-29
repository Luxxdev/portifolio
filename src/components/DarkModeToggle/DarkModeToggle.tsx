import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { styled } from '@mui/material';
import { useThemeContext } from '../ThemeContextProvider/ThemeContextProvider';


const DarkModeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  const StyledA = styled('a')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    alignItems: 'center',
    position: 'relative',
    fontSize: '5vh',
    // [theme.breakpoints.up('md')]: {
    //   position: 'absolute',
    //   top: '2.5vh',
    //   right: '30px',
    // },
    display: 'flex',
    '&:hover': {
      color: theme.palette.secondary.contrastText,
      transform: 'scale(1.2)',
      cursor: 'pointer',
    },
  }))

  return (
    <StyledA onClick={toggleTheme}>
      {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon fontSize='inherit' /> : <DarkModeOutlinedIcon fontSize='inherit' />}
    </StyledA>
  )
}

export default DarkModeToggle