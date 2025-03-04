import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./context/SignInScreen";
import TabNavigation from "./navigation/TabNavigator"; 
import { AuthProvider, useAuth } from "./context/AuthContext";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      ) : (
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
