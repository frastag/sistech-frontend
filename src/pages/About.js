import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { ImageOutlined } from '@mui/icons-material';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlueBox from "../components/BlueBox";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import QuizIcon from '@mui/icons-material/Quiz';


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

const faqs = [
    "Who can benefit from your services? Our services are available to all migrant and refugee women living in Italy. We welcome women of all ages, nationalities and cultural background", 
    "How can I access your services? You can access our services by contacting us via email, phone oir by filling out the contact form on the website. After the initial contact, we will arrange a meeting to assess your needs and create a personalized plan",
    "Are the services free? Many of our services are offered free of charge or at a nominal cost, thanks to the support of donations, sponsors and partnerships with non-profit organizations. Some specialized services may require a finantial contribution, but we always strive to ensure accessibility for everyone",
    "Do we offer legal support? Yes, we provide specialized legal advice on issues related to immigration, refugee rights, and other legal matters. Our team of lawyers is available for individual consultations and informal seminars",
    "What does the life coaching program include? Our life coaching program includes individual and group sessions focused on self-awareness, self-realization and self-valorization. We work on personal and professional goals, providing toolds and techniques to overcome obstacles and reach your potential",
"Can I partecipate in your events even if I am not a migrant or refugee? Our events are primarily intended for migrant and refugee women. However, we also organize communitiy events to promote interculturality and solidarity. Contact us to find out which events are open to the public",
"How can I become a volunteer or partner with your organization? We are always looking for volunteers and partners who share our mission. If you are interested in collaborating with us, visit the \"Partnership and Collaborations\" section on our website or contact us direclty",
"Where are your offices located? We offer services in various Italian cities, but the best way to reach out us is through digital channels (email/Whatsapp) or by phone."];

function About() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Container maxWidth={false}>
            <Header></Header>
            <BlueBox content={'Who We Are'} additionalContent={"Welcome to our website! We are a start-up dedicated to supporting migrant and refugee women in Italy. Our mission is to promote self-awareness, self-realization, and the well-being of the women we serve through a variety of services ranging from life coaching to personal development, legal advice to language and professional training."}></BlueBox>
            <Box sx={{ my: 4 }}>
                <Grid container alignItems='center' justifyContent='center'>
                    <Grid item xs={4}><ImageOutlined sx={{ fontSize: 350 }} /></Grid>
                    <Grid item xs={8} sx={{ paddingTop: 5 }}><Box sx={boxHeaderStyle}>Who We Are</Box>
                        <Box sx={boxContentStyle}>Welcome to our website! We are a start-up dedicated to supporting migrant and refugee women in Italy. Our Mission is to promote self-awareness, self-realization and the well-being of the women we serve through a variety of services ranging from life coaching to personal development, legal advice to language and professional training.</Box>
                    </Grid>

                    <Grid item xs={8} sx={{ paddingTop: 5 }}><Box sx={boxHeaderStyle}>Our Mission And Values</Box>
                        <Box sx={boxContentStyle}>
                            - Female Empowerment: we promote the process of change and rebirth for migrant and refugee women;<br/>
                            - Interculturality and Sisterhood: Through the Sisterhood club, we create local and virtual intercultural communities of and for migrant and refugee women;<br/>
                            - Respect: We recognize and value cultural, emotional and personal diversity;<br/>
                        </Box>
                    </Grid>
                    <Grid item xs={4}><ImageOutlined sx={{ fontSize: 350 }} /></Grid>

                    <Grid item xs={4}><ImageOutlined sx={{ fontSize: 350 }} /></Grid>
                    <Grid item xs={8} sx={{ paddingTop: 5 }}><Box sx={boxHeaderStyle}>Our Team</Box>
                        <Box sx={boxContentStyle}>Our team consists of experts in various fields, including psychologists, life coaches, lawyers, trainers, translators and cultural mediators. 
                        We work together in an integrated, interdisciplinary and personalized manner to help migrant and refugee women discover their resources, talents and express their hidden potential</Box>
                    </Grid>

                    <Grid item xs={8} sx={{ paddingTop: 5 }}><Box sx={boxHeaderStyle}>Discover Our Story...</Box>
                        <Box sx={boxContentStyle}>
                            Our organization was born from the passion of a group of refugee women, experts in various sectors, united by a sense of sisterhood and a desire to make a difference in the lives of migrant and refugee women. 
                            We believe that every woman has the right to live their dignity, security and opportunity. Our commitment is to create a welcoming and inspiring environment where every woman can discover and develop her potential.
                        </Box>
                    </Grid>
                    <Grid item xs={4}><ImageOutlined sx={{ fontSize: 350 }} /></Grid>

                    <Grid item xs={12} sx={{ paddingTop: 5 }}><Box sx={boxHeaderStyle}>Frequently Asked Questions (FAQ)</Box>
                    <List dense={dense}>
                    {faqs.map((faq) => (
                <ListItem>
                  <ListItemIcon>
                    <QuizIcon />
                  </ListItemIcon>
                  <ListItemText
                  >{faq}</ListItemText>
                </ListItem>
             ))}
            </List>
                    </Grid>

                </Grid>
            </Box>

            <Footer/>
        </Container>
    );
}

export default About;