import { StyleSheet, Text } from "react-native";

import { Button } from "../src/components";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {});

  return (
    <StyledContainer>
      <Tabs.Screen
        options={{
          headerShown: true,
          title: "Home",
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <Button />
      <Text>Home page</Text>
      <Text>Lorem</Text>
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #eee;
  flex: 1;
  gap: 1rem;
`;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
