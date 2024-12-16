import { Container, Grid2, styled, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'

const Footer = () => {
  const StyledFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    justifyContent: 'space-evenly',
    paddingTop: '50px',
    paddingBottom: '50px',
  }))

  const StyledLink = styled('a')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  }))

  return (
    <>
      <StyledFooter id="footer">
        <Container maxWidth={false}>
          <Typography variant="h3" textAlign={'center'} paddingBottom={'50px'}>
            Contato
          </Typography>
          <Grid2 container display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
            <Grid2 size={{ xs: 12, md: 3 }} paddingBottom={3}>
              <StyledLink href="https://www.linkedin.com/in/lucasqueirolo/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                <Typography variant="h6">/lucasqueirolo</Typography>
              </StyledLink>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingBottom={3}>
              <StyledLink href="https://github.com/Luxxdev" target="_blank" rel="noopener noreferrer">
                <EmailIcon />
                <Typography variant="h6">lucas.queirolo.s@gmail.com</Typography>
              </StyledLink>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingBottom={3}>
              <StyledLink href="https://web.whatsapp.com/send/?phone=5521999894540&text=Olá," target="_blank" rel="noopener noreferrer">
                <CallIcon />
                <Typography variant="h6">+55 (21) 99989-4540</Typography>
              </StyledLink>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingBottom={3}>
              <StyledLink href="https://github.com/Luxxdev" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                <Typography variant="h6">/Luxxdev</Typography>
              </StyledLink>
            </Grid2>
          </Grid2>
          {/* <Typography textAlign={'center'}>© 2024 Lucas Queirolo - All rights reserved.</Typography> */}
        </Container>
      </StyledFooter>
    </>
  )
}

export default Footer
