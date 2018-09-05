import React, { Component } from 'react';
import styled from 'styled-components'

const NavContainer = styled.div `
    height: 15vh;
    width: 100vw;
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LinkWrapper = styled.div `
    background-color: aqua;
    display: flex;
    height: 10vh;
    justify-content: space-evenly;
    width: 50vw;
    align-items: center;

`

class NavBar extends Component {
    render() {
        return (
            <NavContainer>
                <div>THINKS I'LL TELL MY ...</div>
                <LinkWrapper>
                    <div>DAUGHTER</div>
                    <div>SON</div>
                    <div>MYSELF</div>
                    <div>PARTNER</div>
                </LinkWrapper>
            </NavContainer>
        );
    }
}

export default NavBar;