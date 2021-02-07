import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { Toast } from "./src/toast";

export default function App() {
  const [toastOpen, setToastOpen] = React.useState(false);

  return (
    <View style={styles.container}>
      <Toast open={toastOpen} close={setToastOpen} />

      <Button title="Open Toast" onPress={() => setToastOpen(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
