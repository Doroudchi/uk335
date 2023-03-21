import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  Provider,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";
import DetailsScreen from "./src/screens/DetailsScreen";
import HomeScreen from "./src/screens/HomeScreen";
const Stack = createStackNavigator();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

export default function App() {
  return (
    <>
      <Provider theme={MD3LightTheme}>
        <NavigationContainer theme={LightTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
