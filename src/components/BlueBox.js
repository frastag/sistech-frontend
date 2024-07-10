import React from "react";
import { Box } from '@mui/system';
import { Typography, ThemeProvider } from "@mui/material";
import theme from "../utils/constants"

const boxHeaderStyle = {
    width: 1,
    textAlign: 'center'
}

const boxContentStyle = {
    width: 1,
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 5
}

function BlueBox({ content, additionalContent }) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        width: 1,
                        height: 351,
                        bgcolor: '#1E3A8A',
                        textAlign: 'center',
                    }}>
                    <Box sx={boxHeaderStyle}>
                        <Typography variant="h1">{content}</Typography>
                    </Box>
                    <Box sx={boxContentStyle}>
                        <Typography variant="h2">{additionalContent}</Typography>
                    </Box>
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default BlueBox;