import { Text, View } from "react-native";
import { Menu } from "lucide-react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MainQuiz from "@/components/MainQuiz";

import style from "@/styles/home";
import text from "@/styles/text";

const data = { title: "Data Structures and Algorithms", progress: 90 }

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#1E1E1E"
        }}
      >
        <View
          style={style.header}
        >
          <Text style={text.h1}>History</Text>
          <Menu color="#FFFFFF" />
        </View>
        <View
          style={style.main}
        >
          <MainQuiz data={data} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

