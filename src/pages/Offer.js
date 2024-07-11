import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlueBox from "../components/BlueBox";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/constants"
import BoxImageRight from "../components/BoxImageRight";
import BoxImageLeft from "../components/BoxImageLeft";

function Offer() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={false}>
                <Header></Header>
                <BlueBox content={"Discover Our Services"} additionalContent={"Explore a wide range of services tailored for you"}></BlueBox>
                <Box sx={{ my: 4 }}>
                    <Grid container alignItems='center' justifyContent='center'>
                        <BoxImageRight title={'Unlock Your Potential, Achieve Your Dreams, Appreciate Your Talents  with Our Self-Expression Services'}
                            content={'Do you want to explore your talents and express them to the fullest? Would you like to achieve your dreams and follow your passions?\nTogether we can go on a journey  to express yourself at the best.\nWant to explore and understand yourself better, your values, passions, and goals? With the Self-Knowledge you will learn to recognize your strengths and overcome your fears.\nWant to set and pursue personal and professional goals? Self-Realization path will help you to develop a clear vision of your future and chart a path to achieve it.\nLooking for strengthening your self-esteem and learn to value your skills and experiences? With the Self-Value process you will learn to to effectively communicate your abilities and feel confident in your potential.\nOur certified life coaches work with you to transform challenges into opportunities.'}
                            image={'/static/images/lock.png'}></BoxImageRight>


                        <BoxImageLeft title={'Want to Feel More Connected and Supported? Discover Our Sisterhood Club!'}
                            content={'The key to the happiness of migrant and refugee women is sociality, friendship, networks.\n\nWant to meet others like you? Join our Community of Migrant and Refugee Women. Connect with women who share similar experiences and build lasting friendships and support networks.\n\nLooking for a safe space to share your story? Join our Sisterhood Club, a welcoming place where women can share their stories, experiences, and resources. We foster solidarity and mutual support.\n\nCurious about other cultures? Participate in our cultural events, language courses, and intercultural activities. Learn to appreciate and celebrate diverse traditions and experiences.\n\nThese activities not only enhance psychological well-being but also help you feel a stronger sense of community and belonging. Join us and be part of a supportive and vibrant community!'}
                            image={'/static/images/sisterhood.png'}></BoxImageLeft>

                        <BoxImageRight title={'Legal Advice and Rights'}
                            content={'Legal advice is essential to ensure that migrant and refugee women can live safely and with dignity.\n\nWe offer:\n- Personalized Legal Advice: individual meetings with lawyers specialized in immigration and refugee law and opportunities\nInformation on Rights: workshops and informative seminars on the rights of migrants and refugees. Learn about your rights and the resources available to you\n-Assistance with Legal Procedures: support in completing documents, preparing asylum applications and family reunification process.'}
                            image={'/static/images/legal.png'}></BoxImageRight>

                        <BoxImageLeft title={'Looking to Gain Indipendence? Explore Our Enterpreneurship and Employment Services!'}
                            content={'Curious about building a Better Life and becoming financially independent?\n\n- Know your rights: join workshops to learn about your rights in the country\n- Start your own business: get training and support to launch and run your own business\n- Find a Great Job: We\'ll help you with your job search, resume, writing and skills developemtn\n- Manage your money: learn how to save budget and plan for your finantial future\n- Partecipate in initiatives on the rights of migrant and refugee women as activist'}
                            image={'/static/images/independence.png'}></BoxImageLeft>

                        <BoxImageRight title={'Struggling with Language Barriers? We Offer Education and Translation Services to Help'}
                            content={'Moving to a new country can be tough, especially when it comes to language and finding your way around.\nWould you like you feel welcome and empowered? Bridge the gap!\n\nSpeak the Language:\nNeed to learn Italian? We offer courses to help you improve your communication skills and feel better.\n\nBreak Down the Barriers:\nDealing with confusing documents? We can help translate legal, medical, and educational papers. \nYou can even become a volunteer translator yourself!\n\nUpgrade Your Skills:\nLooking to advance your career? We offer training courses and certifications to help you develop the skills employers are looking for.\n\nEducation Made Easy:\nWant to go back to school or learn a new trade? We can help you navigate the process of enrolling, finding scholarships, and finding the right program'}
                            image={'/static/images/school.png'}></BoxImageRight>


                        <BlueBox content={"These services are designed to help you realize your full potential."}></BlueBox>
                    </Grid>
                </Box>

                <Footer />
            </Container></ThemeProvider>
    );
}

export default Offer;