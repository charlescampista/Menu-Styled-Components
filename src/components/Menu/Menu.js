import React from 'react'
import { bool } from 'prop-types';
import { StyledMenu } from './StyledMenu';
import { Bar } from '..';


export default function Menu({open}) {
    return (
        <StyledMenu open={open} >
            <a href="/">
                <span role="img" aria-label="item1"/>
                Item 1
            </a>
            <a href="/">
                <span role="img" aria-label="item2"/>
                Item 2
            </a>
            <a href="/">
                <span role="img" aria-label="item3"/>
                Item 3
            </a>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}