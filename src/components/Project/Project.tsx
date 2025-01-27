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
    width: '75vw',
    height: '100%',
    border: `2px ${theme.palette.primary.contrastText} solid`,
    scrollBehavior: 'smooth',
    scrollbarColor: `${theme.palette.primary.main} ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      width: '35vw',
    }
  }))

  const ImageContainer = styled('div')(({ theme }) => ({
    borderBottom: `1px ${theme.palette.primary.contrastText} solid`,
    width: '100%',
    overflowY: site ? 'auto' : 'hidden',
    aspectRatio: '1/1',
    '& > img': {
      width: '100%',
      aspectRatio: site ? 'none' : '1/1',
      filter: 'grayscale(50%)',
    }
  }))

  return (
    <>
      <Grid2 display={'flex'} alignItems={'space-around'}>
        <StyledProject>
          <ImageContainer >
            <img src={image} loading='lazy' />
          </ImageContainer>

          <Typography color="primary.contrastText" variant="h3" fontWeight={'light'} textAlign="center" mt={'2vh'}>
            {name}
          </Typography>

          <Grid2 container display="flex" justifyContent="center" pt={2} letterSpacing={1} rowGap={1} columnGap={0.5} alignItems={'center'} >
            {techs?.map(tech => (
              <Grid2 style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 1fr))' }}>
                <TechTag children={tech} />
              </Grid2>
            ))}

          </Grid2>

          <Grid2 display={'flex'} justifyContent={'center'}>
            <Typography color="primary.contrastText" textAlign="center" height={'30vh'} overflow={'auto'} width={'fit-content'} borderTop={2} borderBottom={2} borderColor={"primary.contrastText"} padding={4} alignContent={'center'} margin={'3vh 3vh'} >
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
      </Grid2 >
    </>
  )
}

export default Project
