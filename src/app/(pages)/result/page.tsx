"use client"
import styles from './styles.module.scss'
import { useRecoilState } from "recoil"
import { resultsState } from '../../../state/state';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { RatingComponent } from '../../../components/ratingComponent/ratingComponent';

export default function Result() {
  const { push } = useRouter();
  const [_results, setResults] = useRecoilState(resultsState)

  function cleanResults() {
    setResults({
      id: undefined,
      player_id: undefined,
      total_answered_questions: 0,
      total_correct_answers: 0,
      total_questions: 0,
    })
    push("/")
  }

  return (
    <div className={styles.container}>
      <div className={styles.resultContainer}>
        <Typography className={styles.title} variant='h5'>Resultado</Typography>
        <RatingComponent />
        <Button className={styles.button} onClick={() => cleanResults()} variant='contained'>
          Fim
        </Button>
      </div>
    </div>
  )
}