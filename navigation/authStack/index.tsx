import Login from "../../screens/loginScreen";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerifyPassword from "../../screens/verifyPassword";
import SignUp from "../../screens/signupScreen";
import MyTabs from "../Route/BottomTab";
import Home from "../../screens/Home";
const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="Verify" component={VerifyPassword} />
    </Stack.Navigator>
  );
}
export default AuthStack;
