import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Card, Text, Button } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function HomeScreen({ navigation }) {
  const [time, setTime] = useState("");
  const [weekdays, setWeekdays] = useState("");

  const getTime = async () => {
    const timeStorage = JSON.parse(await AsyncStorage.getItem("time"));

    if (timeStorage) {
      const parsedTime = timeStorage.hours + ":" + timeStorage.minutes;
      setTime(parsedTime);
    } else {
      setTime("No time selected");
    }
  };

  const getWeekDays = async () => {
    const weekdaysStorage = JSON.parse(await AsyncStorage.getItem("weekdays"));

    if (weekdaysStorage) {
      const weekdays = [];

      for (const [weekday, value] of Object.entries(weekdaysStorage)) {
        if (value) {
          weekdays.push(weekday);
        }
      }
      const parsedWeekdays = weekdays.join(",");

      setWeekdays(parsedWeekdays);
    } else {
      setWeekdays("No weekdays selected");
    }
  };

  useFocusEffect(() => {
    getTime();
    getWeekDays();
  });

  return (
    <>
      <Card style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%", backgroundColor: "#D9D9D9"}}>
        <Card.Content style={{ alignItems: "center" }}>
          <Text variant="titleLarge">Noser Young</Text>
          <Text variant="titleLarge">Light reminder</Text>
        </Card.Content>
      </Card>

      <Card style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%", backgroundColor: "#D9D9D9" }}>
        <Card.Content style={{ alignItems: "center" }}>
          <Text variant="titleLarge">Reminder on:</Text>

          <Text variant="titleMedium">{time}</Text>

          <Text variant="titleMedium">{weekdays}</Text>

          <Text variant="titleLarge"> </Text>

          <Button
            onPress={() => navigation.navigate("Details")}
            buttonColor="#0069FF"
            textColor="#FFFFFF"
            icon={"pen"}
          >
            Edit
          </Button>
        </Card.Content>
      </Card>
    </>
  );
}
