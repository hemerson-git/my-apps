import { Feather } from "@expo/vector-icons";
import {
  Box,
  IconButton,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export function Header({ title }: HeaderProps) {
  return (
    <HStack py="6" px="4" justifyContent="space-between" alignItems="center">
      <HStack>
        <Pressable mr="4">
          <Image
            source={{ uri: "https://github.com/hemerson-git.png" }}
            alt="Hemerson Oliveira"
            w="16"
            h="16"
            borderRadius="full"
          />
        </Pressable>

        <VStack justifyContent="center">
          <Text color="white" fontSize="md" opacity={0.5} fontFamily={"body"}>
            Hello, Hemerson
          </Text>

          <Text color="white" fontSize="lg" fontFamily={"body"}>
            Welcome Back
          </Text>
        </VStack>
      </HStack>

      <Box>
        <IconButton icon={<Feather name="bell" size={28} color="white" />} />
      </Box>
    </HStack>
  );
}
