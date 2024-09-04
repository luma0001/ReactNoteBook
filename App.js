import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  function buttonPressed() {
    setNotes([...notes, { key: notes.length, name: text }]);
    setText("");
  }

  const renderItem = ({ item, index }) => (
    <Text>
      {index + 1}. {item.name}
    </Text>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(input) => setText(input)}
        value={text}
      />
      <Button title="Submit" onPress={buttonPressed}></Button>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  textInput: {
    backgroundColor: "lightblue",
    minWidth: 200,
  },
});
