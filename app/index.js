import { Link, Stack, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { useEffect } from "react";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href={"/(search)/baconbrix"}>
        <Text>Search</Text>
      </Link>
      <Link href={"/(profile)/baconbrix"}>
        <Text>profile</Text>
      </Link>
      <Link href={"/(home)/baconbrix"}>
        <Text>Home</Text>
      </Link>
    </View>
  );
}
