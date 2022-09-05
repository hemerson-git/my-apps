import { FlatList, VStack } from "native-base";
import { DailyCard } from "../../components/DailyCard";
import { Header } from "../../components/Header";
import { WeatherInfo } from "../../components/WeatherInfo";

const list = [
  {
    temp: 48,
    day: "wendsday",
  },
  {
    temp: 48,
    day: "wendsday",
  },
  {
    temp: 48,
    day: "wendsday",
  },
  {
    temp: 48,
    day: "wendsday",
  },
  {
    temp: 48,
    day: "wendsday",
  },
];

export function Home() {
  return (
    <VStack bg="primary.700" flex={1} pt={15} px={2}>
      <Header />
      <WeatherInfo />

      <FlatList
        data={list}
        renderItem={() => <DailyCard />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
}
