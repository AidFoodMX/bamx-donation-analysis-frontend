import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../Dashboard";
import DonationsDetail from "../DonationsDetail";
import AnalysisReport from "../AnalysisReport";
import Settings from "../Settings";
import Login from "../Login";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DonationsDetail" component={DonationsDetail} />
      <Stack.Screen name="AnalysisReport" component={AnalysisReport} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
