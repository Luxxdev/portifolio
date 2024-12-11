import { Grid, styled, Typography } from '@mui/material'
import placeHolder from '../../../../assets/images/placeHolder.png'
import StyledButton from '../../../../components/StyledButton/StyledButton'
const Projects = () => {
  const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }))
  const StyledImg = styled('img')(({}) => ({
    width: '40%',
    marginBottom: '10px',
  }))
  return (
    <>
      <StyledProjects>
        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} pt={2}>
          Projects
        </Typography>
        <Grid container spacing={2} display={'flex'} justifyContent={'center'}>
          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={'white'} margin={5} padding={'16px'}>
            <Typography color="primary.contrastText" variant="h4" textAlign="left" pb={2}>
              Project 1
            </Typography>
            <StyledImg src={placeHolder} />
            <Typography color="primary.contrastText" textAlign="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
              consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.
            </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={6} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log('download')}>
                  <Typography>View Project</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={6} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log('contact')}>
                  <Typography>View Code</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={'white'} margin={5} padding={'16px'}>
            <Typography color="primary.contrastText" variant="h4" textAlign="left" pb={2}>
              Project 2
            </Typography>
            <StyledImg src={placeHolder} />
            <Typography color="primary.contrastText" textAlign="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
              consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.
            </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={6} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log('download')}>
                  <Typography>View Project</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={6} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log('contact')}>
                  <Typography>View Code</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={'white'} margin={5} padding={'16px'}>
            <Typography color="primary.contrastText" variant="h4" textAlign="left" pb={2}>
              Project 3
            </Typography>
            <StyledImg src={placeHolder} />
            <Typography color="primary.contrastText" textAlign="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
              consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.
            </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={6} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log('download')}>
                  <Typography>View Project</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={6} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log('contact')}>
                  <Typography>View Code</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={'white'} margin={5} padding={'16px'}>
            <Typography color="primary.contrastText" variant="h4" textAlign="left" pb={2}>
              Project 4
            </Typography>
            <StyledImg src={placeHolder} />
            <Typography color="primary.contrastText" textAlign="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere
              consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem.
            </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={6} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log('download')}>
                  <Typography>View Project</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={6} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log('contact')}>
                  <Typography>View Code</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledProjects>
    </>
  )
}

export default Projects
