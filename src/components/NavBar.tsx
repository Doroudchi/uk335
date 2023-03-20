import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ColorfulTabBar } from "react-navigation-tabbar-collection";
import Icon from "react-native-vector-icons/Feather";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Search from "../pages/Search";

const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props: any) => (
          <ColorfulTabBar {...props} height={65} maxWidth="95%" />
        )}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="home"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
              />
            ),
            tabBarActiveTintColor: "primary",
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: "Search",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="search"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
              />
            ),
            tabBarActiveTintColor: "primary",
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Settings",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="settings"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
              />
            ),
            tabBarActiveTintColor: "primary",
          }}
        />
      </Tab.Navigator>
    </>
  );
}
