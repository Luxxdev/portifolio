import { Grid2, styled, Typography, useMediaQuery } from '@mui/material'
import StyledButton from '../StyledButton/StyledButton'
import TechTag from '../TechTag/TechTag'

interface ProjectProps {
  name?: string
  image?: string
  site?: boolean
  description?: string
  buttons?: ButtonProps[]
  techs?: string[]
  imgFirst?: boolean
}

interface ButtonProps {
  label?: string
  link: string
}

const Project: React.FC<ProjectProps> = ({ name, image, description, buttons = [], techs, site, imgFirst }) => {
  const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))

  name = name ? name : 'Nome'
  image = image ? image : ''
  site = site ? site : false
  description = description ? description : 'Descrição do projeto'

  const StyledProject = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: image ? '100%' : '100%',
    height: image ? '100%' : '100%',
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    border: `1px ${theme.palette.secondary.contrastText} solid`,
    scrollBehavior: 'smooth',
    scrollbarColor: `${theme.palette.primary.dark} ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',

    }

  }))

  const ImageContainer = styled('div')(({ theme }) => ({
    borderRight: `1px ${theme.palette.secondary.contrastText} solid`,
    width: '100%',
    height: '100%',
    overflowY: site ? 'auto' : 'hidden',
    aspectRatio: '1/1',
    borderTopLeftRadius: '8px',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    '& > img': {
      width: '100%',
      aspectRatio: site ? 'none' : '1/1',
      filter: 'grayscale(50%)',
    }
  }))

  const TextContainer = styled('div')(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

  }))

  return (
    <>
      <Grid2 size={image ? 12 : { xs: 12, lg: 6 }} >
        <StyledProject>
          {(image != '' && (imgFirst || !bigScreen)) &&
            <Grid2 size={12}>
              <ImageContainer >
                <img src={image} loading='lazy' />
              </ImageContainer>
            </Grid2>
          }
          <Grid2 size={12} >
            <TextContainer>
              <Grid2>
                <Typography color="primary.contrastText" variant="h3" textAlign="center" mt={3} pb={1} >
                  {name}
                </Typography>

                <Grid2 container display="flex" justifyContent="center" margin={'2vh 3vh'} mt={0} padding={1} rowGap={1} columnGap={0.5} alignItems={'center'} borderTop={1} borderBottom={1} borderColor={"secondary.contrastText"}>
                  {techs?.map(tech => (
                    <Grid2 style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 1fr))' }}>
                      <TechTag children={tech} />
                    </Grid2>
                  ))}
                </Grid2>
              </Grid2>

              <Typography color="primary.contrastText" textAlign={'justify'} maxHeight={'30vh'} overflow={'auto'} alignContent={'center'} padding={'5vh 2vh'} margin={'0vh 3vh'} >
                {description}
              </Typography>

              <Grid2 container size='auto' display="flex" justifyContent="center" spacing={3} mb={'3vh'} mt={3}>
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
            </TextContainer>

          </Grid2>
          {(image != '' && (!imgFirst && bigScreen)) &&
            <Grid2 size={12}>
              <ImageContainer >
                <img src={image} loading='lazy' />
              </ImageContainer>
            </Grid2>
          }
        </StyledProject >
      </Grid2>
    </>
  )
}

export default Project
