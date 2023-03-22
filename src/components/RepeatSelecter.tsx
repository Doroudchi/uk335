import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {Text} from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';

export default function RepeatSelecter() {
  const [repeat, setRepeat] = useState(0);

  async function asyncStorageGetRepeat() {
    const repeatStorage = JSON.parse(await AsyncStorage.getItem('repeat'));

    if (repeatStorage) {
      return repeatStorage;
    } else {
      return repeat;
    }
  }

  useEffect(() => {
    asyncStorageGetRepeat().then(response => {
      if (response != null) {
        setRepeat(response);
      }
    });
  }, []);

  const repeatToggle = async value => {
    const repeat = value;
    setRepeat(repeat);
    AsyncStorage.setItem('repeat', JSON.stringify(repeat));
  };

  function showMinToast() {
    ToastAndroid.show('Minimum number of repetitions reached', ToastAndroid.SHORT);
  }

  function showMaxToast() {
    ToastAndroid.show('Maximum number of repetitions reached', ToastAndroid.SHORT);
  }

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '5%',
        }}
      >
        <Text variant="titleMedium">How often repeated?</Text>
        <NumericInput
          onChange={value => {
            repeatToggle(value);
            value;
          }}
          totalWidth={100}
          totalHeight={33}
          rounded
          minValue={0}
          maxValue={5}
          onLimitReached={(isMax, msg) => {
            if (isMax) {
              showMaxToast();
            } else {
              showMinToast();
            }
          }}
          textColor="#000000"
        />
      </View>
    </>
  );
}
