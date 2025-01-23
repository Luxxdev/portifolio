import { Box, Container, Grid2, styled, Typography } from '@mui/material'
import avatar from '../../../../assets/images/avatar.png'

import DownloadIcon from '@mui/icons-material/Download'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import StyledButton from '../../../../components/StyledButton/StyledButton'
import { AnimatedBackground } from '../../../../components/AnimatedBackGround/AnimatedBackground'
import resumeEN from '../../../../assets/images/LucasQueirolo_Resume.pdf'
import resumePT from '../../../../assets/images/LucasQueirolo_Currículo.pdf'
import { ScrollTo } from '../../../../components/NavBar/NavBar'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  const StyledHero = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    paddingBottom: '50px',
    // [theme.breakpoints.up('xs')]: {
    //   paddingBottom: '75px',
    //   paddingTop: '-75px',
    // },
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: '0',
    // },
  }))

  const StyledImg = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    border: `2px solid ${theme.palette.primary.contrastText}`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
    [theme.breakpoints.up('xs')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  }))

  return (
    <>
      <StyledHero id="hero">
        <Container maxWidth={'lg'} >
          <Grid2 container spacing={2} alignItems={'center'}>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <Box position={'relative'}>
                <Box position={'absolute'} width={'100%'} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position={'relative'} textAlign={'center'}>
                  <StyledImg src={avatar} loading='lazy' />
                </Box>
              </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 7 }} >

              <Grid2 container display={'flex'} justifyContent={'center'}>
                <Grid2 size={{ xs: 12, md: 12 }} display={'flex'} justifyContent={'center'}>
                  <Typography color="primary.contrastText" variant="h1" textAlign={'center'} pb={5} pt={{ xs: 5, md: 0 }}>
                    Lucas Queirolo
                  </Typography>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 12 }} display={'flex'} justifyContent={'center'}>
                  <Typography color="primary.contrastText" variant="h2" textAlign={'center'} pb={5} display={'flex'} maxWidth={450} >
                    {t('heroRole')}
                  </Typography>
                </Grid2>
              </Grid2>


              <Grid2 container display={'flex'} justifyContent={'center'} spacing={3} pt={3}>
                <Grid2 size={{ xs: 7, md: 5 }} display={'flex'} justifyContent={'center'}>
                  <StyledButton
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = t('oppositeLanguage') === 'en' ? resumePT : resumeEN
                      link.download = t("donwloadLinkName")
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    <DownloadIcon />
                    <Typography >{t('heroButtonDownload')}</Typography>
                  </StyledButton>
                </Grid2>

                <Grid2 size={{ xs: 7, md: 5 }} display={'flex'} justifyContent={'center'}>
                  <StyledButton onClick={() => ScrollTo('footer')}>
                    <AlternateEmailIcon />
                    <Typography>{t('heroButtonContact')}</Typography>
                  </StyledButton>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
