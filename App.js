import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [enteredText, setEnteredText] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const inputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredText(enteredText);
  };
  const addTodoHandler = () => {
    setTodoList((oldList) => [
      ...oldList,
      { id: todoList.length, todo: enteredText },
    ]);
    setModalVisible(false);
    // setEnteredText("");
  };

  const deleteTodoHandler = (index) => {
    setTodoList((oldList) => oldList.filter((todo) => todo?.id !== index));
  };

  return (
    <>
      <StatusBar style="inverted" />
      <View style={styles.appContainer}>
        <Button
          title="Add Todo"
          onPress={() => setModalVisible(true)}
          color={"purple"}
        />
        <TodoInput
          addTodoHandler={addTodoHandler}
          enteredText={enteredText}
          inputHandler={inputHandler}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <View style={styles.todoList}>
          <FlatList
            data={todoList}
            renderItem={(todo) => (
              <GoalItem todo={todo} deleteTodoHandler={deleteTodoHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
          {/* <ScrollView overScrollMode="always">
          {todoList.map((todo) => (
            <Text
            key={todo}
            style={styles.todoItem}
            onPress={() => console.log(`${todo} got pressed!!`)}
            >
              {todo}
              </Text>
              ))}
            </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },

  todoList: {
    flex: 3,
    marginTop: 10,
    marginBottom: 10,
  },
});
