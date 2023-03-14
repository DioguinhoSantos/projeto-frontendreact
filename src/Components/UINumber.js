import React from "react";
import numeral from 'numeral';

const UINUmber = ({ format, children}) => {
    
    return (
        <p>{numeral(children).format(format)}</p>
    )    
}


export default UINUmber;