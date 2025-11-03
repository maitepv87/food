import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);

  const id = navigation.getParam("id");

  const getRestaurant = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch (error) {
      console.error("Error fetching restaurant:", error.message);
    }
  };

  useEffect(() => {
    getRestaurant(id);
  }, [id]);

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <Text>Restaurant Show Screen</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default RestaurantShowScreen;
