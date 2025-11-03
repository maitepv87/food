import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View style={styles.constiner}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.name}>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constiner: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default RestaurantDetail;
