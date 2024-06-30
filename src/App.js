import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Header from './Header';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { ImageOutlined } from '@mui/icons-material';


function CustomCard({ content, action }) {
  return (
    <React.Fragment>
      <Card variant="outlined" align='center'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" align='center' gutterBottom>
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container alignItems='center' justifyContent='center'>
            <Grid item><Button size="small">{action}</Button></Grid>
          </Grid>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

function CustomBox({ content }) {
  return (
    <React.Fragment>
      <Grid item xs={2} sx={{
        textAlign: 'center',
        paddingTop: 5
      }}>
        <Box
          height={200}
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          {content}
        </Box>
      </Grid>
    </React.Fragment>
  )
}

function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Blue Batterfly
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function OurMission() {
  return (
    <Box
      sx={{
        width: 1,
        height: 150,
        bgcolor: '#5b5b5b',
        textAlign: 'center',
      }}>
      <Box
        sx={{
          width: 1,
          bgcolor: '#5b5b5b',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          color: '#ffffff'
        }}
      >Our Mission</Box>
      <Box
        sx={{
          width: 1,
          bgcolor: 'gray',
          textAlign: 'center',
          fontSize: 18,
          color: 'black'
        }}
      >Non-Profit Organization</Box>
    </Box>
  );
}

export default function App() {
  return (
    <Container maxWidth={false}>
      <Header></Header>
      <OurMission></OurMission>
      <Box sx={{ my: 4 }}>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={6}>
            <Box sx={{
              width: 1,
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#1976D2'
            }}>Benvenuta!</Box>
            <Box sx={{
              width: 1,
              textAlign: 'center',
              fontSize: 18,
              paddingTop: 5
            }}>Questo è il luogo della TUA rinascita...ma dipende da TE</Box>
            <Box sx={{
              width: 1,
              textAlign: 'center',
              fontSize: 18,
              paddingTop: 5
            }}><Button variant="outlined">Learn More</Button></Box>
          </Grid>
          <Grid item xs={6}>
            <iframe>https://youtube.com/shorts/vMauMq4CEkA?si=sFh-AhcDbXKWds7w</iframe>
          </Grid>
          <Grid item xs={8} sx={{ paddingTop: 10 }}><Box sx={{
            width: 1,
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#1976D2'
          }}>Cosa puoi fare per te stessa? Usa le TUE ali pre trovare il coraggio di volare</Box>
            <Box sx={{
              width: 1,
              textAlign: 'center',
              fontSize: 18,
              paddingTop: 5
            }}>Come dal bruco spicca il volo una farfalla bellissima, simbolo di trasformazione positiva, così dalla fragilità arriva all'antifragilità, alla rinascita e alla resilienza. <br></br>
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
          <Grid item xs={8} sx={{ paddingTop: 10 }}><Box sx={{
            width: 1,
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#1976D2'
          }}>"I tuoi diritti su cinque dita di una mano". Se tu stessa non rivendichi i TUOI diritti nessuno lo farà
            <br /><br /><br />Lo sai che?</Box>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <CustomBox content="Hai diritto ad attivare un conto corrente bancario Normativa XYZ"></CustomBox>
            <CustomBox content="Hai diritto ad accedere al microcredito"></CustomBox>
            <CustomBox content="Hai diritto al permesso di soggiorno in tempi brevi"></CustomBox>
            <CustomBox content="Hai diritto a spostarti in paese ospitante"></CustomBox>
            <CustomBox content="Hai diritto alla formazione"></CustomBox>
            <Grid item xs={1}></Grid>
          </Grid>


        </Grid>
      </Box>

      <Footer />
    </Container>
  );
}