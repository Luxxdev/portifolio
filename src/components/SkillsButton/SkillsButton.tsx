import { styled } from '@mui/material'
import theme from '../../theme'
import { ReactNode } from 'react'
interface SkillsButtonProps {
  children: ReactNode
  fixedSizeRatio?: boolean
}
const SkillsButton: React.FC<SkillsButtonProps> = ({ children, fixedSizeRatio }) => {
  const SkillsButton = styled('div')(() => ({
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '3px',
    padding: '15px 15px',
    width: '100%',
    margin: fixedSizeRatio ? '0px' : '20px',
    aspectRatio: fixedSizeRatio ? 1 / 1 : 'auto',
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  }))

  return (
    <>
      <SkillsButton>{children}</SkillsButton>
    </>
  )
}

export default SkillsButton
