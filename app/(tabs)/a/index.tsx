import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center", gap: 12 }}>
      <Text variant="headlineSmall">Paper is installed ✅</Text>
      <Button mode="contained" onPress={() => {}}>
        Tap me
      </Button>
    </View>
  );
}
