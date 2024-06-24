import { selector, atom } from "recoil";
import { ICategoriesProps, IQuestionsProps, IResultProps } from "./IState";

export const categoriesState = selector<ICategoriesProps[]>({
  key: "categories",
  get: async () => {
    const response = await fetch("https://test-quiz-app-backend.herokuapp.com/categories")
    const data = await response.json()
    return data.categories
  }
})

export const studentNameState = atom({
  key: "studentName",
  default: "",
})

export const questionsState = atom<IQuestionsProps>({
  key: "questions",
  default: {
    questions: [],
    id: 0,
    answers: [],
    player_id: 0
  },
})

export const selectedOptionState = atom({
  key: "selectedOption",
  default: 0,
})

export const resultsState = atom<IResultProps>({
  key: "results",
  default: {
    id: undefined,
    player_id: undefined,
    total_answered_questions: 0,
    total_correct_answers: 0,
    total_questions: 0,
  },
})
