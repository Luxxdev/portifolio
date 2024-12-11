import { Container, Grid, styled, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

const Footer = () => {
  const StyledFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    justifyContent: 'space-evenly',
    padding: '20px',
  }))

  return (
    <>
      <StyledFooter id="footer">
        <Container>
          <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} pb={2}>
            <Grid item xs={12} md={4}>
              <LinkedInIcon />
            </Grid>
            <Grid item xs={12} md={4}>
              <GitHubIcon />
            </Grid>
            <Grid item xs={12} md={4}>
              <EmailIcon />
            </Grid>
          </Grid>
          <Typography textAlign={'center'}>© 2024 Lucas Queirolo - All rights reserved.</Typography>
        </Container>
      </StyledFooter>
    </>
  )
}

export default Footer
