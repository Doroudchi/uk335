import React from 'react';
import WeekdaysPicker from '../components/WeekdaysPicker';
import TimePicker from '../components/TimePicker';
import RepeatSelecter from '../components/RepeatSelecter';
import {Card} from 'react-native-paper';

export default function DetailsScreen() {
  return (
    <>
      <WeekdaysPicker />

      <Card
        style={{
          marginTop: '5%',
          marginLeft: '5%',
          marginRight: '5%',
          backgroundColor: '#D9D9D9',
        }}
      >
        <TimePicker />

        <RepeatSelecter />
      </Card>
    </>
  );
}
