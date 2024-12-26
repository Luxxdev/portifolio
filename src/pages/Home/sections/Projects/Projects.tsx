import { Grid2, styled, Typography } from '@mui/material'
import placeHolder from '../../../../assets/images/placeHolder.png'
import Project from '../../../../components/Project/Project'

const Projects = () => {

  const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
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

          <Project
            buttons={[
              { label: 'View Project', link: 'https://www.google.com' },
              { label: 'View Code', link: 'https://www.google.com' },
            ]}
          />

          <Project />
        </Grid2>
      </StyledProjects >
    </>
  )
}

export default Projects
