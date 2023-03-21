import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
      <SafeAreaProvider>
        <Card style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%", backgroundColor: "#D9D9D9"}}>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop:"10%"}}>
          <View style={{marginBottom:"8%",}}>
            <ToggleSwitch
              isOn={weekdays.Monday}
              onColor="#0069FF"
              offColor="#5A5A5A"
              label="Mo"
              onToggle={async () => {
                weekdaysToggle("Monday");
              }}
            />
          </View>
          <View style={{marginBottom:"8%"}}>
            <ToggleSwitch
              isOn={weekdays.Tuesday}
              onColor="#0069FF"
              offColor="#5A5A5A"
              label="Tu"
              onToggle={() => {
                weekdaysToggle("Tuesday");
              }}
            />
          </View>
          <View style={{marginBottom:"8%"}}>
            <ToggleSwitch
              isOn={weekdays.Wednesday}
              onColor="#0069FF"
              offColor="#5A5A5A"
              label="We"
              onToggle={() => {
                weekdaysToggle("Wednesday");
              }}
            />
          </View>
          <View style={{marginBottom:"8%"}}>
            <ToggleSwitch
              isOn={weekdays.Thursday}
              onColor="#0069FF"
              offColor="#5A5A5A"
              label="Th"
              onToggle={() => {
                weekdaysToggle("Thursday");
              }}
            />
          </View>
          <View style={{marginBottom:"8%"}}>
            <ToggleSwitch
              isOn={weekdays.Friday}
              onColor="#0069FF"
              offColor="#5A5A5A"
              label="Fr"
              onToggle={() => {
                weekdaysToggle("Friday");
              }}
            />
          </View>
        </View>
        </Card>
      </SafeAreaProvider>
    </>
  );
}
