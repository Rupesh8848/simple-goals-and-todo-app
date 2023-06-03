import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React from "react";

const TodoInput = ({
  enteredText,
  inputHandler,
  addTodoHandler,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      //   transparent={true}
    >
      <View style={styles.inputView}>
        <Image
          source={require("../assets/goal.png")}
          style={styles.image}
          tintColor="green"
          fadeDuration={5000}
          blurRadius={2}
        />
        <TextInput
          placeholder="Your todo"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredText}
          placeholderTextColor={"#120438"}
        />
        <View style={styles.buttonsView}>
          <View style={styles.buttonView}>
            <Button
              color={"#5e0acc"}
              title="Add todo"
              onPress={addTodoHandler}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              color={"#f31283"}
              title="Cancel"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputView: {
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: 24,
    // borderBottomWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "85%",
    backgroundColor: "#e4d0ff",
    justifyContent: "center",
    // marginRight: 10,
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
    color: "#120438",
    // color: "white",
  },
  buttonsView: {
    flexDirection: "row",
  },
  buttonView: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
