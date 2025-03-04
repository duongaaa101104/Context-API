import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../context/SignInScreen";
import TabNavigator from "./TabNavigator";
import { AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={TabNavigator} />
      ) : (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
