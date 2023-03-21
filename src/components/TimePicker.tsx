import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TimePicker() {
  const [visible, setVisible] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    async ({ hours, minutes }) => {
      setVisible(false);

      const body = { hours: hours, minutes: minutes };
      await AsyncStorage.setItem("time", JSON.stringify(body));
    },
    [setVisible]
  );

  return (
    <>
      <SafeAreaProvider>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Button
            onPress={() => setVisible(true)}
            uppercase={false}
            buttonColor="#0069FF"
            textColor="#FFFFFF"
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
      </SafeAreaProvider>
    </>
  );
}
