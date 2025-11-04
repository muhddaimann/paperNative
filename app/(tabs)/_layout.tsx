import { Tabs } from "expo-router";
import * as React from "react";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="a"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="b"
        options={{
          title: "About",
        }}
      />
    </Tabs>
  );
}
