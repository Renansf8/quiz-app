export interface ICategoriesProps {
  id: number
  name: string
}

export interface IOptionsProps {
  id: number
  label: string
}

export interface IQuestionProps {
  id: number
  description: string
  options: IOptionsProps[]
}

export interface IQuestionsProps {
    id: number
    answers: []
    player_id: number
    questions: IQuestionProps[]
}

export interface IResultProps {
  id: number | undefined
  player_id: number | undefined
  total_answered_questions: number
  total_correct_answers: number
  total_questions: number
}