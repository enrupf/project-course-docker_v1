import React from 'react';
import styled from 'styled-components';

import Social from '../components/Social'
const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3F51B5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #448AFF;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

const About = () => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src="https://media.istockphoto.com/vectors/girl-icon-woman-avatar-face-icon-cartoon-style-vector-vector-id811802820?b=1&k=6&m=811802820&s=170667a&w=0&h=PX0-2RsmeNuQRtAREVt2qUZlaUVBLEeTvA-HjZAbvdw=" alt="Mi avatar" />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>Enny R. Peña Flores</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession>FrontEnd Developer en NTT Data</AboutProfession>
            </div>
            <div className="About-location">
                <AboutLocation>Piura - Perú</AboutLocation>
            </div>
            <div className="About-social">
                <Social />
            </div>
        </div>
    </AboutStyle>
); 

export default About;