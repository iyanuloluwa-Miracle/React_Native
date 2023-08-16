import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Linking, StyleSheet, Text, View, ScrollView, RefreshControl } from "react-native";
import { FlatList } from "react-native-web";

export default function App() {
  const [Items, setItems] = useState([
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
    { name: "Item 5" },
    { name: "Item 6" },
    { name: "Item 7" },
    { name: "Item 8" },
    { name: "Item 9" },
    { name: "Item 10" },
    { name: "Item 11" },
  ]);

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key:69, name:'Item 69'}]); // Fixed the variable name
    setRefreshing(false);
  }
  

  return (
    <FlatList
    data={Items}
    renderItem={({item})=> (
      <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
      </View>

    )}
    refreshControl={<RefreshControl
        refreshing={Refreshing}
        onRefresh={onRefresh}
        colors={['#ff00ff']}
    
    />
    // <ScrollView 
    //   style={styles.body}
    //   refreshControl={<RefreshControl
    //   refreshing={Refreshing}
    //   onRefresh={onRefresh}
    //   colors={['#ff00ff']}
      
    //      />}
    //   >
    //   {items.map((object) => {
    //     return (
    //       <View style={styles.item} key={object}>
    //         <Text style={styles.text}>{object.item}</Text>
    //       </View>
    //     );
    //   })}

    //   <StatusBar style="auto" />
    // </ScrollView>
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
