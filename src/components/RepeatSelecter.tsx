import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ToggleSwitch from "toggle-switch-react-native";

export default function RepeatSelecter() {
  const [repeat, setRepeat] = useState(false);

  async function asyncStorageGetRepeat() {
    const repeatStorage = JSON.parse(await AsyncStorage.getItem("repeat"));

    if (repeatStorage) {
      return repeatStorage;
    } else {
      return repeat;
    }
  }

  useEffect(() => {
    asyncStorageGetRepeat().then((response) => {
      if (response != null) {
        setRepeat(response);
      }
    });
  }, []);

  const repeatToggle = async () => {
    let repeat = await asyncStorageGetRepeat();
    repeat = !repeat;
    setRepeat(repeat);
    AsyncStorage.setItem("repeat", JSON.stringify(repeat));
  };

  return (
    <>
      <SafeAreaProvider>
      <Card style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%", backgroundColor: "#D9D9D9"}}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ToggleSwitch
            isOn={repeat}
            onColor="#0069FF"
            offColor="#5A5A5A"
            label="Repeat?"
            onToggle={async () => {
              repeatToggle();
            }}
          />
        </View>
        </Card>
      </SafeAreaProvider>
    </>
  );
}
