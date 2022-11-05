import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />


            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >

                <Sidebar />

                <SimpleGrid
                    flex="1"
                    gap="4"
                    minChildWidth="320px"
                    alignContent="flex-start"
                >

                    <Box
                        p={["6", "8"]}
                        bg="gray.100"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">
                            Total de Carros Cadastrados
                        </Text>
                    </Box>

                    <Box
                        p={["6", "8"]}
                        bg="gray.100"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">
                            Carros Manuais
                        </Text>
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    );
}
