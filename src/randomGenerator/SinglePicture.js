import React, { Component } from 'react';
import styled from 'styled-components'

const singlePictureContainer = styled.div `
    height: 35vh;
    width: 35vw;
    background-color: slate;
`

class SinglePicture extends Component {
    render() {
        return (
            <div>
                <h1>Single Picture</h1>
            </div>
        );
    }
}

export default SinglePicture;