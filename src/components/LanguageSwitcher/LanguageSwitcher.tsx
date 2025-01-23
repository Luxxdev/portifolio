import { useTranslation } from 'react-i18next'
// import br from '../../assets/images/placeholder.png'
// import us from '../../assets/images/placeholder.png'
import { styled, Typography } from '@mui/material'

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()

  const StyledButton = styled('button')(({ theme }) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '3px',
    height: '5vh',
    color: theme.palette.primary.contrastText,
    display: 'flex',
    aspectRatio: 1 / 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
      backgroundColor: theme.palette.secondary.light,
    },
  }))

  return (
    <div>
      <StyledButton
        onClick={() => {
          i18n.changeLanguage(t('oppositeLanguage'))
        }}
      >
        <Typography>{t('oppositeLanguage').toUpperCase()}</Typography>
      </StyledButton>
    </div>
  )
}
