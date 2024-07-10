import { Typography, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();
theme.typography.h1 = {
    fontFamily: 'SF Pro',
    fontSize: 48,
    fontWeight: 700,
    color: '#F3F4F6'
 }
 theme.typography.h2 = {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 400,
    color: '#F3F4F6'
 }
 theme.typography.sectionTitle = {
    fontFamily: 'SF Pro',
    fontSize: 48,
    fontWeight: 700,
    color: '#1E3A8A'
 }
 theme.typography.sectionContent = {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 400,
    color: '#6B7280'
 }
 theme.typography.sectionSubTitle = {
    fontFamily: 'SF Pro',
    fontSize: 48,
    fontWeight: 700,
    color: '#6B7280'
 }

 export default theme;