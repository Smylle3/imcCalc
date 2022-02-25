import { View } from "react-native";

import styles from "./GlobalStyles";
import Title from "./src/components/title";
import Form from "./src/components/form";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}
