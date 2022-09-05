import { FlatList, Row, VStack } from "native-base";
import { DailyCard } from "../../components/DailyCard";
import { DayWidget } from "../../components/DayWidget";
import { Header } from "../../components/Header";
import { WeatherInfo } from "../../components/WeatherInfo";

const list = [
  {
    id: 1,
    temp: 48,
    day: "wendsday",
  },
  {
    id: 2,
    temp: 48,
    day: "wendsday",
  },
  {
    id: 3,
    temp: 48,
    day: "wendsday",
  },
  {
    id: 4,
    temp: 48,
    day: "wendsday",
  },
  {
    id: 5,
    temp: 48,
    day: "wendsday",
  },
];

export function Home() {
  return (
    <VStack bg="primary.700" flex={1} py={15} px={2}>
      <Header />
      <WeatherInfo />

      <DayWidget />

      <Row>
        <FlatList
          data={list}
          renderItem={() => <DailyCard />}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          fadingEdgeLength={100}
        />
      </Row>
    </VStack>
  );
}
