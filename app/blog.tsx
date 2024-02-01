import { Animated, Text } from "react-native";
import View = Animated.View;
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Blog() {
  return (
    <View>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: "Blog",
          tabBarIcon: () => (
            <MaterialIcons name="web" size={24} color="black" />
          ),
        }}
      />
      <Text>Blog page</Text>
    </View>
  );
}
