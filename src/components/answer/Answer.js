import React, {useState} from 'react';
import './Answer.css';
function Answer ({ answer, valueId, letter, currentQuestionIndex, selected, handleClick}) {
    let classes =['btn-answer']

    if(selected) {
        classes.push('correct')
    }
    return (
        <button
            className={classes.join(' ')}
            onClick={handleClick}
            data-question-index={currentQuestionIndex}
            value={valueId}>
            <div className="answer-id">{letter}</div>
            {answer}
        </button>
    );
}
export default Answer