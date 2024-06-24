import { IQuestionsProps } from "@/state/IState"

export interface IQuestionFormProps {
  questions: IQuestionsProps
  index: number
  getNewQuestion: (id: number) => void
}