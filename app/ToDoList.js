import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ToDoList = ({ tasks }) => {
  return (
    <View>
      {tasks.map((task, i) => (
        <Text style={styles.incomplete} key={i}>
          {task}
        </Text>
      ))}
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  incomplete: {
    fontWeight: 600,
    color: "#555",
  },
});
