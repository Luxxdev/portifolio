import { BorderRight } from '@mui/icons-material'
import { AppBar, Grid, MenuItem, styled, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: theme.palette.primary.dark,
  }))

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <MenuItem sx={{ borderStyle: 'outset', borderWidth: '1px', borderColor: 'white' }}>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar
