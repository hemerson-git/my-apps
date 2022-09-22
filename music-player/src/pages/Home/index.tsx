import { useState } from "react";
import { HStack, Text, VStack } from "native-base";

// COMPONENTS
import { Header } from "../../components/Header";
import { RecentlyPlayedCard } from "../../components/RecentlyPlayedCard";

export function Home() {
  const [recentPlayed, setRecentPlayed] = useState(Array(6));

  return (
    <VStack flex={1} bg="primary.700">
      <Header title="Home" />

      {recentPlayed.map((item) => {
        <RecentlyPlayedCard />;
      })}
    </VStack>
  );
}
