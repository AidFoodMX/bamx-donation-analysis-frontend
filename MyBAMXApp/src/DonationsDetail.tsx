import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DonationsDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donations Detail</Text>
      <Text style={styles.text}>
        Here you can see the details of donations.
      </Text>
      {/* Aquí puedes añadir una lista o filtros */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#a3a8b7", // Color de fondo
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#666F88", // Color del título
  },
  text: {
    fontSize: 16,
    color: "#788199", // Color del texto
  },
});

export default DonationsDetail;
