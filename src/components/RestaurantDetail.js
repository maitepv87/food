import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View>
      <Text>{restaurant.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestaurantDetail;
