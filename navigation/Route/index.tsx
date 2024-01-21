import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./BottomTab";
import AuthStack from "../authStack";

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
