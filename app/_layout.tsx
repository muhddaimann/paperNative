import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
