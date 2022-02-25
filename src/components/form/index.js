import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Pressable,
  Alert,
} from "react-native";

import styles from "./styles";
import ResultImc from "./resultImc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura.");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [textClassification, setTextCassification] = useState("");

  function calculandoIMC() {
    Keyboard.dismiss
    if (weight != null && height != null && weight != 0 && height != 0) {
      let pointHeightFormating = height.replace(",", ".");
      let pointWeightFormating = weight.replace(",", ".");
      setImc((pointWeightFormating / (pointHeightFormating * pointHeightFormating)).toFixed(2));

      if (imc < 18.5) {
        setTextCassification("Abaixo do peso");
      } else if (imc > 18.5 && imc < 24.99) {
        setTextCassification("Peso normal");
      } else if (imc > 25 && imc < 29.99) {
        setTextCassification("Sobrepeso");
      } else if (imc > 30 && imc < 34.99) {
        setTextCassification("Obesidade grau I");
      } else if (imc > 35 && imc < 39.99) {
        setTextCassification("Obesidade grau II");
      } else if (imc < 40) {
        setTextCassification("Obesidade grau III ou mórbida");
      }

      setHeight(null);
      setWeight(null);

      setTextButton("Calcular novamente.");

      setMessageImc("Seu IMC é:");
      return;
    } else if (height == null && weight == null) {
      setImc(null);
      setTextCassification(" ");
      setTextButton("Calcular");
      setMessageImc("Preencha os campos para calcular!");
      Alert.alert("", "Informe seus dados!", [
        {
          text: "Cancel",
          style: "Cancel",
        },
        {
          text: "OK",
        },
      ]);
    } else if (height == null || height == 0) {
      setImc(null);
      setTextCassification(" ");
      setTextButton("Calcular");
      setMessageImc("Preencha os campos para calcular seu IMC!");
      Alert.alert("", "Digite sua altura!", [
        {
          text: "Cancel",
          style: "Cancel",
        },
        {
          text: "OK",
        },
      ]);
    } else if (weight == null || weight == 0) {
      setImc(null);
      setTextCassification(" ");
      setTextButton("Calcular");
      setMessageImc("Preencha os campos para calcular seu IMC!");
      Alert.alert("", "Digite sua altura!", [
        {
          text: "Cancel",
          style: "Cancel",
        },
        {
          text: "OK",
        },
      ]);
      Alert.alert("", "Digite sua massa córporea!", [
        {
          text: "Cancel",
          style: "Cancel",
        },
        {
          text: "OK",
        },
      ]);
    } else {
      setImc(null);
      setTextCassification(" ");
      setTextButton("Calcular");
      setMessageImc("Preencha os campos para calcular!");
    }
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.backForm}>
      <View style={styles.form}>
        <Text style={styles.textForm}>Altura</Text>
        <TextInput
          style={styles.inputForm}
          placeholder="Ex 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        ></TextInput>

        <Text style={styles.textForm}>Peso</Text>
        <TextInput
          style={styles.inputForm}
          placeholder="Ex 75.35"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        ></TextInput>

        <TouchableOpacity
          style={styles.buttomForm}
          onPress={() => {
            calculandoIMC();
          }}
        >
          <Text style={styles.textbuttomForm}>{textButton}</Text>
        </TouchableOpacity>
        
      </View>
      <ResultImc
        messageResultImc={messageImc}
        ResultImc={imc}
        ResultClassification={textClassification}
      />
    </Pressable>
  );
}
