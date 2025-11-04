import { Stack } from "expo-router";
import * as React from "react";

export default function BLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
