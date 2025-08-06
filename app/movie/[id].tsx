import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MoviesDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie {id}</Text>
    </View>
  );
};

export default MoviesDetail;

const styles = StyleSheet.create({});
