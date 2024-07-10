import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { ImageOutlined } from '@mui/icons-material';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCard from "../components/CustomCard";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';


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
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1976D2'
}

const boxContentStyle = {
    width: 1,
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 5
}

function OurMission() {
    return (
      <Box
      sx={{
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
  
        width:1,
        height: 150,
        bgcolor: '#036fc1',
        textAlign: 'center',
      }}>
        <Box
          sx={{
            width:1,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#ffffff'
          }}
        >Our Mission</Box>
        <Box
          sx={{
            width: 1,
            textAlign: 'center',
            fontSize: 18,
            color: 'black',
            paddingTop: 3
          }} 
  
        
        >
          
          <Grid container>
    <Grid item xs={5}>
    </Grid>
    <Grid item xs={2} sx= {{
      bgcolor: '#8cbae8',
    }}>Non-Profit Organization
    </Grid>
    <Grid item xs={5}>
    </Grid>
  </Grid>
      </Box>
         <Box
          sx={{
            width:1,
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            paddingTop: 3
          }}
        >Join us in making a positive impact</Box>
        </Box>
    );
  }

function Home() {
    return (
        <Container maxWidth={false}>
            <Header></Header>
            <OurMission></OurMission>
            <Box sx={{ my: 4 }}>
                <Grid container alignItems='center' justifyContent='center'>
                    <Grid item xs={6} sx={{paddingTop:5}}>
                        <Box sx={boxHeaderStyle}>Benvenuta!</Box>
                        <Box sx={boxContentStyle}>Questo è il luogo della TUA rinascita...ma dipende da TE</Box>
                        <Box sx={boxContentStyle}><Button variant="outlined">Learn More</Button></Box>
                    </Grid>
                    <Grid item xs={6}>
                    <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/vMauMq4CEkA" 
  title="Blue Butterfly Welcome" 
  frameborder="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={8} sx={{ paddingTop: 5 }}><Box sx={boxHeaderStyle}>Cosa puoi fare per te stessa? Usa le TUE ali pre trovare il coraggio di volare</Box>
                        <Box sx={boxContentStyle}>Come dal bruco spicca il volo una farfalla bellissima, simbolo di trasformazione positiva, così dalla fragilità arriva all'antifragilità, alla rinascita e alla resilienza. <br></br>
                            Sfida te stessa! Scopri tutte le risorse, il talento e il potenziale che hai dentro di te per la tua autorealizzazione. <br></br>
                            Diventa protagonista del tuo cambiamento, della tua storia del futuro che ti immagini!</Box>
                    </Grid>
                    <Grid item xs={4}><ImageOutlined sx={{ fontSize: 350 }} /></Grid>
                    <Grid item xs={12} sx={{ minWidth: 275 }}>
                        <Grid container spacing={2} sx={{
                            paddingTop: 5
                        }}>
                            <Grid item xs={3}>
                                <CustomCard content="Autoconoscenza, Autorealizzazione, AutoValorizazione" action="Esprimi il tuo potenziale"></CustomCard>
                            </Grid>
                            <Grid item xs={3}>
                                <CustomCard content="Club della sorellanza" action="Le donne vicino a te"></CustomCard>
                            </Grid>
                            <Grid item xs={3}>
                                <CustomCard content="Autoimprenditorialità e lavoro" action="Il tuo talento"></CustomCard>
                            </Grid>
                            <Grid item xs={3}>
                                <CustomCard content="Formazione" action="Costruisci il tuo futuro"></CustomCard>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{
                        textAlign: 'center',
                        paddingTop: 5
                    }}>
                        <Button variant="outlined">Learn More</Button>
                    </Grid>

                    <Grid item xs={4}><Box sx={{
                        width: 1,
                        textAlign: 'center'
                    }}><ImageOutlined sx={{ fontSize: 350 }} /></Box></Grid>
                    <Grid item xs={8} sx={{ paddingTop: 10 }}><Box sx={boxHeaderStyle}>"I tuoi diritti su cinque dita di una mano". Se tu stessa non rivendichi i TUOI diritti nessuno lo farà
                        <br /><br /><br />Lo sai che?</Box>
                    </Grid>

                    <Grid container spacing={2} sx={{ paddingBottom: 5 }}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}><CustomCard content="Hai diritto ad attivare un conto corrente bancario Normativa XYZ"></CustomCard></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}> <CustomCard content="Hai diritto ad accedere al microcredito"></CustomCard></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}>  <CustomCard content="Hai diritto al permesso di soggiorno in tempi brevi"></CustomCard></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}>  <CustomCard content="Hai diritto a spostarti in paese ospitante"></CustomCard></Grid>
                        <Grid item xs={2} sx={{
                            textAlign: 'center',
                            paddingTop: 5
                        }}>  <CustomCard content="Hai diritto alla formazione"></CustomCard></Grid>
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
                        <Box sx={boxHeaderStyle}>Unisciti a Noi</Box>
                        <Box sx={boxContentStyle}>Breeve testo che spiega come le persone possono contribuire tramite donazione (5perMille) o diventando volontari. Per donare o diventare volontari scrivi a mail@mail.com</Box>
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
                        <Box sx={boxHeaderStyle}>Become a Partner</Box>
                        <Box sx={boxContentStyle}>Sei una azienda...breve test che spiega come le persone possono contribuire trramite donazioni (5perMille) o diventando volontari</Box>
                        <Box sx={boxContentStyle}><Button variant="outlined">Learn More</Button></Box>
                    </Grid>

                    <List sx={dividerStyle}>
                        <Divider component="li" />
                    </List>
                </Grid>
            </Box>

            <Footer/>
        </Container>
    );
}

export default Home;