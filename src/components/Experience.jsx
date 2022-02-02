import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = () => (
    <div className="Experience">
        <H2Styled name="Experience" />
        <div className="Experiencie-container">
            <div className="Experience-item">
                <H3Styled>NTT Data</H3Styled>
                <PStyled name="Frontend Developer"/>
            </div>
            <div className="Experience-item">
                <H3Styled>Caja Piura</H3Styled>
                <PStyled name="Frontend Developer"/>
            </div>
            <div className="Experience-item">
                <H3Styled>Vex Soluciones</H3Styled>
                <PStyled name="Frontend Developer"/>
            </div>
        </div>
    </div>
);

export default Experience;