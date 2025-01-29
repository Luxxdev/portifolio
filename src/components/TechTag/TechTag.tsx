import { styled, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const TechTag: FC<PropsWithChildren> = ({ children }) => {
    const TechTag = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        border: `3px solid ${theme.palette.secondary.contrastText}`,
        borderRadius: '10px',
        padding: '8px',
        color: theme.palette.primary.contrastText,
    }))

    return (
        <>
            <TechTag >
                <Typography variant='body2' letterSpacing={2.5} fontWeight={'light'}>{children}</Typography>
            </TechTag>
        </>
    )
}

export default TechTag
