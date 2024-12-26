import { Container, Grid2, styled, Typography } from '@mui/material'
import SkillsButton from '../../../../components/SkillsButton/SkillsButton'
import SchoolIcon from '@mui/icons-material/School'

const About = () => {

  const StyledAbout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    minHeight: '100vh',
    paddingBottom: '50px',
    paddingTop: '50px',
    [theme.breakpoints.up('xs')]: {
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
    },
  }))

  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Grid2 container spacing={2} justifyContent={'center'}>
            <Grid2 size={{ xs: 12, md: 12 }} paddingBottom={5} justifyContent={'center'}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                About me
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 2 }} textAlign={'center'} paddingBottom={5}>
              <SkillsButton fixedSizeRatio={true}>
                <SchoolIcon />
                <Typography fontWeight={'bold'}>Formação</Typography>
                <Typography>Jogos Digitais — IBMR</Typography>
                <Typography>2019-2021</Typography>
              </SkillsButton>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 12 }} borderBottom={1} borderColor="primary.contrastText" paddingBottom={10} justifyContent={'center'}>
              <Typography color="primary.contrastText" variant="h5" textAlign="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }} marginTop={5}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                Skills
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>HTML</Typography>
              </SkillsButton>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>CSS</Typography>
              </SkillsButton>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>Javascript</Typography>
              </SkillsButton>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>React</Typography>
              </SkillsButton>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>Typescript</Typography>
              </SkillsButton>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>Git</Typography>
              </SkillsButton>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>Python</Typography>
              </SkillsButton>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
              <SkillsButton>
                <Typography>PowerBI</Typography>
              </SkillsButton>
            </Grid2>
          </Grid2>
        </Container>
      </StyledAbout>
    </>
  )
}
export default About
