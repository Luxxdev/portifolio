import { useTranslation } from 'react-i18next'
import br from '../../assets/images/placeholder.png'
import us from '../../assets/images/placeholder.png'
import { styled, Typography } from '@mui/material'
import StyledButton from '../StyledButton/StyledButton'
const languageOptions = [
  {
    name: 'Portugues',
    value: 'ptbr',
    flag: 'br',
  },
  {
    name: 'English',
    value: 'en',
    flag: 'en',
  },
]
export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const LanguageSwitcher = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
      position: 'relative',
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
  }))
  //   const StyledImg = styled('img')(({ theme }) => ({
  //     [theme.breakpoints.up('xs')]: {
  //       height: '2em',
  //     },
  //     [theme.breakpoints.up('md')]: {
  //       height: '2em',
  //     },
  //   }))

  return (
    <LanguageSwitcher>
      <div className="language-switcher">
        {languageOptions.map((languageOptions) => (
          <StyledButton
            key={languageOptions.value}
            onClick={() => {
              i18n.changeLanguage(languageOptions.value)
            }}
          >
            <Typography height={i18n.language === languageOptions.value ? '2.5em' : '2em'}>{i18n.language === languageOptions.value ? null : languageOptions.value}</Typography>
            {/* <StyledImg
              src={languageOptions.flag}
              style={{
                height: i18n.language === languageOptions.value ? '2.5em' : '2em',
              }}
            /> */}
          </StyledButton>
        ))}
      </div>
    </LanguageSwitcher>
  )
}
