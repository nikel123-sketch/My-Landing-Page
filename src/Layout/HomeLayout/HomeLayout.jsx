import React from 'react';
import Hero from '../../LandingPage/Hero/Hero';
import Features from '../../LandingPage/Hero/Features';
import About from '../../LandingPage/Hero/About';
import Contact from '../../LandingPage/Hero/Contact';
import Footer from '../../Shared/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <About></About>
            <Contact></Contact>
            
        </div>
    );
};

export default HomeLayout;