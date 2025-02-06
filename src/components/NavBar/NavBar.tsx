import { AppBar, Grid2, MenuItem, styled, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';

export const toolbarHeight = 10

const StyledMobileMenu = styled(Modal)(({ }) => ({
  backdropFilter: 'blur(15px)',
  top: `${toolbarHeight}dvh`,
  display: 'flex',
  justifyContent: 'space-between',
  height: `calc(100dvh - ${toolbarHeight}dvh)`,
  width: '100dvw',
  position: 'fixed',
  overflow: 'hidden',
}))

const StyledMenuIcon = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  margin: '0px 3vw',
  textDecoration: 'none',
  '&:hover': {
    transform: 'scale(1.1)',
    color: theme.palette.secondary.contrastText,

    // backdropFilter: 'blur(15px)',
    // textDecoration: 'underline',
    cursor: 'pointer',
  },
}))

const navLinks = [
  { id: 'hero', label: 'navMain' },
  { id: 'about', label: 'navAbout' },
  { id: 'experience', label: 'navExperience' },
  { id: 'projects', label: 'navProjects' },
]

const NavBar = () => {
  const { t } = useTranslation()
  const [mobileMenu, setMobileMenu] = useState(false)
  const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))

  useEffect(() => {
    if (bigScreen) {
      setMobileMenu(false)
    }
  }, [bigScreen])

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    height: `${toolbarHeight}dvh`,
    padding: 24,
    backgroundColor: theme.palette.primary.dark,
    overflow: 'hidden',
    borderBottom: `1px solid ${theme.palette.secondary.contrastText}`,
    '& > div': {
      display: 'flex',
      flexDirection: bigScreen ? 'row' : 'column',
    }
  }))

  function MapMenuItems() {
    return navLinks.map(link => (
      <StyledMenuIcon onClick={() => {
        ScrollTo(link.id)
        setMobileMenu(false)
      }} >
        <Typography fontSize={'large'}>
          {t(link.label)}
        </Typography>
      </StyledMenuIcon>
    ))
  }

  return (
    <>
      <AppBar position="fixed" >
        <StyledToolbar id="navbar">
          {bigScreen ? (
            <>
              <DarkModeToggle />
              <div>
                {
                  MapMenuItems()
                }
              </div>
              <LanguageSwitcher />
            </>
          ) : (
            <>
              <div>
                <Typography color="primary.contrastText" fontSize={'large'}>
                  Lucas Queirolo
                </Typography>
                <Typography color="primary.contrastText" fontSize={'small'} fontWeight={'lighter'}>
                  {t('navRole')}
                </Typography>
              </div>
              <div onClick={() => {
                setMobileMenu(!mobileMenu)
              }}>
                {mobileMenu ? <CloseIcon /> : <MenuIcon />}
              </div>
            </>
          )}
        </StyledToolbar>

      </AppBar >

      <StyledMobileMenu open={mobileMenu} onClose={() => setMobileMenu(false)} >
        <Grid2 container display={'flex'} flexDirection={'column'} width={'100%'} >
          <Grid2 size='grow' display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} >
            <Grid2 width={'100%'} display={'flex'} justifyContent={'space-around'} gap={10}>
              <DarkModeToggle />
              <LanguageSwitcher />
            </Grid2>
            {
              MapMenuItems()
            }
          </Grid2>
        </Grid2>
      </StyledMobileMenu>
    </>
  )
}

export function ScrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  const nav = document.getElementById('navbar')
  if (section?.offsetTop != null && nav?.offsetHeight != null) {
    window.scrollTo({ top: section?.offsetTop - nav?.offsetHeight, behavior: 'smooth' })
  }
}

export default NavBar
