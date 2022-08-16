import { useEffect, useState } from "react";
import {
  Button,
  Heading,
  HStack,
  IconButton,
  Pressable,
  Text,
  useTheme,
  VStack,
} from "native-base";
import Icon from "@expo/vector-icons/Feather";

import { ClockChar } from "../ClockChar";

import { useCountdown } from "../../contexts/CountdownContext";

export function Timer() {
  const { colors } = useTheme();
  const {
    MINUTE,
    SECONDS,
    startCountdown,
    handleStopCountdown,
    isActive,
    handleResetTimer,
  } = useCountdown();

  useEffect(() => {}, []);

  return (
    <VStack>
      <Text>Timer</Text>

      <HStack alignItems="center" justifyContent="center">
        <Pressable flexDirection="row" onPress={() => {}} mb="4">
          <ClockChar char="0" />
          <ClockChar char="0" />
          <ClockChar char=":" />
          <ClockChar char={MINUTE[0]} />
          <ClockChar char={MINUTE[1]} />
          <ClockChar char=":" />
          <ClockChar char={SECONDS[0]} />
          <ClockChar char={SECONDS[1]} />
        </Pressable>
      </HStack>

      <HStack>
        {isActive ? (
          <Button onPress={handleStopCountdown} flex={1}>
            <Heading fontSize="xl">Stop</Heading>
          </Button>
        ) : (
          <Button onPress={startCountdown} flex={1}>
            <Heading fontSize="xl">Start</Heading>
          </Button>
        )}

        <IconButton
          icon={<Icon name="trash" size={24} color={colors.red[500]} />}
          onPress={handleResetTimer}
          disabled={isActive}
        />
      </HStack>
    </VStack>
  );
}
