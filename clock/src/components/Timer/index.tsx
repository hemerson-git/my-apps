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

export function Timer() {
  const { colors } = useTheme();
  const INITIAL_TIME = 25 * 60; // 25 minutes
  const INTERVAL_TIME = 5 * 60; // 5 minutes

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
    time,
  } = useCountdown();

  useEffect(() => {
    if (!isActive && !hasFinished) {
      handleSetCountdown(INITIAL_TIME, INTERVAL_TIME);
    }
  }, []);

  useEffect(() => {
    if (hasFinished && !isActive) {
      handleSetCountdown(INTERVAL_TIME, INTERVAL_TIME);
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
