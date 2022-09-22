import { Image, VStack } from "native-base";

export function RecentlyPlayedCard() {
  return (
    <VStack>
      <Image
        source={{ uri: "https://api.unsplash.com/photos/random" }}
        w={200}
        h={200}
      />
    </VStack>
  );
}
