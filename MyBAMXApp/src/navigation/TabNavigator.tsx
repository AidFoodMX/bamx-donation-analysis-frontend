import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../Dashboard";
import DonationsDetail from "../DonationsDetail";
import AnalysisReport from "../AnalysisReport";
import Settings from "../Settings";
import Login from "../Login";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Donations" component={DonationsDetail} />
      <Tab.Screen name="Analysis" component={AnalysisReport} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
