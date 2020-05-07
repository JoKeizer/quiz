import React, {useState} from 'react';
import './Answer.css';


function Answer ({ answer, valueId, selected, handleClick}) {
    console.log(selected, "selected")

    let classes =['btn-answer']
    // selected = true

    if(selected) {
        classes.push('correct')
    }


    return (
        <button 
        className={classes.join(' ')}
        onClick={handleClick}
        value={valueId}>
            <div className="answer-id">{valueId}</div>
        {answer}
        </button>
    
    );
}

export default Answer


