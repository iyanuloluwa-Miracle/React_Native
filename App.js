import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Linking, StyleSheet, Text, View, ScrollView, RefreshControl } from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { key: 1, item: "Item 1" },
    { key: 2, item: "Item 2" },
    { key: 3, item: "Item 3" },
    { key: 4, item: "Item 4" },
    { key: 5, item: "Item 5" },
    { key: 6, item: "Item 6" },
    { key: 7, item: "Item 7" },
    { key: 8, item: "Item 8" },
    { key: 9, item: "Item 9" },
    { key: 10, item: "Item 10" },
    { key: 11, item: "Item 11" },
  ]);

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: 69, item:'Item 69'}])
    setRefreshing(false)
  }

  return (
    <ScrollView 
      style={styles.body}
      refreshControl={<RefreshControl
      refreshing={Refreshing}
      onRefresh={onRefresh}
      colors={['#ff00ff']}
      
         />}
      >
      {items.map((object) => {
        return (
          <View style={styles.item} key={object}>
            <Text style={styles.text}>{object.item}</Text>
          </View>
        );
      })}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  item: {
    margin: 10,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 36,
    color: "blue",
    margin: 10,
    fontStyle: "italic",
  },
});
