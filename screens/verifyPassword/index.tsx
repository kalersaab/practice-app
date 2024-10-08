import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import Button from "../../components/Button";
import { EvilIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");

const VerifyPassword = ({ navigation }: any) => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef()];
  const [inputs, setInputs] = useState(["", "", "", ""]);

  const handleInputChange = (text, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = text;
    setInputs(updatedInputs);

    // Check if the typed text is a number and move to the next input
    if (/^\d+$/.test(text) && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  const submit = () => {
    navigation.navigate("Home");
  };
  const text = "Verify";
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ margin: 10 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <EvilIcons name="arrow-left" size={35} />
        </Pressable>
      </View>
      <View
        style={{
          margin: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
            padding: 20,
          }}
        >
          Verify Code
        </Text>
        <Text style={{ textAlign: "center", color: "rgb(200,200,200)" }}>
          Please enter the code we just send to email{"\n"} example@gmail.com
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 20,
        }}
      >
        {inputs.map((text, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            placeholder="-"
            onChangeText={(text) => handleInputChange(text, index)}
            value={text}
            keyboardType="numeric"
            placeholderTextColor={"black"}
            textAlign="center"
            maxLength={1}
            style={styles.txtinput}
          />
        ))}
      </View>
      <View style={{ justifyContent: "center", padding: 10 }}>
        <Text style={{ textAlign: "center" }}>Didn't receive OTP?</Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Resend Code
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Button submit={submit} text={text} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyPassword;

const styles = StyleSheet.create({
  txtinput: {
    padding: 15,
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 10,
    fontSize: 17,
    width: width * 0.15,
  },
});
