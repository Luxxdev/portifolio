import { styled } from '@mui/material'
import theme from '../../theme'
import { ReactNode } from 'react'
interface SkillsButtonProps {
  children: ReactNode
}
const SkillsButton: React.FC<SkillsButtonProps> = ({ children }) => {
  const SkillsButton = styled('button')(() => ({
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '3px',
    padding: '15px 5px',
    margin: '20px',
    width: '100%',
    color: theme.palette.primary.contrastText,
    display: 'inline-flex',
    alignItens: 'center',
    justifyContent: 'center',
    gap: '10px',
  }))
  return (
    <>
      <SkillsButton disabled={true}>{children}</SkillsButton>
    </>
  )
}

export default SkillsButton
