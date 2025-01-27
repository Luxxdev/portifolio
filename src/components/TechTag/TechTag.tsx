import { styled, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const TechTag: FC<PropsWithChildren> = ({ children }) => {
    const TechTag = styled('div')(({ theme }) => ({
        backgroundColor: 'transparent',
        border: `3px solid ${theme.palette.primary.light}`,
        borderRadius: '10px',
        padding: '5px',
        color: theme.palette.primary.contrastText,
    }))

    return (
        <>
            <TechTag >
                <Typography variant='body2' letterSpacing={2} fontWeight={'light'}>{children}</Typography>
            </TechTag>
        </>
    )
}

export default TechTag
