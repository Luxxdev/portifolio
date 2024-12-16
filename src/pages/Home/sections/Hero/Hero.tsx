import { Box, Container, Grid2, styled, Typography } from '@mui/material'
import Avatar from '../../../../assets/images/avatar.jpg'
import DownloadIcon from '@mui/icons-material/Download'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import StyledButton from '../../../../components/StyledButton/StyledButton'
import theme from '../../../../theme'
import { AnimatedBackground } from '../../../../components/AnimatedBackGround/AnimatedBackground'
import resume from '../../../../assets/images/LucasQueiroloResume.pdf'

const Hero = () => {
  const StyledHero = styled('div')(({}) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    paddingBottom: '75px',
    paddingTop: '-75px',
    // [theme.breakpoints.up('xs')]: {
    //   paddingBottom: '75px',
    //   paddingTop: '-75px',
    // },
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: '0',
    // },
  }))

  const StyledImg = styled('img')(() => ({
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.contrastText}`,
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
        <Container maxWidth={'lg'}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <Box position={'relative'}>
                <Box position={'absolute'} width={'100%'} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position={'relative'} textAlign={'center'}>
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign={'center'} pb={2}>
                Lucas Queirolo
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign={'center'}>
                Game Developer
              </Typography>

              <Grid2 container display={'flex'} justifyContent={'center'} spacing={3} pt={3}>
                <Grid2 size={{ xs: 12, md: 4 }} display={'flex'} justifyContent={'center'}>
                  <StyledButton
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = resume
                      link.download = 'LucasQueiroloResume.pdf'
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    <DownloadIcon />
                    <Typography>Download</Typography>
                  </StyledButton>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 4 }} display={'flex'} justifyContent={'center'}>
                  <StyledButton onClick={() => console.log('donwload')}>
                    <AlternateEmailIcon />
                    <Typography>Contact Me</Typography>
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
