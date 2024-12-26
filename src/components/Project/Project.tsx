import { Grid2, styled, Typography } from '@mui/material'
import StyledButton from '../StyledButton/StyledButton'
import placeHolder from '../../assets/images/placeHolder.png'

interface ProjectProps {
  name?: string
  image?: string
  description?: string
  buttons?: ButtonProps[]
}

interface ButtonProps {
  label?: string
  link: string
}

const Project: React.FC<ProjectProps> = ({ name, image, description, buttons = [] }) => {
  name = name ? name : 'Nome'
  image = image ? image : placeHolder
  description = description ? description : 'Descrição do projeto'

  const StyledProject = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }))

  const StyledImg = styled('img')(({ }) => ({
    width: '40%',
    marginBottom: '10px',
  }))

  return (
    <>
      <StyledProject>
        <Typography color="primary.contrastText" variant="h4" textAlign="left" pb={2}>
          {name}
        </Typography>

        <StyledImg src={image} />

        <Typography color="primary.contrastText" textAlign="center">
          {description}
        </Typography>

        <Grid2 container display="flex" justifyContent="center" spacing={3} pt={3} alignContent={'end'}>
          {buttons.map((button, index) => (
            <Grid2 size={{ xs: 6, md: 3 }} key={index} display="flex">
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
      </StyledProject>
    </>
  )
}

export default Project
