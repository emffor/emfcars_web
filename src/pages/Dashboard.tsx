import {
    Box,
    Flex,
    SimpleGrid,
    Stack,
    Text,
    theme
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Chart from "react-apexcharts";
import { useState } from "react";

export function Dashboard() {
    const [totalCars, setTotalCars] = useState(0);

    const options = {

    }

    const series = [
        {
            data: [
                {
                    x: "Fiat",
                    y: 218,
                },
                {
                    x: "Nissan",
                    y: 149,
                },
                {
                    x: "Toyota",
                    y: 184,
                },
                {
                    x: "Chevrolet",
                    y: 55,
                },
                {
                    x: "Hyundai",
                    y: 84,
                },
            ],
        },
    ]

    /* nome e valor das series */


    return (
        <Flex direction="column" h="100vh" >
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
                        <Text fontSize="lg">
                            Total de Carros Cadastrados
                        </Text>

                        <Stack
                            display="flex"
                            align="center"
                            justify="center"
                            height="100%"
                        >
                            <Text
                                fontSize="8xl"
                                fontWeight="700"
                            >
                                {totalCars}
                            </Text>
                        </Stack>
                    </Box>

                    <Box
                        p={["6", "8"]}
                        bg="gray.100"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">
                            Quantidade de Carros por Marca
                        </Text>
                        <Chart
                            type="treemap"
                            height={300}
                            options={options}
                            series={series}
                        />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex >
    );
}
