import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Button from "../../components/Button";
const { height, width } = Dimensions.get("screen");

const Login = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const submit = () => {
    navigation.navigate("Home");
  };
  const text = "Sign In";

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <KeyboardAvoidingView keyboardVerticalOffset={150}>
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
            Sign In
          </Text>
          <Text style={{ textAlign: "center", color: "rgb(200,200,200)" }}>
            Hi! Welcome Back,you've been missed
          </Text>
        </View>
        <View style={{ margin: 30, padding: 5 }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="example@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.txtinput}
          />
          <Text style={styles.label}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="***********"
              style={styles.txtinput}
              autoCapitalize="none"
              value={password}
              secureTextEntry={!isPasswordVisible}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Feather
                style={{ textAlign: "right", padding: 5, right: width / 9 }}
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={30}
                color="rgb(30,30,30)"
              />
            </TouchableOpacity>
          </View>
          <Pressable>
            <Text
              style={{
                color: "blue",
                paddingVertical: 10,
                textAlign: "right",
                textDecorationLine: "underline",
                textDecorationColor: "blue",
              }}
            >
              forget Password?
            </Text>
          </Pressable>
        </View>
        <Button submit={submit} text={text} />
        <View>
          <View
            style={{
              padding: 10,
              margin: 20,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                width: 90,
                height: 1,
                alignSelf: "center",
                borderColor: "rgb(220,220,220)",
              }}
            />
            <Text style={{ textAlign: "center", color: "rgb(200,200,200)" }}>
              or sign up with
            </Text>
            <View
              style={{
                borderWidth: 1,
                width: 90,
                height: 1,
                alignSelf: "center",
                borderColor: "rgb(220,220,220)",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={{
                  uri: "https://ww2.freelogovectors.net/wp-content/uploads/2023/03/apple_logo-freelogovectors.net_-1.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={{
                  uri: "https://logowik.com/content/uploads/images/985_google_g_icon.jpg",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/018/930/702/original/facebook-logo-facebook-icon-transparent-free-png.png",
                }}
              />
            </TouchableOpacity>
          </View>
          <Pressable onPress={() => navigation.navigate("signup")}>
            <Text style={{ textAlign: "center" }}>
              Don't have an Account?{" "}
              <Text
                style={{
                  color: "blue",
                  textAlign: "right",
                  textDecorationLine: "underline",
                  textDecorationColor: "blue",
                }}
              >
                Sign Up
              </Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  txtinput: {
    padding: 15,
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 10,
    fontSize: 17,
    width: width * 0.85,
  },
  label: {
    padding: 10,
  },
  logo: {
    height: 60,
    width: 60,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 60,
    margin: 10,
  },
});
