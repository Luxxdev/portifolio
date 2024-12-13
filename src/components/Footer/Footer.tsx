import { Container, Grid, styled, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  const StyledFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    justifyContent: 'space-evenly',
    padding: '20px',
  }))

  const StyledLink = styled('a')(({ theme }) => ({
    // Adicione seus estilos aqui, por exemplo:
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  }))

  return (
    <>
      <StyledFooter id="footer">
        <Container>
          <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} pb={2}>
            <Grid item xs={4} md={4}>
              <StyledLink href="https://www.linkedin.com/in/lucasqueirolo/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </StyledLink>
            </Grid>
            <Grid item xs={4} md={4}>
              <StyledLink href="https://github.com/Luxxdev" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </StyledLink>
            </Grid>
          </Grid>
          <Typography textAlign={'center'}>© 2024 Lucas Queirolo - All rights reserved.</Typography>
        </Container>
      </StyledFooter>
    </>
  )
}

export default Footer
