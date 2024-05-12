import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

const user = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);
  return (
    <View>
      <Text>userrrr</Text>
    </View>
  );
};

export default user;
