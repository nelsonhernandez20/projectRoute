import { Button, View, Text } from "react-native";

import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  const handleDismiss = (count) => {
    router.dismiss(count);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to first screen" onPress={() => handleDismiss(3)} />
    </View>
  );
}
