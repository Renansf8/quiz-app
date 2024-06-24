import { IQuestionsProps, IResultProps } from "@/state/IState";

export interface IFetchResultsProps {
  questions: IQuestionsProps,
  setResults: (results: IResultProps) => void
}