import { useEffect, useState } from "react";
import {
  Button,
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

interface ClockProps {
  time: number;
}

export function Timer({ time }: ClockProps) {
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
        <Pressable flexDirection="row" onPress={() => {}}>
          <ClockChar char="0" />
          <ClockChar char="0" />
          <ClockChar char=":" />
          <ClockChar char={String(MINUTE)[0]} />
          <ClockChar char={String(MINUTE)[1]} />
          <ClockChar char=":" />
          <ClockChar char={String(SECONDS)[0]} />
          <ClockChar char={String(SECONDS)[1]} />
        </Pressable>
      </HStack>

      <HStack>
        {isActive ? (
          <Button onPress={handleStopCountdown} flex={1}>
            <Text>Stop</Text>
          </Button>
        ) : (
          <Button onPress={startCountdown} flex={1}>
            <Text>Start</Text>
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
