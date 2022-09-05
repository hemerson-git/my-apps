import { useState, useEffect } from "react";
import { FlatList, Row, useControllableState, VStack } from "native-base";

// COMPONENTS
import { DailyCard } from "../../components/DailyCard";
import { DayWidget } from "../../components/DayWidget";
import { Header } from "../../components/Header";
import { WeatherInfo } from "../../components/WeatherInfo";

// SERVICES
import { weatherApi } from "../../services/hg_api";

// TYPES
import { ForecastProps, ResultsProps } from "../../types/hg";
import { LocationObject } from "expo-location";

interface HomeProps {
  location: LocationObject;
}

export function Home({ location }: HomeProps) {
  const [forecastValues, setForecastValues] = useState([] as ForecastProps[]);
  const [todaysCondition, setTodaysCondition] = useState({} as ResultsProps);

  useEffect(() => {
    (async () => {
      if (location.coords) {
        const { data } = await weatherApi.get("weather", {
          params: {
            key: "c073b2d6",
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          },
        });

        setForecastValues(data.results.forecast);
        setTodaysCondition(data.results);
      }
    })();
  }, []);

  return (
    <VStack bg="primary.700" flex={1} py={4} px={2}>
      <Header cityName={todaysCondition.city} />
      <WeatherInfo weatherMeta={todaysCondition} />

      <DayWidget />

      <Row>
        <FlatList
          data={forecastValues}
          renderItem={({ item }) => <DailyCard weatherInfo={item} />}
          keyExtractor={(item) => String(item.date)}
          horizontal
          showsHorizontalScrollIndicator={false}
          fadingEdgeLength={100}
        />
      </Row>
    </VStack>
  );
}
