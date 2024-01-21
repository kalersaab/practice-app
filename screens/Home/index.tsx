import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View style={{ margin: 10 }}>
        <Pressable onPress={() => navigation.navigate("login")}>
          <EvilIcons name="arrow-left" size={35} />
        </Pressable>
      </View>

      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
