import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import { ReactComponent as BlueButterfly } from "../static/images/icon.svg";

const pages = [{ label: 'Home', rootingTo: '/' },
{ label: 'What We Offer', rootingTo: '/offer' }, { label: 'Partnership', rootingTo: '/partnership' }];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color='transparent'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SvgIcon component={BlueButterfly} sx={{ color: '#F59E0B', transform: 'rotate(-13.97deg)', width: 44.892, height: 38.634, fill: 'none', border: 'transparent', display: { xs: 'none', md: 'flex' }, mr: 1, strokeWidth: 0, marginRight:0 }} inheritViewBox />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Montserrat',
              fontWeight: 900,
              fontSize: 26.426,
              color: '#F59E0B',
              textDecoration: 'none',
            }}
          >
            lue Butterflies
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to={page.rootingTo}> <Typography textAlign="center">
                    {page.label}
                  </Typography></Link>
                </MenuItem>
              ))}


            </Menu>
          </Box>

          <SvgIcon component={BlueButterfly} sx={{ color: '#F59E0B', transform: 'rotate(-13.97deg)', width: 44.892, height: 38.634, fill: 'none', border: 'transparent', display: { xs: 'flex', md: 'none' }, mr: 1, strokeWidth: 0 , marginRight:0 }} inheritViewBox />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Montserrat',
              fontWeight: 900,
              fontSize: 26.426,
              color: '#F59E0B',
              textDecoration: 'none',
            }}
          >lue Butterflies
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Link to={page.rootingTo}> <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.label}
              </Button></Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Link to="/about"><Button variant="contained">Contact us</Button></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;