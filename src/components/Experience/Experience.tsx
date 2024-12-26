import { styled, Typography } from "@mui/material"
import React from "react"

interface expProps {
    name?: string
    date?: string
    description?: string
}

const Experience: React.FC<expProps> = ({ name, date, description }) => {
    const StyledExperience = styled('div')(({ theme }) => ({
        minHeight: '100%',
        maxHeight: '60vh',
        overflow: 'auto',
        padding: '20px',
        backgroundColor: theme.palette.primary.main,
    }))
    return (
        <>
            <StyledExperience>
                <Typography color="primary.contrastText" variant="h4" fontWeight={'lighter'} textAlign="left" pb={1}>
                    {name}
                </Typography>
                <Typography color="primary.contrastText" fontWeight={'lighter'} pb={5}>
                    {date}
                </Typography>
                <Typography color="primary.contrastText" fontWeight={'lighter'} pb={1}>
                    {description}
                </Typography>
            </StyledExperience>
        </>
    )
}

export default Experience