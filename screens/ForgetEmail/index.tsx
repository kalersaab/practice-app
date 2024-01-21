import {
  Dimensions,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
const { height, width } = Dimensions.get("window");

const ForgetEmail = () => {
  const [email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const SendOtp = () => {
    if (!email) {
      setShowEmailError(true);
      return;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(74,74,74)",
        }}
      >
        <View
          style={{
            borderRadius: 10,
            width: width * 0.9,
            height: height * 0.22,
            backgroundColor: "white",
            padding: 10,
            elevation: 10,
            justifyContent: "center",
          }}
        >
          <View style={{ padding: 10, justifyContent: "center" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", padding: 10 }}>
              Email
            </Text>
            <TextInput
              style={{
                width: width * 0.8,
                fontSize: 20,
                borderWidth: 1,
                padding: 10,
                borderRadius: 15,
                borderColor: "rgb(190,190,190)",
              }}
              placeholder="email"
              value={email}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
            <View style={{ padding: 10 }}>
              {showEmailError && (
                <Text style={{ color: "red" }}>Please enter email</Text>
              )}
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 12,
              justifyContent: "flex-end",
            }}
          >
            <View style={{ justifyContent: "space-evenly", margin: 10 }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "rgb(25, 75, 220)",
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => SendOtp()}
              style={{
                backgroundColor: "rgb(25,75,220)",
                borderWidth: 1,
                borderColor: "white",
                width: width * 0.2,
                padding: 10,
                alignSelf: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  color: "white",
                }}
              >
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgetEmail;
