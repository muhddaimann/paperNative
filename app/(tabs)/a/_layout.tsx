import { Stack } from "expo-router";
import * as React from "react";

export default function ALayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
