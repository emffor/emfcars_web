import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.50"
      borderRadius="full"
      _hover={{
        bgColor: 'gray.100'
      }}
    >
      <Input
        color="gray.600"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.500' }}
      />
      <Icon
        as={RiSearchLine}
        fontSize="20"
        color="gray.500"
      />
    </Flex>
  );
}