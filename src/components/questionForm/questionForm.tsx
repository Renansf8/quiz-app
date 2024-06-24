import React from "react";
import { Button, Container, Typography } from "@mui/material";
import styles from './styles.module.scss'
import { IQuestionFormProps } from "./IQuestionForm";
import { Loading } from "../loading/loading";

export function QuestionForm({ questions, index, getNewQuestion }: IQuestionFormProps) {
  return (
    <Container>
      {questions === undefined ? (
        <Loading />
      ) : (
        questions && questions.questions[index].options.map(item => {
          return (
            <Button onClick={() => getNewQuestion(item.id)} className={styles.question}>
              <Typography>{item.label}</Typography>
            </Button>
          )
        })
      )}
    </Container>
  )
}