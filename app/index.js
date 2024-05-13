import { Link, router } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Root() {
  return (
    <>
      <Link href="/home">Navigate to nested route</Link>
      <Pressable
        onPress={() => router.push("/home/messages")}
      >
        <Text>Router push</Text>
      </Pressable>
    </>
  );
}
