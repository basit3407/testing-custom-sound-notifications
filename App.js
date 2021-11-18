import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Platform, Button } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  React.useEffect(() => {
    setNotificationChannelAsync();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>This App is for Testing Notifications</Text>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await scheduleNotification();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const setNotificationChannelAsync = () => {
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("sound", {
      name: "sound notification",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      sound: "adhan.wav",
    });
  }
};

async function scheduleNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
      sound: "adhan.wav",
    },
    trigger: { seconds: 5, channelId: "sound" },
  });
}
