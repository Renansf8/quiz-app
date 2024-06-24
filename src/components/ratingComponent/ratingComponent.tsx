"use client"
import React from "react";
import { Container, Typography } from "@mui/material";
import { useRecoilState } from "recoil"
import { resultsState } from '../../state/state';
import Rating from '@mui/material/Rating';
import styles from './styles.module.scss'

export function RatingComponent() {
  const [results, _setResults] = useRecoilState(resultsState)

  function setResutlText() {
    if (results.total_correct_answers >= 4) {
      return `Parabéns! você acertou ${results.total_correct_answers} de 5 perguntas.`
    } else {
      return `Que pena! você acertou ${results.total_correct_answers} de 5 perguntas, mas continue tentando!`
    }
  }

  return (
    <Container className={styles.container}>
      <Rating className={styles.stars} size='large' name="read-only" value={results.total_correct_answers} readOnly />
      <Typography className={styles.score} component="legend">{setResutlText()}</Typography>
    </Container>
  )
}