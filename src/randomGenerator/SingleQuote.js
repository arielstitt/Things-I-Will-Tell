import React, { Component } from 'react';
import styled from 'styled-components'

const singleQuoteContainer = styled.div `
    height: 35vh;
    width: 35vw;
    background-color: slate;
`

class SingleQuote extends Component {
    render() {
        return (
            <div>
                <h1>Single Quote</h1>
            </div>
        );
    }
}

export default SingleQuote;