import { Container, Grid2, styled, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const StyledFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    justifyContent: 'space-evenly',
    paddingTop: '50px',
    // paddingBottom: '50px',
  }))

  const StyledLink = styled('a')(({ theme }) => ({
    display: 'flex',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5vh',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: 'pointer',
    },
  }))

  const StyledTypography = styled(Typography)(({ }) => ({
    fontWeight: 'lighter',
    marginLeft: '10px',
    variant: 'h6',
    letterSpacing: 1,
  }))

  return (
    <>
      <StyledFooter id="footer">
        <Container>
          <Typography variant="h3" textAlign={'center'} paddingBottom={'75px'}>
            {t('footerContact')}
          </Typography>
          <Grid2 container spacing={5}>
            <Grid2 size={{ xs: 12, md: 4 }} border={1} borderColor="primary.contrastText" alignContent={'center'}>
              <StyledLink href="https://www.linkedin.com/in/lucasqueirolo/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                <StyledTypography>/lucasqueirolo</StyledTypography>
              </StyledLink>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }} border={1} borderColor="primary.contrastText">
              <StyledLink href={`https://mail.google.com/mail/u/0/?fs=1&to=lucas.queirolo.santos@gmail.com&body=${t('messageGreeting')}&tf=cm`} target="_blank" rel="noopener noreferrer">
                <EmailIcon />
                <StyledTypography>lucas.queirolo.s@gmail.com</StyledTypography>
              </StyledLink>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }} border={1} borderColor="primary.contrastText">
              <StyledLink href={`https://web.whatsapp.com/send/?phone=5521999894540&text=${t('messageGreeting')}`} target="_blank" rel="noopener noreferrer">
                <CallIcon />
                <StyledTypography>+55 (21) 99989-4540</StyledTypography>
              </StyledLink>
            </Grid2>
            {/* <Grid2 size={{ xs: 12, md: 3 }} paddingBottom={3}>
              <StyledLink href="https://github.com/Luxxdev" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                <Typography variant="h6">/Luxxdev</Typography>
              </StyledLink>
            </Grid2> */}
          </Grid2>
          <Typography fontSize={'small'} fontWeight={'lighter'} paddingBottom={'10px'} paddingTop={'75px'} textAlign={'center'}>
            {t("footerRights")}
          </Typography>
        </Container>
      </StyledFooter>
    </>
  )
}

export default Footer
