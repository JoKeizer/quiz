import React, {Fragment, useState} from 'react';
import './Answers.css';

import Answer from '../answer/Answer'


function Answers ({answers, letter, correctAnswer}) {
    console.log("hallo")

    
    return (
        <Fragment>
            {(answers).map((item, index) => (
                <Answer 
                key={index} 
                id={index } 
                answer={item} 
                correctAnswer={correctAnswer}
                /> 
            ))}
        
        </Fragment>
    );
}

export default Answers


