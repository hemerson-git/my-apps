import { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";

import { Modal } from "../../components/Modal";

export function Home() {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen((prevState) => !prevState);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <VStack
      bg="primary.700"
      minH="full"
      alignItems="center"
      p="4"
      pt="0"
      safeArea
    >
      <Heading color="white" textTransform="uppercase" mb="4">
        To-do
      </Heading>

      <ScrollView>
        <Text color="white" fontSize="lg">
          to do something
        </Text>
        <Text color="white" fontSize="lg">
          to do something
        </Text>
        <Text color="white" fontSize="lg">
          to do something
        </Text>
        <Text color="white" fontSize="lg">
          to do something
        </Text>
        <Text color="white" fontSize="lg">
          to do something
        </Text>
        <Text color="white" fontSize="lg">
          to do something
        </Text>
        <Text color="white" fontSize="lg">
          to do something
        </Text>
        <Text color="white" fontSize="lg">
          to do something
        </Text>
      </ScrollView>

      <HStack>
        <Pressable
          bg="green.700"
          w="80%"
          alignItems="center"
          justifyContent="center"
          py="2"
          rounded="4"
          _pressed={{
            backgroundColor: colors.green[300],
          }}
          onPress={handleOpenModal}
        >
          <Text color="white" fontWeight="bold" fontSize="md">
            Create new
          </Text>
        </Pressable>
      </HStack>

      <Modal isOpen={isOpen} setModalVisible={handleCloseModal}>
        <Box mb="4">
          <Text mb="2" fontWeight="bold">
            Title:
          </Text>

          <Input placeholder="Example" />
        </Box>

        <Box>
          <Text mb="2" fontWeight="bold">
            Description:
          </Text>

          <Input placeholder="Example" multiline numberOfLines={8} />
        </Box>
      </Modal>
    </VStack>
  );
}
