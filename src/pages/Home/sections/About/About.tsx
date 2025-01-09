import { Container, Grid2, styled, Typography } from '@mui/material'
import SkillsButton from '../../../../components/SkillsButton/SkillsButton'
import SchoolIcon from '@mui/icons-material/School'
import { useTranslation } from 'react-i18next'

const skills = ["HTML", "CSS", "Javascript", "React", "Typescript", "Git", "Python", "PowerBI"]

const About = () => {

  const { t } = useTranslation()

  const StyledAbout = styled('div')(({ theme }) => ({

    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    minHeight: '100vh',
    paddingBottom: '50px',
    paddingTop: '50px',
  }))

  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Grid2 container spacing={2} justifyContent={'center'}>
            <Grid2 size={{ xs: 12, md: 12 }} paddingBottom={5} justifyContent={'center'}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
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
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                {t('skillsTitle')}

              </Typography>
            </Grid2>

            {skills.map(skill => (
              <Grid2 size={{ xs: 4, md: 3 }} display="flex" justifyContent="center">
                <SkillsButton>
                  <Typography>{t(skill)}</Typography>
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
