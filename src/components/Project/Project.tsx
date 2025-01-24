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
    width: '90vw',
    height: '100%',
    padding: '20px',
    borderRadius: '10px',
    scrollBehavior: 'smooth',
    scrollbarColor: `${theme.palette.primary.main} ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      width: '40vw',
    }

  }))

  const StyledImg = styled('img')(({ theme }) => ({
    width: '100%',
    aspectRatio: 1 / 1,
    border: `5px ${theme.palette.primary.contrastText} solid`,
    borderRadius: '40%',
    filter: 'grayscale(50%)',
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  }))

  return (
    <>
      <Grid2 size='auto' textAlign="center" border={5} borderColor={"primary.contrastText"} borderRadius={'10px'} >
        <StyledProject>
          <Typography color="primary.contrastText" variant="h3" fontWeight={'light'} textAlign="center" mb={5} mt={2} borderBottom={2} borderColor={"primary.contrastText"} pb={2}>
            {name}
          </Typography>

          <StyledImg src={image} />

          <Grid2 container display="flex" justifyContent="center" pt={2} letterSpacing={1} rowGap={1} columnGap={0.5} alignItems={'center'} >
            {techs?.map(tech => (
              <Grid2 size='auto' justifyContent="center">
                <TechTag>
                  <Typography variant='body2' letterSpacing={2} fontWeight={'light'}>{tech}</Typography>
                </TechTag>
              </Grid2>
            ))}
          </Grid2>

          <Typography color="primary.contrastText" textAlign="center" height={'20vh'} overflow={'auto'} width={'100%'} borderTop={2} borderBottom={2} borderColor={"primary.contrastText"} margin={"50px 0px"} padding={2} alignContent={'center'}>
            {description}
          </Typography>

          <Grid2 container size='auto' display="flex" justifyContent="center" spacing={3} alignItems={'center'} pb={3}>
            {buttons.map((button, index) => (
              <Grid2 size={5} key={index}>
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
      </Grid2>
    </>
  )
}

export default Project
