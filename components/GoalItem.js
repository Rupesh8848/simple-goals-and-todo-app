import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ todo, deleteTodoHandler }) {
  return (
    <View>
      <Pressable
        onLongPress={() => {
          console.log(`${todo.item.todo} got long pressed`);
        }}
        onPress={() => deleteTodoHandler(todo?.item.id)}
        android_ripple={{ foreground: true, borderless: false }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoItem}>
          {todo.index}. {todo.item.todo}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingVertical: 5,
    rowGap: 20,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 20,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItem: {
    elevation: 1,
    opacity: 0.5,
  },
});
