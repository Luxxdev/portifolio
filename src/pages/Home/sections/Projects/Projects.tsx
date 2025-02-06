import { Grid2, styled, Typography } from '@mui/material'
import Project from '../../../../components/Project/Project'
import { useTranslation } from 'react-i18next'
import allProjetcs from '../../../../components/Project/AllProjects'

const Projects = () => {
  const { t } = useTranslation()

  const StyledProjects = styled('div')(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.secondary.contrastText}`,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    paddingBottom: '50px',
    paddingTop: '50px',
    width: '100%',

  }))

  return (
    <>
      <StyledProjects id="projects">
        <Typography color="primary.contrastText" fontWeight={'400'} variant="h2" textAlign="center" pb={10} >
          {t('projectsTitle')}
        </Typography>

        <Grid2 container spacing={10} width={{ md: '65vw', sm: '80vw', xs: '80vw' }} >
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
              site={project.site}
            />
          ))}
        </Grid2>
      </StyledProjects >
    </>
  )
}

export default Projects
