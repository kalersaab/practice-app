import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("screen");
const Button = ({ submit, text }: any) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={submit} style={styles.btn}>
        <Text
          style={{
            textAlign: "center",
            alignItems: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    width: width * 0.85,
    padding: 10,
    borderRadius: 50,
  },
});
