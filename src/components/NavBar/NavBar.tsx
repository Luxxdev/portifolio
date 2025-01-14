import { AppBar, Grid2, MenuItem, styled, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from 'react';
import Modal from '@mui/material/Modal';

const NavBar = () => {
  const { t } = useTranslation()

  const [mobileMenu, setMobileMenu] = useState(false)

  const biggerScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const timeOutRef = useRef<number | null>(null)

  const toggleMobileMenu = () => {
    if (timeOutRef.current === null) {
      setMobileMenu(!mobileMenu)
      timeOutRef.current = setTimeout(() => {
        timeOutRef.current = null
        console.log('can click again')
      }, 200);
    }
  }

  useEffect(() => {
    if (biggerScreen) {
      setMobileMenu(false)
    }
  }, [biggerScreen])

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    height: '10vh',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  }))

  const StyledMobileMenu = styled('div')(({ theme }) => ({
    justifyContent: 'space-evenly',
    backdropFilter: 'blur(10px)',
    opacity: '70%',

    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    height: '90vh',
    minWidth: '100vw',
    position: 'fixed',
  }))

  const StyledMenuIcon = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    height: '5vh',
    display: 'flex',
    margin: '0px 5vw',
    textDecoration: 'none',

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
            <StyledMenuIcon onClick={() => ScrollTo('hero')} >
              {t('navMain')}
            </StyledMenuIcon>

            <StyledMenuIcon onClick={() => ScrollTo('about')}>
              {t('navAbout')}
            </StyledMenuIcon>

            <StyledMenuIcon onClick={() => ScrollTo('experience')}>
              {t('navExperience')}
            </StyledMenuIcon>

            <StyledMenuIcon onClick={() => ScrollTo('projects')}>
              {t('navProjects')}
            </StyledMenuIcon>
            <LanguageSwitcher />
          </StyledToolbar>
        ) : (
          <div>
            <StyledToolbar id="navbar">
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <Typography color="primary.contrastText" fontSize={'large'}>
                  Lucas Queirolo
                </Typography>
                <Typography color="primary.contrastText" fontSize={'small'} fontWeight={'lighter'}>
                  {t('navRole')}
                </Typography>
              </div>
              <div onClick={() => {
                toggleMobileMenu()
              }}>
                {mobileMenu ? <CloseIcon /> : <MenuIcon />}
              </div>
            </StyledToolbar>


            <Modal open={mobileMenu} onClose={() => setMobileMenu(false)} sx={{ backdropFilter: 'blur(15px)' }}>
              <>
                <StyledToolbar id="navbar">
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                    <Typography color="primary.contrastText" fontSize={'large'}>
                      Lucas Queirolo
                    </Typography>
                    <Typography color="primary.contrastText" fontSize={'small'} fontWeight={'lighter'}>
                      {t('navRole')}
                    </Typography>
                  </div>
                  <div onClick={() => {
                    toggleMobileMenu()
                  }}>
                    {mobileMenu ? <CloseIcon /> : <MenuIcon />}
                  </div>
                </StyledToolbar>

                <StyledMobileMenu >

                  <Grid2 container display={'flex'} flexDirection={'column'} width={'100%'}>
                    <Grid2 width={'100%'} display={'flex'} justifyContent={'space-around'} pt={10} >
                      <DarkModeToggle />
                      <LanguageSwitcher />
                    </Grid2>
                    <Grid2 size='grow' display={'flex'} flexDirection={'column'} alignSelf={'center'} alignItems={'center'} justifyContent={'space-evenly'} >
                      <StyledMenuIcon onClick={() => {
                        ScrollTo('hero')
                        setMobileMenu(!mobileMenu)
                      }}>
                        {t('navMain')}
                      </StyledMenuIcon>

                      <StyledMenuIcon onClick={() => {
                        ScrollTo('about')
                        setMobileMenu(!mobileMenu)
                      }}>
                        {t('navAbout')}
                      </StyledMenuIcon>

                      <StyledMenuIcon onClick={() => {
                        ScrollTo('experience')
                        setMobileMenu(!mobileMenu)
                      }}>
                        {t('navExperience')}
                      </StyledMenuIcon>

                      <StyledMenuIcon onClick={() => {
                        ScrollTo('projects')
                        setMobileMenu(!mobileMenu)
                      }}>
                        {t('navProjects')}
                      </StyledMenuIcon>

                    </Grid2>

                  </Grid2>
                </StyledMobileMenu>

              </>
            </Modal>


          </div>
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
