import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
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
    <Box sx={{ flexGrow: 1 }}>
      <Header></Header>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CircleIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pagina 1
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pagina 2
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pagina 3
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function App() {
  return (
    <Container maxWidth={false}>
     
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