import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../context/AuthContext"; // Đổi từ AuthContext sang useAuth

const AccountScreen = () => {
  const { user, signOut } = useAuth(); // Đổi logout thành signOut

  return (
    <View style={{ padding: 20 }}>
      <Text>{user?.name || "No Name"}</Text>
      <Text>{user?.email}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default AccountScreen;
