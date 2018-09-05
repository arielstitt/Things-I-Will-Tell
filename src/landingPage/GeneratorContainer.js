import React, { Component } from 'react';
import SinglePicture from '../randomGenerator/SinglePicture';
import SingleQuote from '../randomGenerator/SingleQuote';
import styled from 'styled-components'

const QuotePicContainer = styled.div `
    background-color: violet;
    height: 100vh;
    display: flex;
    justify-content: space-around;
`

class GeneratorContainer extends Component {
    render() {
        return (
            <QuotePicContainer>
                <SinglePicture/>
                <SingleQuote/>
            </QuotePicContainer>
        );
    }
}

export default GeneratorContainer;