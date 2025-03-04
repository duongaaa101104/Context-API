import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons"; 

const SignInScreen = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = () => {
    setError(null); // Xóa lỗi cũ
    signIn(email, password)
      .then(() => {
        navigation.replace("Home"); // Chuyển đến Home nếu đăng nhập thành công
      })
      .catch((err) => {
        setError(err); // Hiển thị lỗi nếu có
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {error && <Text style={styles.error}>{error}</Text>} 

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail} // Cập nhật email
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword} // Cập nhật password
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="#EA4335" />
          <Text style={styles.socialText}> Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#1877F2" />
          <Text style={styles.socialText}> Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#FF8C00',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 16,
    color: '#888',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  socialText: {
    fontSize: 16,
    marginLeft: 8,
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  signUpLink: {
    color: '#FF8C00',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
