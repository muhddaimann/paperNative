import { View, Text, StyleSheet } from "react-native";

export default function BScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab B — Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
