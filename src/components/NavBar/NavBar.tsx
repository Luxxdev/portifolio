import { AppBar, MenuItem, styled, Toolbar } from '@mui/material'

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-evenly',
    backgroundColor: theme.palette.primary.dark,
  }))
  const StyledA = styled('a')(({ theme }) => ({
    // Adicione seus estilos aqui, por exemplo:
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    height: '5vh',
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
  }))

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar id="navbar">
          <StyledA onClick={() => ScrollTo('hero')}>
            <MenuItem>Main</MenuItem>
          </StyledA>
          <StyledA onClick={() => ScrollTo('about')}>
            <MenuItem>About</MenuItem>
          </StyledA>
          <StyledA onClick={() => ScrollTo('projects')}>
            <MenuItem>Projects</MenuItem>
          </StyledA>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

function ScrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  const nav = document.getElementById('navbar')
  console.log(section?.scrollHeight)
  if (section?.offsetTop != null && nav?.offsetHeight != null) {
    window.scrollTo({ top: section?.offsetTop - nav?.offsetHeight, behavior: 'smooth' })
  }
}

export default NavBar
