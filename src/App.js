import React from 'react';
import './App.css';
import Progress from './components/progress/Progress'
import Question from './components/question/Question'
import Answers from './components/answers/Answers'
import Header from './components/header/Header'
import Score from './components/score/Score'
// import {QuizData} from './data/Data'


function App() {
  const questions = [
    {
      id: 0,
      question: "Welke Feyenoorder speelde dit seizoen de meeste minuten onder Dick Advocaat?",
      letters: ["A","B", "C", "D"],
      answers: ["Leroy Fer", "Marcos Senesi", "teven Berghuis", "ustin Bijlow"],
      image: "",
      correctAnswer: "Leroy Fer"
    },
    {
        id: 1,
        question: "From witch year is this picture? ",
        letters: ["1","2", "3", "4"],
        answers: ["1989", "1988 ", "1987", "1990"],
        image: "/../../../images/voetbal.jpg",
        correctAnswer: "1988"
    },
    {
        id: 2,
        question: "The Hand of God goal from Diego Maradona was scored against?",
        letters: ["A","B", "C", "D"],
        answers: ["Brazil", "England", "Netherlands", "Spain"],
        image: "/../../../images/maradona.jpg",
        correctAnswer: "England"
    },
    {
        id: 3,
        question: "Which Williams sister has won more Grand Slam titles?",
        letters: ["A","B", "C", "D"],
        answers: ["Serena Williams", "Venus Williams"],
        image: "",
        correctAnswer: "Serena Williams"
    },
    {
        id: 4,
        question: "What country won the very first FIFA World Cup in 1930?",
        letters: ["A","B", "C", "D"],
        answers: ["Spain", "Uruguay", "Germany", "Argentina"],
        image: "",
        correctAnswer: "Uruguay"
    },
    {
        id: 5,
        question: "In what year was the first ever Wimbledon Championship held?",
        letters: ["A","B", "C", "D"],
        answers: ["1910", "1887", "1877", "1904"],
        image: "",
        correctAnswer: "1877"
    },
    {
        id: 6,
        question: "Which racer holds the record for the most Grand Prix wins?",
        letters: ["A","B", "C", "D"],
        answers: ["Sebastian Vettel", "Lewis hamilton ", "Max Verstappen", "Michael Schumacher"],
        image: "",
        correctAnswer: "Michael Schumacher"
    },
    {
        id: 7,
        question: "Which of these events is NOT part of a decathlon?",
        letters: ["A","B", "C", "D"],
        answers: ["Javelin", "1500m", "Hammer throw", "Pole vault"],
        image: "",
        correctAnswer: "Hammer Throw"
    },
]



const question = questions[0];

console.log(question)

  return (
    <div className="container">
      <Header title="Trivia"/>
      <div className="question-container">
        <Progress currentQuestion="1" total={10} active={true}/>
        <Question question={question.question}/>
        <Answers letter={question.letters} answers={question.answers} correctAnswer={question.correctAnswer}/>
        <Score totalPoints={365} time={30000}/>

      </div>
    </div>
  );
}

export default App;
