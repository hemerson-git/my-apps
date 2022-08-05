import { VStack, Text } from "native-base";
import { useEffect, useState } from "react";
import { Clock } from "../../components/Clock";

export function Home() {
  return (
    <VStack bg="gray.900" flex={1} alignItems="center" justifyContent="center">
      <Text color="gray.100" fontSize="lg">
        Home
      </Text>

      <Clock />
    </VStack>
  );
}
