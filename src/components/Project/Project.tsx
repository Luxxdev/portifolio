import { Grid2, styled, Typography } from '@mui/material'
import StyledButton from '../StyledButton/StyledButton'
import placeHolder from '../../assets/images/placeHolder.png'
import TechTag from '../TechTag/TechTag'

interface ProjectProps {
  name?: string
  image?: string
  site?: boolean
  description?: string
  buttons?: ButtonProps[]
  techs?: string[]
}

interface ButtonProps {
  label?: string
  link: string
}

const Project: React.FC<ProjectProps> = ({ name, image, description, buttons = [], techs, site }) => {
  name = name ? name : 'Nome'
  image = image ? image : placeHolder
  site = site ? site : false
  description = description ? description : 'Descrição do projeto'

  const StyledProject = styled('div')(({ theme }) => ({
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    width: '75vw',
    height: '100%',
    border: `1px ${theme.palette.secondary.contrastText} solid`,
    scrollBehavior: 'smooth',
    scrollbarColor: `${theme.palette.primary.dark} ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      width: '35vw',
    }
  }))

  const ImageContainer = styled('div')(({ theme }) => ({
    borderBottom: `1px ${theme.palette.secondary.contrastText} solid`,
    width: '100%',
    overflowY: site ? 'auto' : 'hidden',
    aspectRatio: '1/1',
    borderTopLeftRadius: '8px',
    '& > img': {
      width: '100%',
      aspectRatio: site ? 'none' : '1/1',
      filter: 'grayscale(50%)',

    }
  }))

  return (
    <>
      <StyledProject>
        <ImageContainer >
          <img src={image} loading='lazy' />
        </ImageContainer>

        <Typography color="primary.contrastText" variant="h3" textAlign="center" mt={'2vh'}>
          {name}
        </Typography>

        <Grid2 container display="flex" justifyContent="center" margin={'4vh 3vh'} padding={2} letterSpacing={1} rowGap={1} columnGap={0.5} alignItems={'center'} borderTop={1} borderBottom={1} borderColor={"secondary.contrastText"}>
          {techs?.map(tech => (
            <Grid2 style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 1fr))' }}>
              <TechTag children={tech} />
            </Grid2>
          ))}

        </Grid2>

        <Grid2 display={'flex'} justifyContent={'center'} height={'30vh'} margin={'3vh 3vh'} alignItems={'center'}>
          <Typography color="primary.contrastText" textAlign="center" maxHeight={'30vh'} overflow={'auto'} alignContent={'center'} padding={4} style={{ backgroundColor: 'primary.main' }}>
            {description}
          </Typography>
        </Grid2>

        <Grid2 container size='auto' display="flex" justifyContent="center" spacing={3} mb={'3vh'}>
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
    </>
  )
}

export default Project
