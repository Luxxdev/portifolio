import { Grid2, styled, Typography } from '@mui/material'
import StyledButton from '../StyledButton/StyledButton'
import placeHolder from '../../assets/images/placeHolder.png'
import TechTag from '../TechTag/TechTag'

interface ProjectProps {
  name?: string
  image?: string
  description?: string
  buttons?: ButtonProps[]
  techs?: string[]
}

interface ButtonProps {
  label?: string
  link: string
}

const Project: React.FC<ProjectProps> = ({ name, image, description, buttons = [], techs }) => {
  name = name ? name : 'Nome'
  image = image ? image : placeHolder
  description = description ? description : 'Descrição do projeto'

  const StyledProject = styled('div')(({ theme }) => ({
    maxHeight: '70vh',
    width: '80vw',
    overflow: 'auto',
    padding: '20px',
    scrollBehavior: 'smooth',
    scrollbarColor: `${theme.palette.primary.main} ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      width: '40vw',
    }

  }))

  const StyledImg = styled('img')(({ }) => ({
  }))

  return (
    <>
      <StyledProject>
        <Typography color="primary.contrastText" variant="h4" textAlign="left" pb={2}>
          {name}
        </Typography>

        <StyledImg src={image} />

        <Grid2 container display="flex" justifyContent="center" pt={1} letterSpacing={1} rowGap={1} columnGap={1} alignItems={'center'}>
          {techs?.map(tech => (
            <Grid2 size='auto' justifyContent="center">
              <TechTag>
                <Typography letterSpacing={2} fontWeight={'light'}>{tech}</Typography>
              </TechTag>
            </Grid2>
          ))}
        </Grid2>

        <Typography color="primary.contrastText" textAlign="center" pb={10} pt={6}>
          {description}
        </Typography>


        <Grid2 container display="flex" justifyContent="center" spacing={3} alignItems={'center'}>
          {buttons.map((button, index) => (
            <Grid2 size={{ xs: 6, md: 6 }} key={index}>
              <StyledButton
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = button.link
                  link.target = '_blank'
                  link.rel = 'noopener noreferrer'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Typography>{button.label}</Typography>
              </StyledButton>
            </Grid2>
          ))}
        </Grid2>
      </StyledProject >
    </>
  )
}

export default Project
