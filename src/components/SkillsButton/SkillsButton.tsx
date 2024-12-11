import { styled } from '@mui/material'
import theme from '../../theme'
import { ReactNode } from 'react'
interface SkillsButton {
  children: ReactNode
}
const StyledButton: React.FC<SkillsButton> = ({ children }) => {
  const StyledButton = styled('button')(() => ({
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary}`,
    borderRadius: '3px',
    padding: '15px 5px',
    margin: '20px',
    width: '100%',
    color: theme.palette.primary.main,
    display: 'inline-flex',
    alignItens: 'center',
    justifyContent: 'center',
    gap: '10px',
  }))
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  )
}

export default StyledButton
