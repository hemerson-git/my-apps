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
import { Loading } from "../../components/Loading";

interface HomeProps {
  location: LocationObject;
}

export function Home({ location }: HomeProps) {
  const [forecastValues, setForecastValues] = useState([] as ForecastProps[]);
  const [todaysCondition, setTodaysCondition] = useState<
    ResultsProps | undefined
  >();

  useEffect(() => {
    if (location.coords) {
      console.log(111111);

      weatherApi
        .get("weather", {
          params: {
            key: "c073b2d6",
            lat: location.coords.latitude.toFixed(2),
            lon: location.coords.longitude.toFixed(2),
          },
        })
        .then(({ data }) => {
          if (forecastValues.length === 0) {
            setForecastValues(data.results.forecast);
            setTodaysCondition(data.results);
          }
        });
    }
  }, [location, todaysCondition]);

  if (!location.coords || !todaysCondition?.city) {
    return <Loading />;
  }

  return (
    <VStack bg="primary.700" flex={1} py={4} px={2}>
      <Header cityName={todaysCondition?.city} />
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
