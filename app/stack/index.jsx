import { useRouter } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function IndexStack() {
  const router = useRouter();
  return (
    <View>
      <Text style={{ fontSize: 30, marginHorizontal: 2 }}>index</Text>
      <Pressable
        style={{alignItems: "center", padding: 20 }}
        onPress={() => router.push("/stack/two")}
      >
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
}
