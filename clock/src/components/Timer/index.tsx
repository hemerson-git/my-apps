import { useEffect, useState } from "react";
import {
  Button,
  Heading,
  HStack,
  IconButton,
  Pressable,
  useTheme,
  VStack,
} from "native-base";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { ClockChar } from "../ClockChar";

import { useCountdown } from "../../contexts/CountdownContext";

interface TimerProps {
  initialTime: number;
  intervalTime?: number;
}

export function Timer({ initialTime, intervalTime }: TimerProps) {
  const { colors } = useTheme();

  const {
    MINUTE,
    SECONDS,
    HOURS,
    startCountdown,
    handleStopCountdown,
    isActive,
    handleResetTimer,
    handleSetCountdown,
    hasFinished,
  } = useCountdown();

  useEffect(() => {
    if (!isActive && !hasFinished) {
      handleSetCountdown(initialTime, intervalTime);
    }
  }, [initialTime, intervalTime]);

  useEffect(() => {
    if (hasFinished && !isActive) {
      handleSetCountdown(initialTime, intervalTime);
      startCountdown();
    }
  }, [hasFinished, isActive]);

  return (
    <VStack>
      <HStack alignItems="center" justifyContent="center">
        <Pressable flexDirection="row" onPress={() => {}} mb="4">
          {Number(HOURS) > 0 && (
            <>
              <ClockChar char={HOURS[0]} />
              <ClockChar char={HOURS[1]} />
              <ClockChar char=":" />
            </>
          )}

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
          icon={<Icon name="refresh" size={24} color={colors.red[500]} />}
          onPress={handleResetTimer}
          disabled={isActive}
        />
      </HStack>
    </VStack>
  );
}
