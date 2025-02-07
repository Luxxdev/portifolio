import { Grid2, styled, Typography } from "@mui/material"
import React from "react"

interface expProps {
    name?: string
    date?: string
    description?: string
}

const Experience: React.FC<expProps> = ({ name, date, description }) => {
    const StyledExperience = styled('div')(({ theme }) => ({
        minHeight: '100%',
        padding: '20px',
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.secondary.contrastText}`,
    }))
    return (
        <>
            <Grid2 size={{ xs: 12, md: 12 }} justifyContent={'center'} margin={2}  >
                <StyledExperience>
                    <Typography color="primary.contrastText" variant="h4" fontWeight={'lighter'} textAlign="left" pb={1}>
                        {name}
                    </Typography>
                    <Typography color="primary.contrastText" fontWeight={'lighter'} pb={5}>
                        {date}
                    </Typography>
                    <Typography color="primary.contrastText" fontWeight={'lighter'} pb={1} textAlign='justify'>
                        {description}
                    </Typography>
                </StyledExperience>
            </Grid2>
        </>
    )
}

export default Experience