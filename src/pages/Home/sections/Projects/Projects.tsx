import { Grid2, styled, Typography } from '@mui/material'
import Project from '../../../../components/Project/Project'
import { useTranslation } from 'react-i18next'
import allProjetcs from '../../../../components/Project/AllProjects'

const Projects = () => {
  const { t } = useTranslation()

  const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    paddingBottom: '50px',
    paddingTop: '50px',
    width: '100%',

  }))

  return (
    <>
      <StyledProjects id="projects">
        <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={10} >
          {t('projectsTitle')}
        </Typography>

        <Grid2 container display={'flex'} justifyContent={'center'} spacing={10}>
          {allProjetcs.map(project => (
            <Project
              name={t(project.name)}
              description={t(project.description)}
              image={project.image}
              buttons={project.buttons?.map(button => ({
                label: t(button.label),
                link: button.link
              }))}
              techs={project.techs?.map(tech => (t(tech)))}
            />
          ))}
        </Grid2>
      </StyledProjects >
    </>
  )
}

export default Projects
