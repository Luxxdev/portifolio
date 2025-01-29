import { styled } from '@mui/material'
import { ReactNode } from 'react'
interface SkillsButtonProps {
  children: ReactNode
  fixedSizeRatio?: boolean

}
const SkillsTag: React.FC<SkillsButtonProps> = ({ children, fixedSizeRatio }) => {
  const SkillsTag = styled('div')(({ theme }) => ({
    backgroundColor: 'transparent',
    border: `2px solid ${fixedSizeRatio ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText}`,
    borderRadius: '7px',
    padding: '15px 15px',
    minWidth: 'fit-content',
    width: fixedSizeRatio ? 'fit-content' : '100%',
    // margin: fixedSizeRatio ? '0px' : '20px',
    aspectRatio: fixedSizeRatio ? 1 / 1 : 'auto',
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  return (
    <>
      <SkillsTag>{children}</SkillsTag>
    </>
  )
}

export default SkillsTag
