import { styled } from '@mui/material'
import { ReactNode } from 'react'

interface StyledButtonProps {
  children: ReactNode
  onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  const StyledButton = styled('button')(({ theme }) => ({

    backgroundColor: 'transparent',
    borderRadius: '5px',
    padding: '10px 15px',
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    color: theme.palette.primary.contrastText,
    border: `2px solid ${theme.palette.primary.contrastText}`,
    '&:hover': {
      color: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
      // backgroundColor: theme.palette.secondary.dark,
      cursor: 'pointer',
    },
  }))

  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  )
}

export default StyledButton
