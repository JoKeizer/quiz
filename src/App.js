import React from 'react';
import './App.css';
import Progress from './components/progress/Progress'
import Question from './components/question/Question'
import Answer from './components/answer/Answer'
import Header from './components/header/Header'


function App() {
  return (
    <div className="container">
      <Header title="Trivia"/>
      <div className="question-container">
        <Progress currentQuestion="1" total={3}/>
        <Question question="Welke Feyenoorder speelde dit seizoen de meeste minuten onder Dick Advocaat?"/>
        <Answer id="A" answer="Leroy Fer"/>
      </div>
    </div>
  );
}

export default App;
