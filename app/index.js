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
      <Link href={"/home"}>
        <Text>Home Screen</Text>
      </Link>
      <Link style={{ marginVertical: 20 }} href={"/(home,search)"}>
        <Text>search Screen</Text>
      </Link>
    </View>
  );
}
