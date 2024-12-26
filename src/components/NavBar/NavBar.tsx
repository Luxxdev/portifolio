import { AppBar, MenuItem, styled, Toolbar } from '@mui/material'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const NavBar = () => {
  const { t } = useTranslation()

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-evenly',
    backgroundColor: theme.palette.primary.dark,
  }))

  const StyledMenu = styled(MenuItem)(({ theme, ...props }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    height: '5vh',
    alignItems: 'center',
    display: 'flex',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
      backgroundColor: theme.palette.secondary.light,
    },
  }))

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar id="navbar">
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
        </StyledToolbar>
        <LanguageSwitcher />
        <DarkModeToggle />
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
