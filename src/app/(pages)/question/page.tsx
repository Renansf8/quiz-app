'use client'
import React, { useState } from "react"
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss'
import { useRecoilState } from "recoil"
import { questionsState, selectedOptionState, resultsState } from '../../../state/state';
import { Container, Typography } from "@mui/material";
import { QuestionForm } from "@/components/questionForm/questionForm";
import { answerQuestion } from "@/services/questionService/questionService";
import { fetchResults } from "@/services/resultsService/resultsService";

export default function Question() {
  const { push } = useRouter();
  const [index, setIndex] = useState(0)
  const [questions, _setQuestions] = useRecoilState(questionsState)
  const [_selectedOption, setSelectedOption] = useRecoilState(selectedOptionState)
  const [results, setResults] = useRecoilState(resultsState)

  if (index > 4) {
    fetchResults({ questions, setResults })
    return push("/result")
  }

  function getNewQuestion(id: number) {
    setIndex(prevState => prevState + 1)
    answerQuestion({ setSelectedOption, id, questions, index, fetchResults, setResults })
  }

  return (
    <Container className={styles.container}>
      <div className={styles.questionContainer}>
        <div className={styles.scoreContainer}>
          <Typography>{index + 1}/5</Typography>
          <Typography>Certas: {results.total_correct_answers}</Typography>
        </div>
        <Typography className={styles.title}>{questions && questions.questions[index].description}</Typography>
        <QuestionForm questions={questions} index={index} getNewQuestion={getNewQuestion} />
      </div>
    </Container>
  )
}