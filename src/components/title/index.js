import React from "react";
import { Pressable, Keyboard, Text } from "react-native";

import styles from "./styles";

export default function Title() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.boxTitle}>
      <Text style={styles.textTitle}>IMC CALCULADORA</Text>
    </Pressable>
  );
}
