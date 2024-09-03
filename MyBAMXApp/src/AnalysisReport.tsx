import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AnalysisReport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analysis Report</Text>
      <Text style={styles.text}>
        Analyze the impact of donations with detailed reports.
      </Text>
      {/* Aquí puedes añadir gráficos o visualizaciones de datos */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#8990a2", // Color de fondo
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#666F88", // Color del título
  },
  text: {
    fontSize: 16,
    color: "#b5bac9", // Color del texto
  },
});

export default AnalysisReport;
