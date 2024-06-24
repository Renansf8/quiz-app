import { IFetchResultsProps } from "./IResultsService"

export async function fetchResults({ questions, setResults}: IFetchResultsProps) {
  const fetchTeste = await fetch(`https://test-quiz-app-backend.herokuapp.com/rounds/${questions.id}/result`)
  const resultsData = await fetchTeste.json()
  setResults(resultsData.round)
}