import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import ToggleSwitch from "toggle-switch-react-native";

export default function WeekdaysPicker() {
  const [weekdays, setWeekdays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
  });

  async function asyncStorageGetWeekDays() {
    const weekdaysStorage = JSON.parse(await AsyncStorage.getItem("weekdays"));

    if (weekdaysStorage) {
      return weekdaysStorage;
    } else {
      return weekdays;
    }
  }

  useEffect(() => {
    asyncStorageGetWeekDays().then((response) => {
      if (response != null) {
        setWeekdays(response);
      }
    });
  }, []);

  const weekdaysToggle = async (weekday) => {
    const weekdays = await asyncStorageGetWeekDays();
    weekdays[weekday] = !weekdays[weekday];
    setWeekdays(weekdays);
    AsyncStorage.setItem("weekdays", JSON.stringify(weekdays));
  };

  return (
    <>
      <Card
        style={{
          marginTop: "5%",
          marginLeft: "5%",
          marginRight: "5%",
          backgroundColor: "#D9D9D9",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "5%",
          }}
        >
          <Text variant="titleMedium">Mo</Text>

          <ToggleSwitch
            isOn={weekdays.Monday}
            onColor="#0069FF"
            offColor="#5A5A5A"
            onToggle={async () => {
              weekdaysToggle("Monday");
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "5%",
          }}
        >
          <Text variant="titleMedium">Tu</Text>

          <ToggleSwitch
            isOn={weekdays.Tuesday}
            onColor="#0069FF"
            offColor="#5A5A5A"
            onToggle={() => {
              weekdaysToggle("Tuesday");
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "5%",
          }}
        >
          <Text variant="titleMedium">We</Text>

          <ToggleSwitch
            isOn={weekdays.Wednesday}
            onColor="#0069FF"
            offColor="#5A5A5A"
            onToggle={() => {
              weekdaysToggle("Wednesday");
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "5%",
          }}
        >
          <Text variant="titleMedium">Th</Text>

          <ToggleSwitch
            isOn={weekdays.Thursday}
            onColor="#0069FF"
            offColor="#5A5A5A"
            onToggle={() => {
              weekdaysToggle("Thursday");
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "5%",
          }}
        >
          <Text variant="titleMedium">Fr</Text>

          <ToggleSwitch
            isOn={weekdays.Friday}
            onColor="#0069FF"
            offColor="#5A5A5A"
            onToggle={() => {
              weekdaysToggle("Friday");
            }}
          />
        </View>
      </Card>
    </>
  );
}
