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
  }))

  return (
    <>
      <StyledProjects id="projects">
        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} pt={2}>
          {t('projectsTitle')}
        </Typography>

        <Grid2 container spacing={2} display={'flex'} justifyContent={'center'}>
          {allProjetcs.map(project => (
            <Project
              name={t(project.name)}
              description={t(project.description)}
              image={project.image}
              buttons={project.buttons.map(button => ({
                label: t(button.label),
                link: button.link
              }))}
            />
          ))}
        </Grid2>
      </StyledProjects >
    </>
  )
}

export default Projects
