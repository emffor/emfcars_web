import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
    VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

import { RiAddLine, RiArrowLeftUpFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Empty } from "../../components/Empty";
import { Loading } from "../../components/Form/Loading";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { IBrandCarDTO } from "../../dtos/IBrandCarDTO";
import { ICarDTO } from "../../dtos/ICarDTO";
import { ITransmissionCarDTO } from "../../dtos/ITransmissionCarDTO";
import { Environment } from "../../environment";
import api from "../../services/api";
import { TableCar } from "./TableCar";
import { TableFilter } from "./TableFilter";

export function FilterTransmission() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [emptyCars, setEmptyCars] = useState(0);

    const [page, setPage] = useState(1);

    const [transmissionsCars, setTransmissionsCars] = useState<ITransmissionCarDTO[]>([]);

    const [checkedCar, setCheckedCar] = useState<boolean>(false);
    const [selectedCarId, setSelectedCarId] = useState('');

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });


    function handleGoBack() {
        navigate('/carros');
    }

    useEffect(() => {
        async function loadBrandsCars() {
            await api.get('/transmissions/cars')
                .then((response) => {
                    setTransmissionsCars(response.data);
                    console.log(response.data);
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