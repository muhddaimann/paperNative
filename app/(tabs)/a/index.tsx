import { View, Text, StyleSheet } from "react-native";

export default function AScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab A — Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
