import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import Button from "../../components/Button";
const { height, width } = Dimensions.get("screen");

const Signup = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const submit = () => {
    navigation.navigate("Verify");
  };
  const text = "Sign Up";

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ margin: 10 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <EvilIcons name="arrow-left" size={35} />
        </Pressable>
      </View>
      <View
        style={{
          margin: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
            padding: 10,
          }}
        >
          Create Account
        </Text>
        <Text style={{ textAlign: "center", color: "rgb(200,200,200)" }}>
          Fill your information below or register {"\n"}with you social media
          account
        </Text>
      </View>
      <View style={{ margin: 30, padding: 5 }}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="John Doe"
          keyboardType="ascii-capable"
          autoCapitalize="none"
          style={styles.txtinput}
        />
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
        <View style={{ flexDirection: "row" }}>
          <Text>Agree with </Text>
          <Pressable>
            <Text
              style={{
                textDecorationColor: "blue",
                textDecorationLine: "underline",
                color: "blue",
              }}
            >
              Terms & condition
            </Text>
          </Pressable>
        </View>
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
            padding: 5,
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
        <Pressable onPress={() => navigation.navigate("login")}>
          <Text style={{ textAlign: "center" }}>
            Already have an Account?{" "}
            <Text
              style={{
                color: "blue",
                textAlign: "right",
                textDecorationLine: "underline",
                textDecorationColor: "blue",
              }}
            >
              Sign In
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    width: width * 0.85,
    padding: 10,
    borderRadius: 50,
  },
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
