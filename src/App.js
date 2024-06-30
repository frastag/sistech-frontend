import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { ImageOutlined } from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
        </Routes>
     </>
  );
 };

 export default App;
 
 