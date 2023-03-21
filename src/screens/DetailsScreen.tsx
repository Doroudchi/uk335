import React from "react";
import WeekdaysPicker from "../components/WeekdaysPicker";
import TimePicker from "../components/TimePicker";
import RepeatSelecter from "../components/RepeatSelecter";
import { Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export default function DetailsScreen() {
  return (
    <>
          <WeekdaysPicker />
          <TimePicker />
          <RepeatSelecter />
    </>
  );
}
