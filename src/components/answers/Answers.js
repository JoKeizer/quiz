import React, {Fragment, useState} from 'react';
import './Answers.css';

import Answer from '../answer/Answer'


// function Answers (props) {
function Answers ({answers, currentAnswer, handleClick}) {
    let selectedValue = null;
    return (

        <Fragment>
             {(answers.answers).map((answer, index) => (
                 selectedValue = index + 1,
                <Answer 
                    key={index} 
                    valueId={index + 1} 
                    answer={answer} 
                    handleClick={handleClick}        
                    selected={currentAnswer ===  selectedValue}
                /> 
            ))} 
        </Fragment>
    );
}

export default Answers


