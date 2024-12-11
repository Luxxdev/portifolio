import { AppBar, Grid, MenuItem, styled, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  }))

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Grid container display={'flex'} justifyContent={'center'}>
            <Grid borderLeft={1} borderColor={'white'} item md={3}>
              <MenuItem>About</MenuItem>
            </Grid>

            <Grid item borderLeft={1} borderRight={1} borderColor={'white'} md={3} textAlign={'center'}>
              <MenuItem>Skills</MenuItem>
            </Grid>

            <Grid item md={3}>
              <MenuItem>Projects</MenuItem>
            </Grid>
          </Grid>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar
