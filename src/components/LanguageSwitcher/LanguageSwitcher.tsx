import { useTranslation } from 'react-i18next'
// import br from '../../assets/images/placeholder.png'
// import us from '../../assets/images/placeholder.png'
import { styled, Typography } from '@mui/material'

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()

  const LanguageSwitcher = styled('div')(({ }) => ({
    // [theme.breakpoints.up('xs')]: {
    // position: 'relative',
    // },
    // [theme.breakpoints.up('md')]: {
    //   position: 'absolute',
    //   top: '5px',
    //   right: '5px',
    // },
  }))
  //   const StyledImg = styled('img')(({  }) => ({
  //     [theme.breakpoints.up('xs')]: {
  //       height: '2em',
  //     },
  //     [theme.breakpoints.up('md')]: {
  //       height: '2em',
  //     },
  //   }))

  const StyledButton = styled('button')(({ theme }) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '3px',
    minWidth: '5vh',
    minHeight: '5vh',
    color: theme.palette.primary.contrastText,
    display: 'flex',
    aspectRatio: 1 / 1,
    position: theme.breakpoints.up('md') ? 'absolute' : 'relative',
    top: '1vh',
    left: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.secondary.light,
    },
  }))

  return (
    <LanguageSwitcher>
      <StyledButton
        onClick={() => {
          i18n.changeLanguage(t('oppositeLanguage'))
        }}
      >
        <Typography>{t('oppositeLanguage').toUpperCase()}</Typography>
      </StyledButton>
    </LanguageSwitcher>
  )
}
