import { StyleSheet, Text, Pressable, View } from "react-native";

function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      onPress={onDeleteItem.bind(this, id)}
    >
      <Text style={styles.goalItem}>{text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
