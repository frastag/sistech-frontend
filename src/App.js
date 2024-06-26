import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import { Padding, WidthFull } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Header from './Header';
import { Box, ThemeProvider } from '@mui/system';



function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
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
      width:1,
      height: 150,
      bgcolor: '#5b5b5b',
      textAlign: 'center',
    }}>
      <Box
        sx={{
          width:1,
          bgcolor: '#5b5b5b',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          color: '#ffffff'
        }}
      >Our Mission</Box>
            <Box
        sx={{
          width:1,
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
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example
        </Typography>
        <Footer />
      </Box>
    </Container>
  );
}