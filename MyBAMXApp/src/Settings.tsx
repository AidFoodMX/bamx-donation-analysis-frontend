import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>Configure your preferences.</Text>
      {/* Aquí puedes añadir interruptores o componentes de configuración */}
      <Button
        title="Logout"
        color="#666F88"
        onPress={() => {
          /* Handle logout */
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#788199", // Color de fondo
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#b5bac9", // Color del título
  },
  text: {
    fontSize: 16,
    color: "#a3a8b7", // Color del texto
  },
});

export default Settings;
