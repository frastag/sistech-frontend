import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";


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

function Offer() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Container maxWidth={false}>
            <Header></Header>
            <PageTitle title={"Discover Our Services"}></PageTitle>
            <Box sx={{ my: 4 }}>
                <Grid container alignItems='center' justifyContent='center'>
                    <Grid item xs={12} sx={{ paddingTop: 5 }}>
                        <Box sx={boxHeaderStyle}>Join us to Make a Difference</Box>
                        <Box sx={boxContentStyle}>
                            <p>Our mission to suppor migrant and refugee women in their journey of self-empowerment and self-realization in Italy. </p>
                            <p>To achieve this goal, we aim to create strong and meaningful partnerships with businesses, non profit organizations and local authorities. Discover how you can collaborate with us to build a better future for these women.</p>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ paddingTop: 5 }}>
                        <Box sx={boxHeaderStyle}>Unlock your potential, achieve your dreams, appreciate your talents with our self-expression services</Box>
                        <Box sx={boxContentStyle}>
                            <p>Do you want to explore your talents and express them to the fullest? Would you like to achieve your dreams and follow your passions? Together we can go on a journey to express yourself at the best.</p>
                            <p>Do you want to explore and understand yourself better, your values, passions and goals?? With the <b>Self-Knowledge</b> you will learn to recognize your strengths and overcome your fears.</p>
                            <p>Want to set and pursue personal and professional goals? <b>Self-Realization path</b> will help you to develop a clear vision of your future and chart a path to achieve it.</p>
                            <p>Looking for strengthering self-esteem and learn to value your skills and experiences? With the <b>Self-Value process</b> you will learn to effectively communicate your abilities and feel confident in your potential.</p>
                            <p>Our certified coaches work with you to transform challenges into opportunities.</p>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ paddingTop: 5 }}>
                        <Box sx={boxHeaderStyle}>Want to feel more connected and supported? Discover our sisterhood club!</Box>
                        <Box sx={boxContentStyle}>
                            <p>The key to the happiness of migrant and refugee women is sociality, friendship, networks</p>
                            <p>
                                - Want to meet others like you? Join our community of migrant and refugee women. Connect with women who share similar experiences and build lasting friendships and support networks <br/>
                                - Looking for a safe space to share your story? Join our Sisterhood club, a welcoming place where women can share their stories, experiences and resources. We foster solidarity and mutual support.<br/>
                                 - Curious about other cultures? Partecipate in our cultural events, language courses, and intercultural activities. Learn to appreaciate and celebrate diverse traditions and experiences.
                            </p>
                            <p>These activities not only enhance psychological well-being but also help you feel a stronger sense of community and belonging. Join us and be part of a supportive and vibrant community.</p>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ paddingTop: 5 }}>
                        <Box sx={boxHeaderStyle}>Legal Advice and Rights</Box>
                        <Box sx={boxContentStyle}>
                            <p>
                                Legal advice is essential to ensure that migrant and refugee women can live safely and with dignity.
                            </p>
                            <p>
                                We offer: <br />
                                - <b>Personalized Legal Advice:</b> individual meetings with lawyers specialized in immigration and refugee law and opportunities<br />
                                - <b>Information on Rights:</b> workshops and informative seminars on the rights of migrants and refugees. Learn about your rights and the resources available to you<br />
                                - <b>Assistance with Legal Procedures:</b> support in completing documents, preparing asylum applications and family reunification process.
                            </p>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ paddingTop: 5 }}>
                        <Box sx={boxHeaderStyle}>Looking to Gain Indipendence? Explore Our Enterpreneurship and Employment Services!</Box>
                        <Box sx={boxContentStyle}>
                            <p>
                                Curious about building a Better Life and becoming financially independent?
                            </p>
                            <p>
                                - Know your rights: join workshops to learn about your rights in the country<br />
                                - Start your own business: get training and support to launch and run your own business<br />
                                - Find a Great Job: We'll help you with your job search, resume, writing and skills developemtn<br />
                                - Manage your money: learn how to save budget and plan for your finantial future<br />
                                - Partecipate in initiatives on the rights of migrant and refugee women as activist
                            </p>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ paddingTop: 5 }}>
                        <Box sx={boxHeaderStyle}>Struggling with Language Barriers? We Offer Education and Translation Services to Help</Box>
                        <Box sx={boxContentStyle}>
                            <p>
                                Moving to a new country can be tough, especially when it comes to language and finding your way around. <br />
                                Would you like you feel welcome and empowered? Bridge the gap!
                            </p>
                            <p>
                                Speak the Language:<br />
                                - Need to learn italian? We offer courses to help you improve your communication skills and feel better.
                            </p>
                            <p>
                                Breaking Down the Barriers:<br />
                                - Dealing with confusing documents? We can help translate legal, medical and educational papers.<br />
                                - You can even become a volunteer translator yourself!<br />
                            </p>
                            <p>
                                Upgrade your skills:<br />
                                - Looking to advance your carrer? We offer training courses and certifications to help you develop the skills employers are looking for.<br />
                            </p>
                            <p>
                                Education Made Easy:<br />
                                - Want to go back to school or learn a new trade? We can help you navigate the process of enrolling, finding scolarships and finding the right program.<br />
                            </p>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ paddingTop: 5 }}>
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
                            >These services are designed to help you realize your full potential.
                            
                            </Box></Box>
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </Container>
    );
}

export default Offer;