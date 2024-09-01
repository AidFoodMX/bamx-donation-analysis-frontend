import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../Dashboard";
import DonationsDetail from "../DonationsDetail";
import AnalysisReport from "../AnalysisReport";
import Settings from "../Settings";

// Define the types for your navigation
type BottomTabParamList = {
  Dashboard: undefined;
  Donations: undefined;
  Reports: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          tabBarLabel: route.name, // Display the name of the route as the label
          tabBarActiveTintColor: "#666F88",
          tabBarInactiveTintColor: "#b5bac9",
          tabBarStyle: { backgroundColor: "#8990a2" },
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Donations" component={DonationsDetail} />
        <Tab.Screen name="Reports" component={AnalysisReport} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
