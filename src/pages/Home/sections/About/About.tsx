import { Container, Grid, styled, Typography } from '@mui/material'
import SkillsButton from '../../../../components/SkillsButton/SkillsButton'
const About = () => {
  const StyledAbout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  }))
  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
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
              <Grid item xs={12} md={12} display="flex" justifyContent="center">
                <SkillsButton>
                  <Typography>HTML</Typography>
                </SkillsButton>
                <SkillsButton>
                  <Typography>CSS</Typography>
                </SkillsButton>
                <SkillsButton>
                  <Typography>Javascript</Typography>
                </SkillsButton>
                <SkillsButton>
                  <Typography>React</Typography>
                </SkillsButton>
              </Grid>
              <Grid item xs={12} md={12} display="flex" justifyContent="center">
                <SkillsButton>
                  <Typography>Typescript</Typography>
                </SkillsButton>
                <SkillsButton>
                  <Typography>Git</Typography>
                </SkillsButton>
                <SkillsButton>
                  <Typography>Python</Typography>
                </SkillsButton>
                <SkillsButton>
                  <Typography>PowerBI</Typography>
                </SkillsButton>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  )
}
export default About
