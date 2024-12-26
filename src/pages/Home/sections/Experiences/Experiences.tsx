import { Container, Grid2, styled, Typography } from '@mui/material'
import Experience from '../../../../components/Experience/Experience'



const Experiences = () => {
    const StyledExperience = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        minHeight: '100vh',
        paddingBottom: '50px',
        paddingTop: '50px',
        // [theme.breakpoints.up('xs')]: {
        //     alignItems: 'flex-start',
        // },
        // [theme.breakpoints.up('md')]: {
        //     alignItems: 'center',
        // },
    }))

    return (
        <>
            <StyledExperience id='experience'>
                <Container maxWidth="lg">
                    <Grid2 container spacing={2} justifyContent={'center'}>
                        <Grid2 size={{ xs: 12, md: 12 }} paddingBottom={5} justifyContent={'center'}>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                                Experience
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 12 }} justifyContent={'center'} border={1} borderColor={'"primary.contrastText"'} margin={5}  >
                            <Experience
                                name='Emprego 1'
                                date='2021-2022'
                                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudan tium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationemLorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudan tium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationemLorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudan tium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationemLorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudan tium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.' />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 12 }} justifyContent={'center'} border={1} borderColor={'"primary.contrastText"'} margin={5}  >
                            <Experience
                                name='Emprego 1'
                                date='2021-2022'
                                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
                consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.' />
                        </Grid2>
                    </Grid2>
                </Container>
            </StyledExperience >
        </>
    )
}
export default Experiences
