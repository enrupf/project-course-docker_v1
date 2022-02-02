import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = () => (
    <div className="Education">
        <H2Styled name="Education" />
        <div className="Education-container">
            <div className="Education-item">
                <H3Styled>Systems Engineer 
                    <span> 2012 - 2016</span>
                </H3Styled>
                <PStyled name="Universidad de Lambayeque"/>
            </div>
        </div>
    </div>
);

export default Education;