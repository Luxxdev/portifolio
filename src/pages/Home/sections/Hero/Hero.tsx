import { Box, Container, Grid, styled, Typography } from '@mui/material'
import Avatar from '../../../../assets/images/avatar.jpg'
import DownloadIcon from '@mui/icons-material/Download'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import StyledButton from '../../../../components/StyledButton/StyledButton'
import theme from '../../../../theme'
import { AnimatedBackground } from '../../../../components/AnimatedBackGround/AnimatedBackground'

const Hero = () => {
  const StyledHero = styled('div')(({}) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
      alignItems: 'flex-start',
      paddingTop: '100px',
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      paddingTop: '0px',
    },
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
      <StyledHero>
        <Container maxWidth={'lg'}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position={'relative'}>
                <Box position={'absolute'} width={'100%'} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position={'relative'} textAlign={'center'}>
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign={'center'} pb={2}>
                Lucas Queirolo
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign={'center'}>
                Game Developer
              </Typography>

              <Grid container display={'flex'} justifyContent={'center'} spacing={3} pt={3}>
                <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download Cv</Typography>
                  </StyledButton>
                </Grid>

                <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>
                  <StyledButton>
                    <AlternateEmailIcon />
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
