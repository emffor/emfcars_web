import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Icon
} from "@chakra-ui/react";

import { BsArrowLeft } from "react-icons/bs";
import { Loading } from "../../components/Form/Loading";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ITransmissionCarDTO } from "../../dtos/ITransmissionCarDTO";
import { TableFilter } from "./TableFilter";

export function FilterTransmission() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [transmissionsCars, setTransmissionsCars] = useState<ITransmissionCarDTO[]>([]);


    function handleGoBack() {
        navigate('/carros');
    }

    useEffect(() => {
        async function loadBrandsCars() {
            setIsLoading(true);
            await api.get('/transmissions/cars')
                .then((response) => {
                    setTransmissionsCars(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
        loadBrandsCars();
    }, [])


    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                {
                    isLoading ?
                        (
                            <Box w={"100%"} h={"60vh"}>
                                <Loading />
                            </Box>
                        )
                        :
                        (
                            <Box flex="1" borderRadius={8} bg="gray.50" p="8" >
                                <Flex mb="8" justify="space-between" align="center">
                                    <Heading size={'md'} fontWeight="500">
                                        Filtrado por Câmbios
                                    </Heading>

                                    <ButtonGroup>
                                        <Button
                                            size="sm"
                                            fontSize={"sm"}
                                            colorScheme="green"
                                            leftIcon={<Icon as={BsArrowLeft} fontSize="20" />}
                                            _hover={{
                                                bg: "green.600",
                                            }}
                                            onClick={handleGoBack}
                                        >
                                            Voltar
                                        </Button>
                                    </ButtonGroup>
                                </Flex>

                                {
                                    transmissionsCars.map((transmission) => {
                                        return (
                                            <TableFilter
                                                key={transmission.id}
                                                data={transmission}
                                            />
                                        )
                                    })
                                }
                            </Box>
                        )
                }
            </Flex>
        </Box>
    );
}