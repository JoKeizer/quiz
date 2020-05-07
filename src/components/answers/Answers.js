import React, {Fragment, useState} from 'react';
import './Answers.css';
import Answer from '../answer/Answer'

function Answers({answers, userAnswerID, handleClick}) {
    let selectedValue = null;
    const abs = ['A', 'B', 'C', 'D'];

    return (
        <Fragment>
            {(answers.answers).map((answer, index) => {
                    const selectedValue = index + 1;
                    return <Answer
                        key={index}
                        letter={abs[index]}
                        valueId={selectedValue}
                        answer={answer}
                        handleClick={handleClick}
                        selected={userAnswerID === selectedValue}
                    />
                }
            )}
        </Fragment>
    );
}

export default Answers