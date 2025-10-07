import { View, Text } from "react-native"

import style from "@/styles/quiz";
import text from "@/styles/text";

interface QuizData {
  title: string;
  progress: number;
}

export default function MainQuiz({ data }: { data: QuizData }) {
  return (
    <View
      style={style.mainQuiz}
    >
      <Text style={text.h2}>{data.title}</Text>
    </View>
  )
}
