import { Container, Grid2, styled, Typography } from '@mui/material'
import SkillsTag from '../../../../components/SkillsTag/SkillsTag'
import SchoolIcon from '@mui/icons-material/School'
import { useTranslation } from 'react-i18next'

const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Git", "Python", "Selenium", "C#", 'C++', 'SQL', 'GDScript', 'Game Design', 'Level Design', "Narrative Design", 'Unreal Engine', 'Godot Engine', 'Unity Engine',]

const About = () => {

  const { t } = useTranslation()

  const StyledAbout = styled('div')(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.secondary.contrastText}`,
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
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={5} fontWeight={'400'}>
                {t('aboutTitle')}
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 9, md: 3 }} display={'flex'} justifyContent={'center'} textAlign={'center'} paddingBottom={5} columnGap={0} color='secondary.main'>
              <SkillsTag fixedSizeRatio={true} secondColor={true}>
                <SchoolIcon />
                <Grid2 display={'flex'} flexDirection={'column'} rowGap={1} justifyContent={'space-between'} height={'70%'} alignItems={'center'} color='secondary.main' mt={2}>
                  <Typography color='primary.contrastText' variant='h5' fontWeight={'bold'} letterSpacing={1}>{t('aboutEducation')}</Typography>
                  <Typography color='primary.contrastText' variant='h6' fontWeight={'lighter'} letterSpacing={2}>{t('aboutUniversity')}</Typography>
                  <Typography color='primary.contrastText' variant='h6' fontWeight={'lighter'} letterSpacing={2}>{'2019-2021'}</Typography>
                </Grid2>
              </SkillsTag>
            </Grid2>

            <Grid2 size={{ xs: 9, md: 3 }} display={'flex'} justifyContent={'center'} textAlign={'center'} paddingBottom={5} columnGap={0}>
              <SkillsTag fixedSizeRatio={true} secondColor={true}>
                <SchoolIcon />
                <Grid2 display={'flex'} flexDirection={'column'} rowGap={1} justifyContent={'space-between'} height={'70%'} alignItems={'center'} color='secondary.main' mt={2} >

                  <Typography color='primary.contrastText' variant='h5' fontWeight={'bold'} letterSpacing={1}>{t('aboutEducation2')}</Typography>
                  <Typography color='primary.contrastText' variant='h6' fontWeight={'lighter'} letterSpacing={2}>{t('aboutUniversity2')}</Typography>
                  <Typography color='primary.contrastText' variant='h6' fontWeight={'lighter'} letterSpacing={2}>{'2025-' + t('present')}</Typography>
                </Grid2>
              </SkillsTag>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 12 }} borderBottom={2} borderColor="secondary.main" paddingBottom={10} justifyContent={'center'}>
              <Typography color="primary.contrastText" variant="h5" textAlign="center">
                {t('aboutText')}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }} marginTop={5}>
              <Typography color="primary.contrastText" fontWeight={'400'} variant="h2" textAlign="center" pb={5}>
                {t('skillsTitle')}

              </Typography>
            </Grid2>

            {skills.map(skill => (
              <Grid2 size='auto' display="flex" justifyContent="center" margin={'5px 5px'}>
                <SkillsTag>
                  <Typography noWrap={true} textAlign={'center'}>{t(skill)}</Typography>
                </SkillsTag>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </StyledAbout>
    </>
  )
}
export default About
