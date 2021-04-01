import React from 'react'
import { bool, func } from 'prop-types';
import { StyledBar } from './StyledBar';


const Bar = ({open, setOpen}) => {
    return (
       <StyledBar open={open} onClick={() => setOpen(!open)} >
            <div/>
            <div/>
            <div/>
        </StyledBar>
    )

}

Bar.propType = {
    open: bool.isRequired,
    setOpen: func.isRequired,  
}

export default Bar;
