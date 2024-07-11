import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlueBox from "../components/BlueBox";
import { Typography, ThemeProvider } from "@mui/material";
import theme from "../utils/constants"
import BoxImageLeft from "../components/BoxImageLeft";
import BoxImageRight from "../components/BoxImageRight";



const boxHeaderStyle = {
    width: 1,
    textAlign: 'center'
}

const boxContentStyle = {
    width: 1,
    textAlign: 'center',
    paddingTop: 5
}

function Partnership() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={false}>
                <Header></Header>
                <BlueBox content={"Welcome to Our Partnership Page"} additionalContent={'Collaborate with us to achieve great things together.'}></BlueBox>
                <Box sx={{ my: 4 }}>
                    <Grid container alignItems='center' justifyContent='center'>
                        <Grid item xs={12} sx={{ paddingTop: 5 }}>
                            <Box sx={boxHeaderStyle}><Typography variant="sectionTitle">Join us to Make a Difference</Typography></Box>
                            <Box sx={boxContentStyle}>
                                <Typography variant="sectionContent">
                                    Our mission is to support migrant and refugee women in their journey of self-empowerment and self-realization in Italy. To achieve this goal, we aim to create strong and meaningful partnerships with businesses, non-profit organizations, and local authorities. Discover how you can collaborate with us to build a better future for these women.
                                </Typography>
                            </Box>
                        </Grid>

                        <BoxImageRight title={'Collaborations with Businesses'}
                            content={'Businesses can play a crucial role in supporting our initiatives and programs. Here are some ways your company can make a difference:\n- Corporate Social Responsability (CSR) Programs: Integrate our programs into your CSR initiatives to promote inclusion and gender equality;\n- Financial Support and Sponsorships: Provide funding of sponsors events, workshops and training programs;\n- Job and Internship Opportunities: Offer job opportunities, internships and traineeships to our beneficiaries, contributing to their economic independence;\n- In-Kind Donations: Provide educational and technological tools to support our activities;'}
                            image={'/static/images/collaboration_business.png'}></BoxImageRight>

                        <BoxImageLeft title={'Collaborations with Non-Profit Organizaitons'}
                            content={'We work in synergy with non-profit organizations to expand our impact and reach more beneficiaries. Areas of collaboration include\n- Resource sharing: exchanbge resources, skills and knowledge to improve the effectiveness of our programs.\n- Joint Projects: develop and implement joint projects aimed at supporting migrant and refugee women\n- Advocacy and Awareness: Collaborate to raise awareness about the rights of migrant and refugee women and promote social change.'}
                            image={'/static/images/women.png'}></BoxImageLeft>

                        <BoxImageRight title={'Collaborations with Local Authorities'}
                            content={'Italian municipalities, especially those that are semi-abandoned, represent a great opportunity for the population and integration of migrant and refugee women. Partnerships with local authorities can include:\n- Repopulation programs: collaborate with semi-abandoned municipalities to create repopulation programs that integrate our beneficiaries into local communities\n- Access to local services: Facilitate access for migrant and refugee women to local services, including educational, health and social services\n- Community support: promote community intiatives that foster the social and cultural inclusion of beneficiaries, contributing to the economic and social development of local areas'}
                            image={'/static/images/police.png'}></BoxImageRight>

                        <Grid item xs={12} sx={{ paddingTop: 5 }}>
                            <Box sx={boxHeaderStyle}><Typography variant="sectionTitle">Why collaborate with us</Typography></Box>
                            <Box sx={boxContentStyle}><Typography variant="sectionContent">
                                - Positive Impact: your collaboration can significantly impact the lives of migrant and refugee women, helping them build a better future<br />
                                - Shared Values: work together to promote values such as gender equality, inclusion and solidarity<br />
                                - Social innovation: Contribute to innovative solutions for complex social challenges, creating lasting changes</Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                <Footer />
            </Container>
        </ThemeProvider>
    )
}

export default Partnership;