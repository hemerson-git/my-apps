import { VStack, Text } from "native-base";
import { useEffect, useState } from "react";

// Components
import { Clock } from "../../components/Clock";
import { Timer } from "../../components/Timer";

export function Home() {
  return (
    <VStack bg="gray.900" flex={1} alignItems="center" justifyContent="center">
      <Text color="gray.100" fontSize="lg">
        Home
      </Text>

      <Timer />
    </VStack>
  );
}
