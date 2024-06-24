import { IAnswerQuestionProps, IFetchQuestionProps } from "./IQuestionService"

export async function fetchQuestion({
  studentName,
  selectedCategorie,
  setQuestions,
  }: IFetchQuestionProps) {
  const request = await fetch("https://test-quiz-app-backend.herokuapp.com/rounds",
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        round: {
          player_name: studentName,
          category_id: selectedCategorie
        }
      })
    },
  )
  const response = await request.json()
  setQuestions(response.round)
}

export async function answerQuestion({
  setSelectedOption,
  id,
  questions,
  index,
  fetchResults,
  setResults
}: IAnswerQuestionProps) {
  setSelectedOption(id)
    const answer = await fetch(`https://test-quiz-app-backend.herokuapp.com/rounds/${questions.id}/answers`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        answer: {
          question_id: questions.questions[index].id,
          option_id: id
        }
      })
    })
    fetchResults({ questions, setResults})
    return answer.json()
}

