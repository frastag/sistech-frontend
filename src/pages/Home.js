import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCard from "../components/CustomCard";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { Typography, ThemeProvider } from "@mui/material";
import CustomCardImage from "../components/CustomCardImage";
import theme from "../utils/constants"

const dividerStyle = {
    py: 0,
    width: '100%',
    maxWidth: 1,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

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

function HomeTitle() {
    return (
        <React.Fragment>
            <Box
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    width: 1,
                    minHeight: 520,
                    bgcolor: '#1E3A8A',
                    textAlign: 'center',
                }}>
                <Grid container alignItems='center' justifyContent='center'>
                    <Grid item xs={12} md={6} sx={{ paddingTop: 5 }}>
                        <Box sx={boxHeaderStyle}><Typography variant="h1">Welcome!</Typography></Box>
                        <Box sx={boxContentStyle}><Typography variant="h2">This is the place for YOUR rebirth and change… but it depends on YOU.</Typography></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe
                            height="365"
                            src="https://www.youtube.com/embed/vMauMq4CEkA"
                            title="Blue Butterfly Welcome"
                            frameborder="0"
                            allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture; 
                                web-share" 
                            allowfullscreen>
                        </iframe>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>

    );
}

function Home() {
    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth={false}>
            <Header></Header>
            <HomeTitle></HomeTitle>
            <Box sx={{ my: 4 }}>
                <Grid container alignItems='center' justifyContent='center'>
                   
                    <Grid item xs={8} sx={{ paddingTop: 5 }}>
                        <Box sx={boxHeaderStyle}><Typography variant='sectionTitle'>What can you do for yourself? Use YOUR wings to find the courage to fly.</Typography></Box>
                        <Box sx={boxContentStyle}>
                            <Typography variant='sectionContent'>
                                Just as a beautiful butterfly emerges from a caterpillar, a symbol of positive transformation, so from fragility comes antifragility, rebirth, and resilience.<br></br>
                                Challenge yourself! Discover all the resources, talent, and potential within you for your self-fulfillment.<br></br>
                                Become the protagonist of your change, your story, and the future you envision!
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ minWidth: 275 }}>
                        <Grid container spacing={2} sx={{
                            paddingTop: 5
                        }}>
                            <Grid item xs={3}>
                                <CustomCardImage imageUrl="/static/images/group_of_people.png"></CustomCardImage>
                            </Grid>
                            <Grid item xs={3}>
                                <CustomCardImage imageUrl="/static/images/woman_photo.png"></CustomCardImage>
                            </Grid>
                            <Grid item xs={3}>
                                <CustomCardImage imageUrl="/static/images/women_degree.png"></CustomCardImage>
                            </Grid>
                            <Grid item xs={3}>
                                <CustomCardImage imageUrl="/static/images/women_smile.png"></CustomCardImage>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{
                        textAlign: 'center',
                        paddingTop: 5,
                        paddingBottom: 5
                    }}>
                        <Button variant="outlined">Learn More</Button>
                    </Grid>

                    <Grid item xs={4}>
                        <Box component={'img'} sx={{
                            width: 1,
                            textAlign: 'center'
                             }}
                             src='/static/images/image_container.png'
                             >
                               
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{ paddingTop: 10 }}>
                        <Box sx={boxHeaderStyle}>
                            <Typography  variant="sectionTitle">"Your rights on five fingers of a hand".<br /><br /></Typography>
                            <Typography  variant="sectionContent">If you do not claim YOUR rights, no one will.<br /><br /></Typography>
                            <Typography  variant="sectionSubTitle">Did you know?</Typography>
                        </Box>
                    </Grid>

                    <Grid container spacing={2} sx={{ paddingBottom: 5, paddingTop: 5}}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}><CustomCard content="You have the right to open a bank account"></CustomCard></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}> <CustomCard content="You have the right to access microcredit"></CustomCard></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}>  <CustomCard content="You have the right to a residence permit in a short time"></CustomCard></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}>  <CustomCard content="You have the right to marry in the host country"></CustomCard></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}>  <CustomCard content="You have the right to education"></CustomCard></Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>


                    <List sx={dividerStyle}>
                        <Divider component="li" />
                    </List>


                    <Grid item xs={12} sx={{
                        textAlign: 'center',
                        paddingTop: 5,
                        paddingBottom: 5
                    }}>
                        <Box sx={boxHeaderStyle}><Typography variant="sectionTitle">Join Us</Typography></Box>
                        <Box sx={boxContentStyle}><Typography variant="sectionContent">Brief text explaining how people can contribute through donations (5perMille) or by becoming volunteers.</Typography></Box>
                        <Box sx={{
                            width: 1,
                            textAlign: 'center',
                            fontSize: 18,
                            paddingTop: 5
                        }}><Button variant="outlined">Learn More</Button></Box>
                    </Grid>

                    <List sx={dividerStyle}>
                        <Divider component="li" />
                    </List>

                    <Grid item xs={12} sx={{
                        textAlign: 'center',
                        paddingTop: 5,
                        paddingBottom: 5
                    }}>
                        <Box sx={boxHeaderStyle}><Typography variant="sectionTitle">Become a Partner</Typography></Box>
                        <Box sx={boxContentStyle}><Typography variant="sectionContent">Sei una azienda...breve test che spiega come le persone possono contribuire trramite donazioni (5perMille) o diventando volontari</Typography></Box>
                        <Box sx={boxContentStyle}><Button variant="outlined">Learn More</Button></Box>
                    </Grid>

                    <List sx={dividerStyle}>
                        <Divider component="li" />
                    </List>
                </Grid>
            </Box>

            <Footer />
        </Container>
        </ThemeProvider>
    );
}

export default Home;