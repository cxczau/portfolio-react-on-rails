import React, { useReducer, useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Divider, FormControlLabel, Paper, Radio, RadioGroup } from '@mui/material';
import { animateScroll as scroll } from "react-scroll"
// import QuestionCard from './QuestionCard';

const QuestionCard = ({
  question: {
    label,
    descriptor,
    answers,
  }
}) => {
  const handleClick = (event) => {
    // Scroll to next question
    scroll.scrollMore(350)
  }

  return (
    <Card className="p-4 mb-3">
      <p>{label}</p>
      {/* <i>{descriptor}</i> */}
      <Divider className="my-4" />
      <RadioGroup>
        {answers.map((answer) => (
          <FormControlLabel
            key={answer}
            value={answer}
            control={<Radio />}
            label={answer}
            onClick={handleClick} />
        ))}
      </RadioGroup>
    </Card>
  );
}

const SurveyPage = ({ }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const SECTION_ONE_QUESTIONS = [
    {
      id: 'a',
      label: 'I tried my best to exercise everyday',
      answers: ['Yes', 'No', 'Maybe', 'Not sure', 'I dont know']
    },
    {
      id: 'b',
      descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      label: 'I found it difficult to relax on my days off work',
      answers: ['Yes', 'No', 'Maybe', 'Not sure', 'I dont know']
    },
    {
      id: 'c',
      label: 'I got 7 to 8 hours of restorative sleep most nights',
      answers: ['Yes', 'No', 'Maybe', 'Not sure', 'I dont know']
    },
    {
      id: 'd',
      label: 'I tried my best to exercise everyday',
      answers: ['Yes', 'No', 'Maybe', 'Not sure', 'I dont know']
    },
    {
      id: 'e',
      descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      label: 'I found it difficult to relax on my days off work',
      answers: ['Yes', 'No', 'Maybe', 'Not sure', 'I dont know']
    },
    {
      id: 'f',
      label: 'I got 7 to 8 hours of restorative sleep most nights',
      answers: ['Yes', 'No', 'Maybe', 'Not sure', 'I dont know']
    },
  ]

  const handleSubmit = () => {
    setIsSubmitting(true);
  }

  if (isSubmitting) {
    return (
      <Paper elevation={3} className="p-4" style={{ height: "100%" }} >
        <Card className="p-4 mb-3">
          <h1>Thank you for completing the survey!</h1>
          <p>Your results will be sent to your email address.</p>
          <p>You can also view your results on your personalised dashboard <a href='health?page=dashboard'>here</a></p>
        </Card>
      </Paper>
    )
  }

  return (
    <Paper elevation={3} className="p-4" style={{ height: "100%" }} >
      <h1>Section 1</h1>
      <p>Over the last seven days,</p>
      {SECTION_ONE_QUESTIONS.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
      <Divider className="my-4" />
      <ButtonGroup style={{ display: 'flex', justifyContent: 'end', height: '100%' }}>
        <Button variant="outlined" size="small">Save Draft</Button>
        <Button variant="contained" size="small" onClick={handleSubmit}>Submit</Button>
      </ButtonGroup>
      <Divider className="my-4" />
      <div style={{ height: 300 }}>
        <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolores velit illo saepe dolorum quo, et veniam vero maiores, quidem facere hic porro suscipit aspernatur. Totam temporibus itaque natus eos!</i>
      </div>
    </Paper>
  );
}

export default SurveyPage;