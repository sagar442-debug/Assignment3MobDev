import { View, Text } from "react-native";
import React, { useState } from "react";
import ToDoList from "./ToDoList";

const index = () => {
  const [list, setList] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <View>
      <Text>
        <ToDoList tasks={list} />
      </Text>
    </View>
  );
};

export default index;
