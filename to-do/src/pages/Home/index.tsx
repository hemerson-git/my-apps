import { Heading, ScrollView, Text, VStack } from "native-base";

export function Home() {
  return (
    <VStack bg="primary.700" minH="full" alignItems="center" safeArea>
      <Heading color="white" textTransform="uppercase">
        To-do
      </Heading>

      <ScrollView>
        <Text>to do something</Text>
        <Text>to do something</Text>
        <Text>to do something</Text>
        <Text>to do something</Text>
        <Text>to do something</Text>
        <Text>to do something</Text>
        <Text>to do something</Text>
        <Text>to do something</Text>
      </ScrollView>
    </VStack>
  );
}
