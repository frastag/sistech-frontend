import React from "react";
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Typography, ThemeProvider } from "@mui/material";
import theme from "../utils/constants"
import stayUpdated from "../static/images/stay_updated.png";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { SvgIcon } from '@mui/material';
import { ReactComponent as BlueButterfly } from "../static/images/logofooter.svg";


const dividerStyle = {
    py: 0,
    width: '100%',
    maxWidth: 30,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: '#1E3A8A',
};

function Footer() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
            <Box
                        sx={{
                            backgroundImage:`url(${stayUpdated})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            minHeight: "292px",
                            backgroundPosition: 'center'
                        }}
                    >
                    </Box>
                    <br></br>
                   
                    <List sx={dividerStyle}>
                        <Divider component="li" variant="middle"/>
                    </List>
                       
                    <br></br>
                <Box
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        width: 1,
                        height: 100,
                        bgcolor: '#1F2937',
                        textAlign: 'center'
                    }}>
                    <Grid container alignItems='center' justifyContent='center'>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={1}><Typography variant="h3">FOLLOW US:</Typography></Grid>
                        <Grid item xs={1}><Typography variant="h3">FACEBOOK</Typography></Grid>
                        <Grid item xs={1}><Typography variant="h3">TWITTER</Typography></Grid>
                        <Grid item xs={1}><Typography variant="h3">INSTAGRAM</Typography></Grid>
                        <Grid item xs={1}><Typography variant="h3">LINKEDIN</Typography></Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        width: 1,
                        height: 50,
                        textAlign: 'center'
                    }}><SvgIcon component={BlueButterfly} alignItems='center' justifyContent='center' sx={{ color: '#F59E0B', fill: 'none', border: 'transparent', display: "inline-block", mr: 1, strokeWidth: 0, marginRight:0 }} inheritViewBox /></Box>

                
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Footer;