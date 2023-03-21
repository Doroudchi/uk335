import React from "react";
import WeekdaysPicker from "../components/WeekdaysPicker";
import TimePicker from "../components/TimePicker";
import RepeatSelecter from "../components/RepeatSelecter";

export default function DetailsScreen() {
  return (
    <>
      <TimePicker />

      <WeekdaysPicker />

      <RepeatSelecter />
    </>
  );
}
