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
    useBreakpointValue
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { RiAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Form/Loading";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { ICarDTO } from "../../dtos/ICarDTO";
import { Environment } from "../../environment";
import api from "../../services/api";
import { TableCar } from "./TableCar";

export function ListCars() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const [page, setPage] = useState(1);

    const [cars, setCars] = useState<ICarDTO[]>([]);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });


    function handleCreateCar() {
        navigate('/carros/cadastrar-carro');
    }

    useEffect(() => {
        async function handleFetchCars() {
            await api.get('/cars')
                .then(response => {
                    setCars(response.data);
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
        handleFetchCars();
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
                                        Lista de Carros
                                    </Heading>

                                    <ButtonGroup>
                                        {
                                            isWideVersion ? (
                                                <Button
                                                    size="sm"
                                                    fontSize={"sm"}
                                                    colorScheme="green"
                                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                                    _hover={{
                                                        bg: "green.600",
                                                    }}
                                                    onClick={handleCreateCar}
                                                >
                                                    Cadastrar Novo
                                                </Button>
                                            ) : (
                                                <Button
                                                    size="sm"
                                                    fontSize={"sm"}
                                                    colorScheme="green"
                                                    _hover={{
                                                        bg: "green.600",
                                                    }}
                                                    onClick={handleCreateCar}
                                                >
                                                    <Icon as={RiAddLine} fontSize="22" />
                                                    Novo
                                                </Button>
                                            )
                                        }
                                    </ButtonGroup>
                                </Flex>
                                <Table
                                    colorScheme="red"
                                    size="sm"
                                    variant="simple"
                                    color="gray.500"
                                >
                                    <Thead>
                                        <Tr>
                                            <Th px={["4", "4", "6"]} color="gray.900" width="8"></Th>
                                            <Th>Modelo</Th>
                                            <Th>Marca</Th>
                                            <Th>Tipo Câmbio</Th>
                                            {isWideVersion && <Th>Cor</Th>}
                                            {isWideVersion && <Th>Ano de Fabricação</Th>}
                                            {isWideVersion && <Th>Ano do Modelo</Th>}
                                            <Th w={"8"}></Th>
                                        </Tr>
                                    </Thead>

                                    <Tbody>
                                        {
                                            cars.slice((page - 1) * Environment.LINHA_DE_LINHAS, page * Environment.LINHA_DE_LINHAS).map(car => {
                                                return (
                                                    <TableCar
                                                        key={car.id}
                                                        data={car}
                                                        onClickDelete={() => console.log('delete')}
                                                        onClickEdit={() => console.log('edit')}
                                                    />
                                                )
                                            })
                                        }
                                    </Tbody>

                                </Table>

                                <Pagination
                                    totalCountOfRegisters={cars.length}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />

                            </Box>
                        )
                }
            </Flex>
        </Box>
    );
}