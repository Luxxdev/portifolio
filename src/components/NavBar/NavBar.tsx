import { AppBar, MenuItem, styled, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const { t } = useTranslation()

  const biggerScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',


    },
  }))

  const StyledMenu = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    height: '5vh',
    alignItems: 'center',
    display: 'flex',
    margin: '0px 5vw',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
      backgroundColor: theme.palette.secondary.light,
    },
  }))

  return (
    <>
      <AppBar position="sticky">
        {biggerScreen ? (
          <StyledToolbar id="navbar">
            <DarkModeToggle />

            <StyledMenu onClick={() => ScrollTo('hero')}>
              {t('navMain')}
            </StyledMenu>

            <StyledMenu onClick={() => ScrollTo('about')}>
              About
            </StyledMenu>

            <StyledMenu onClick={() => ScrollTo('projects')}>
              Projects
            </StyledMenu>
            {/* <StyledA onClick={() => ScrollTo('projects')}>
            <MenuItem>Experience</MenuItem>
            </StyledA>
            <StyledA onClick={() => ScrollTo('footer')}>
            <MenuItem>Contact</MenuItem>
            </StyledA> */}
            <LanguageSwitcher />
          </StyledToolbar>

        ) : (
          <StyledToolbar id="navbar">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', padding: '5px' }}>
              <Typography color="primary.contrastText" fontSize={'large'}>
                Lucas Queirolo
              </Typography>
              <Typography color="primary.contrastText" fontSize={'small'} fontWeight={'lighter'}>
                Game Developer
              </Typography>
            </div>
            <MenuIcon />
          </StyledToolbar>
        )}
      </AppBar >
    </>
  )
}

export function ScrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  const nav = document.getElementById('navbar')
  console.log(section?.scrollHeight)
  if (section?.offsetTop != null && nav?.offsetHeight != null) {
    window.scrollTo({ top: section?.offsetTop - nav?.offsetHeight, behavior: 'smooth' })
  }
}

export default NavBar
