import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExplorerScreen from "../context/ExplorerScreen";
import AccountScreen from "../context/AccountScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorer" component={ExplorerScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
