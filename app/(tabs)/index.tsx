import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Explore</Text>
      <Link href={`/(modals)/login`}>Go to login</Link>
    </View>
  );
}
