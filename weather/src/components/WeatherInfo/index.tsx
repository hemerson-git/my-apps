import { Box, Column, HStack, Text, View } from "native-base";
import { Feather } from "@expo/vector-icons";

// TYPES
import { ResultsProps } from "../../types/hg";

interface WeatherInfoProps {
  weatherMeta: ResultsProps;
}

export function WeatherInfo({ weatherMeta }: WeatherInfoProps) {
  const forecast = weatherMeta.forecast || [];

  return (
    <HStack justifyContent="space-between" py={8}>
      <Column>
        <Text color="white">
          <Feather name="wind" size={14} />
          {` `}
          {weatherMeta?.wind_speedy}
        </Text>

        <Text color="white">
          <Feather name="droplet" size={14} />
          {` `}
          {weatherMeta?.humidity}%
        </Text>
      </Column>

      <Box flexDirection="row" alignItems="center">
        <Column mr={4}>
          {forecast.length > 0 ? (
            <>
              <Text color="white">Max {weatherMeta.forecast[1].max}º</Text>
              <Text color="white">Min {weatherMeta.forecast[1].min}º</Text>
            </>
          ) : null}
        </Column>

        <Text fontSize="4xl" color="white" w={20} textAlign="center">
          {weatherMeta.temp}º
        </Text>
      </Box>
    </HStack>
  );
}
