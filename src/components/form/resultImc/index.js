import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function ResultImc(props) {
  return (
    <View style={styles.resultView}>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.imcNumber}>{props.ResultImc}</Text>
        <Text style={styles.information}>{props.ResultClassification}</Text>
    </View>
  );
}
