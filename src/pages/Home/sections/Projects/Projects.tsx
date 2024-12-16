import { Grid2, styled, Typography } from '@mui/material'
import placeHolder from '../../../../assets/images/placeHolder.png'
import Project from '../../../../components/Project/Project'

const Projects = () => {
  const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    paddingBottom: '50px',
    paddingTop: '50px',
  }))

  return (
    <>
      <StyledProjects id="projects">
        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} pt={2}>
          Projects
        </Typography>

        <Grid2 container spacing={2} display={'flex'} justifyContent={'center'}>
          <Grid2 size={{ xs: 12, md: 4 }} textAlign="center" border={1} borderColor={'white'} margin={5} padding={'16px'}>
            <Project
              name="Projeto 1"
              image={placeHolder}
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem."
              buttons={[
                { label: 'View Project', link: 'https://www.google.com' },
                { label: 'View Code', link: 'https://www.google.com' },
              ]}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }} textAlign="center" border={1} borderColor={'white'} margin={5} padding={'16px'}>
            <Project
              buttons={[
                { label: 'View Project', link: 'https://www.google.com' },
                { label: 'View Code', link: 'https://www.google.com' },
              ]}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }} textAlign="center" border={1} borderColor={'white'} margin={5} padding={'16px'}>
            <Project />
          </Grid2>
        </Grid2>
      </StyledProjects>
    </>
  )
}

export default Projects
