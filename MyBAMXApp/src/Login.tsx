import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";

import { NavigationProp } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

const Login = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonScale] = useState(new Animated.Value(1));

  const handleLogin = () => {
    // Implement login logic
    navigation.replace("Main");
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start(handleLogin);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#E0E0E0"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#E0E0E0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <TouchableOpacity style={styles.button} onPress={animateButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#666F88", // Color de fondo
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF", // Texto blanco
    marginBottom: 24,
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#8990a2",
    borderRadius: 8,
    backgroundColor: "#788199",
    color: "#FFFFFF", // Texto blanco
  },
  button: {
    marginTop: 20,
    backgroundColor: "#8990a2",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF", // Texto blanco
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
