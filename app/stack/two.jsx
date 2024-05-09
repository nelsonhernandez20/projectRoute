import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Two() {
  const router = useRouter();
  return (
    <View>
      <Text style={{ fontSize: 30, marginHorizontal: 2 }}>Two</Text>
      <Pressable
        style={{ alignItems: "center", padding: 20 }}
        onPress={() => router.push("/stack")}
      >
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
}
