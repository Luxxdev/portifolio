import { Container, Grid2, styled, Typography } from '@mui/material'
import Experience from '../../../../components/Experience/Experience'
import { useTranslation } from 'react-i18next'
import allExperiences from '../../../../components/Experience/AllExperiences'



const Experiences = () => {
    const { t } = useTranslation()

    const StyledExperience = styled('div')(({ theme }) => ({
        borderTop: `1px solid ${theme.palette.secondary.contrastText}`,
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        minHeight: '100vh',
        paddingBottom: '50px',
        paddingTop: '50px',
        width: '100%',
    }))

    return (
        <>
            <StyledExperience id='experience'>
                <Container maxWidth="lg">
                    <Grid2 container spacing={2} justifyContent={'center'} >
                        <Grid2 size={{ xs: 12, md: 12 }} justifyContent={'center'}>
                            <Typography color="primary.contrastText" fontWeight={'400'} variant="h2" textAlign="center" pb={5}>
                                {t('experienceTitle')}
                            </Typography>
                        </Grid2>
                        {allExperiences.map(exp => (
                            <Experience
                                name={t(exp.name)}
                                date={exp.date}
                                description={t(exp.description)}
                                img />
                        ))}
                    </Grid2>
                </Container>
            </StyledExperience >
        </>
    )
}
export default Experiences
