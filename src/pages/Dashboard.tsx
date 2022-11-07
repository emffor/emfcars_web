import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    Stack,
    Text,
    theme
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import api from "../services/api";

export function Dashboard() {
    const [totalCars, setTotalCars] = useState(0);
    const [totalBrands, setTotalBrands] = useState(0);
    const [totalTransmissions, setTotalTransmissions] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        async function getLoadBrands() {
            const response = await api.get('/brands');
            setTotalBrands(response.data.length);
        }

        async function getLoadTransmissions() {
            const response = await api.get('/transmissions');
            setTotalTransmissions(response.data.length);
        }

        async function getTotalCars() {
            await api.get('/cars')
                .then(response => {
                    setTotalCars(response.data.length);
                    console.log(response.data.length);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }

        getLoadTransmissions();
        getLoadBrands()
        getTotalCars();
    }, []);

    return (
        //colocar um scroll horizontal

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
                        bg="gray.50"
                        borderRadius={8}
                    >
                        <Text fontSize="2xl" fontWeight="500" color={"red.400"}>
                            Carros Cadastrados
                        </Text>

                        <Stack
                            display="flex"
                            align="center"
                            justify="center"
                            height="100%"
                        >
                            <Box bg={"#DA6F66"} borderRadius={"full"} pl={"10"} pr={"10"} mb={"5"}>
                                <Text
                                    fontSize="9xl"
                                    fontWeight="700"
                                    color={"white"}
                                >
                                    {totalCars}
                                </Text>
                            </Box>

                        </Stack>
                    </Box>

                    <Box
                        p={["6", "8"]}
                        bg="gray.50"
                        borderRadius={8}
                    >
                        <Text fontSize="2xl" fontWeight="500" color={"yellow.600"}>
                            Câmbios Cadastrados
                        </Text>

                        <Stack
                            display="flex"
                            align="center"
                            justify="center"
                            height="100%"
                        >
                            <Box bg={"#FFDA6B"} borderRadius={"full"} pl={"10"} pr={"10"} mb={"5"}>
                                <Text
                                    fontSize="9xl"
                                    fontWeight="700"
                                    color={"white"}
                                >
                                    {totalTransmissions}
                                </Text>
                            </Box>
                        </Stack>
                    </Box>

                    <Box
                        p={["6", "8"]}
                        bg="gray.50"
                        borderRadius={8}
                    >
                        <Text fontSize="2xl" fontWeight="500" color={"green.500"}>
                            Marcas Cadastradas
                        </Text>

                        <Stack
                            display="flex"
                            align="center"
                            justify="center"
                            height="100%"
                        >
                            <Box bg={"#A4BD58"} borderRadius={"full"} pl={"10"} pr={"10"} mb={"5"}>
                                <Text
                                    fontSize="9xl"
                                    fontWeight="700"
                                    color={"white"}
                                >
                                    {totalBrands}
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex >
    );
}
