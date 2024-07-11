import React from "react";
import { Box } from '@mui/system';
import { Typography, ThemeProvider } from "@mui/material";
import theme from "../utils/constants"
import Grid from '@mui/material/Grid';
import '../static/css/style.css';

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

function BoxImageLeft({ title, content, image }) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Grid item xs={3} sx={{ paddingTop: 5 }}>
                    <Box component={'img'} sx={{
                       maxWidth: 400
                    }}
                        justifyContent={"flex-end"}
                        src={image}
                    >
                    </Box>
                </Grid>
                <Grid item xs={9} sx={{ paddingTop: 5 }}>
                    <Box sx={boxHeaderStyle}><Typography variant="sectionTitle">{title}</Typography></Box>
                    <Box sx={boxContentStyle}>
                        <Typography variant="sectionContent"><div className='new-line'>
                            {content}</div>
                        </Typography>
                    </Box>
                </Grid>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default BoxImageLeft;