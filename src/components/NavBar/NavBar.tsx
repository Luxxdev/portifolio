import { AppBar, MenuItem, styled, Toolbar } from '@mui/material'

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-evenly',
    backgroundColor: theme.palette.primary.dark,
  }))

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar
