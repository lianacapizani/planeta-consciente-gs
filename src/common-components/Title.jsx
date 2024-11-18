import React from 'react'
import { Typography } from '@mui/material'

export function Title ({sectionName}){
    return (
        <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{
            marginTop: "40px",
            marginBottom: "60px",
            color: "var(--title)",
            fontWeight: "bold",
        }}
      >
        {sectionName}
      </Typography>
    )
}
