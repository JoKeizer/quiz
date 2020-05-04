import React, {useState} from 'react';
import './Answer.css';


function Answer ({id, answer, correctAnswer}) {

    const [style, setStyle] = useState('btn-answer')

    const onQuestionClick = e => {
        if(correctAnswer === answer) {
            setStyle('btn-answer correct') 
        } else {
            setStyle('btn-answer not') 
        }
    };


    return (
        <button 
        onClick={onQuestionClick}
        className={style}
        value={id}>
            <div className="answer-id">{id}</div>
        {answer}
        </button>
    
    );
}

export default Answer


