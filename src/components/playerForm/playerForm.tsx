'use client'
import React, { useEffect, useState } from "react";
import { MenuItem, Container, TextField, Button, Typography, Alert } from '@mui/material';
import { useRecoilValue, useRecoilState } from 'recoil';
import { categoriesState, studentNameState, questionsState } from '../../state/state';
import styles from './styles.module.scss'
import Link from "next/link";
import { fetchQuestion } from "@/services/questionService/questionService";

export function PlayerForm() {
  const categories = useRecoilValue(categoriesState)
  const [studentName, setStudentName] = useRecoilState(studentNameState)
  const [_questions, setQuestions] = useRecoilState(questionsState)
  const [selectedCategorie, setSelectedCategorie] = useState('')
  const [triggerFetch, setTriggerFetch] = useState(false)

  function disabledButton() {
    if (selectedCategorie === '' || studentName.length === 0) return true
    return false
  }

  useEffect(() => {
    fetchQuestion({ studentName, selectedCategorie, setQuestions })
  }, [triggerFetch])

  return (
    <Container className={styles.quizContainer} maxWidth="sm" >
      <div className={styles.inputContainer}>
        <Typography className={styles.inputTitle}>Jogador:</Typography>
        <TextField
          className={styles.input}
          size='small'
          id="outlined-basic"
          label="Nome"
          variant="filled"
          onChange={(e) => setStudentName(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>Categoria:</p>
        <TextField
          onChange={(e) => setSelectedCategorie(e.target.value)}
          className={styles.input}
          value={selectedCategorie}
          variant='filled'
          select
          label="Selecione a categoria"
          size='small'
        >
          {categories.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id} >{item.name}</MenuItem>
            )
          })}
        </TextField>
      </div>
      <Button
        disabled={disabledButton()}
        size='large'
        className={styles.button}
        variant="contained"
        onClick={() => setTriggerFetch(true)}
      >
        <Link href="/question" style={{ textDecoration: "none" }}>
          Jogar
        </Link>
      </Button>
      <Alert className={styles.alert} severity="info">Preencha os campos para jogar.</Alert>
    </Container>
  )
}