import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card({ children, style }) {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10
  }
});
