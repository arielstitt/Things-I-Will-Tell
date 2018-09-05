import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';
import GeneratorContainer from './GeneratorContainer';


const Container = styled.div `
    height: 100vh;
    width: 100vw;
    background-color: pink;
`

class LandingContainer extends Component {
    render() {
        return (
            <Container>
                <NavBar/>
                <GeneratorContainer/>
            </Container>
        );
    }
}

export default LandingContainer;