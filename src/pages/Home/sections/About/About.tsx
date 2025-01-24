import { Container, Grid2, styled, Typography } from '@mui/material'
import SkillsButton from '../../../../components/SkillsTag/SkillsTag'
import SchoolIcon from '@mui/icons-material/School'
import { useTranslation } from 'react-i18next'

const skills = ["HTML", "CSS", "Javascript", "React", "Typescript", "Git", "Python", "C#", 'C++', 'SQL', 'GDScript', 'Game Design', 'Level Design', "Narrative Design", 'Unreal Engine', 'Godot Engine', 'Unity Engine',]

const About = () => {

  const { t } = useTranslation()

  const StyledAbout = styled('div')(({ theme }) => ({

    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    minHeight: '100vh',
    paddingBottom: '50px',
    paddingTop: '50px',
    width: '100%',
  }))

  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Grid2 container spacing={2} justifyContent={'center'} pb={2}>
            <Grid2 size={{ xs: 12, md: 12 }} justifyContent={'center'}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={5}>
                {t('aboutTitle')}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 12 }} display={'flex'} justifyContent={'center'} textAlign={'center'} paddingBottom={5}>
              <SkillsButton fixedSizeRatio={true}>
                <SchoolIcon />
                <Typography fontWeight={'bold'}>{t('aboutEducation')}</Typography>
                <Typography>{t('aboutUniversity')}</Typography>
                <Typography>{'2019-2021'}</Typography>
              </SkillsButton>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 12 }} borderBottom={1} borderColor="primary.contrastText" paddingBottom={10} justifyContent={'center'}>
              <Typography color="primary.contrastText" variant="h5" textAlign="center">
                {t('aboutText')}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }} marginTop={5}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={5}>
                {t('skillsTitle')}

              </Typography>
            </Grid2>

            {skills.map(skill => (
              <Grid2 size='auto' display="flex" justifyContent="center">
                <SkillsButton>
                  <Typography noWrap={true} textAlign={'center'}>{t(skill)}</Typography>
                </SkillsButton>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </StyledAbout>
    </>
  )
}
export default About
