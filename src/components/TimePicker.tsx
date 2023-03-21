import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { ToastAndroid, View } from "react-native";
import { Button } from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";

export default function TimePicker() {
  const [visible, setVisible] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  function showToast() {
    ToastAndroid.show("Time successfully set", ToastAndroid.SHORT);
  }

  const onConfirm = React.useCallback(
    async ({ hours, minutes }) => {
      setVisible(false);

      const body = { hours: hours, minutes: minutes };
      await AsyncStorage.setItem("time", JSON.stringify(body));

      showToast();
    },
    [setVisible]
  );

  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <Button
          onPress={() => setVisible(true)}
          uppercase={false}
          buttonColor="#0069FF"
          textColor="#FFFFFF"
          icon={"clock"}
          style={{ borderRadius: 12 }}
        >
          Pick time
        </Button>

        <TimePickerModal
          use24HourClock={true}
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={12}
          minutes={14}
        />
      </View>
    </>
  );
}
