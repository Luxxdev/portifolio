import { Container, Grid, styled, Typography } from '@mui/material'
import SkillsButton from '../../../../components/SkillsButton/SkillsButton'
const About = () => {
  const StyledAbout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
      alignItems: 'flex-start',
      paddingBottom: '50px',
      paddingTop: '50px',
    },
    [theme.breakpoints.up('md')]: {
      height: '100vh',
      alignItems: 'center',
      paddingTop: '0',
    },
  }))
  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent={'center'}>
            <Grid item xs={12} md={12} borderBottom={1} borderColor="primary.contrastText" paddingBottom={10}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                About me
              </Typography>
              <Typography color="primary.contrastText" variant="h5" textAlign="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} marginTop={5}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                Skills
              </Typography>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>HTML</Typography>
              </SkillsButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>CSS</Typography>
              </SkillsButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>Javascript</Typography>
              </SkillsButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>React</Typography>
              </SkillsButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>Typescript</Typography>
              </SkillsButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>Git</Typography>
              </SkillsButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>Python</Typography>
              </SkillsButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>PowerBI</Typography>
              </SkillsButton>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  )
}
export default About
