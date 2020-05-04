import React, {Fragment, useState} from 'react';
import './Answers.css';

import Answer from '../answer/Answer'


function Answers (props) {
    return (
        <Fragment>
            <Answer id="A" answer="Leroy Fer"/>
            <Answer id="B" answer="Marcos Senesi"/> 
            <Answer id="C" answer="Steven Berghuis"/> 
            <Answer id="D" answer="Justin Bijlow"/> 
        </Fragment>
    );
}

export default Answers


