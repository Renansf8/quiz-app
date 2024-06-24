import { IQuestionsProps, IResultProps } from "@/state/IState"
import { IFetchResultsProps } from "../resultsService/IResultsService"

export interface IAnswerQuestionProps {
  setSelectedOption: (id: number) => void
  id: number
  questions: IQuestionsProps
  fetchResults: ({ questions, setResults}: IFetchResultsProps) => void
  index: number,
  setResults: (results: IResultProps) => void
}

export interface IFetchQuestionProps {
  studentName: string, 
  selectedCategorie: string,
  setQuestions: (questions: IQuestionsProps) => void
}