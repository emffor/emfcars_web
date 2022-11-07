import { useEffect, useState } from "react";

import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Link,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue
} from "@chakra-ui/react";

import { RiAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import { ITransmissionDTO } from "../../dtos/ITransmissionDTO";
import api from "../../services/api";
import { TableTransmission } from "./TableTransmission";
import { Loading } from "../../components/Form/Loading";
import { Environment } from "../../environment";

export function ListTransmissions() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const [page, setPage] = useState(1);

    const [transmissions, setTransmissions] = useState<ITransmissionDTO[]>([]);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    function handleCreateTransmission() {
        navigate('/cambios/cadastrar-cambio');
    }

    useEffect(() => {
        async function handleFetchTransmissions() {
            await api.get('/transmissions')
                .then(response => {
                    setTransmissions(response.data);
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
        handleFetchTransmissions();
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
                        ) :
                        (
                            <Box flex="1" borderRadius={8} bg="gray.50" p="8">
                                <Flex mb="8" justify="space-between" align="center">
                                    <Heading size={'md'} fontWeight="500">
                                        Lista de Câmbios
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
                                                    onClick={handleCreateTransmission}
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
                                                    onClick={handleCreateTransmission}
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
                                            <Th>Nome do Câmbio</Th>
                                            <Th>Descrição</Th>
                                            <Th w={"8"}></Th>
                                        </Tr>
                                    </Thead>

                                    <Tbody>
                                        {
                                            transmissions.slice((page - 1) * Environment.LINHA_DE_LINHAS, page * Environment.LINHA_DE_LINHAS).map((transmission) => {
                                                return (
                                                    <TableTransmission
                                                        key={transmission.id}
                                                        data={transmission}
                                                        onClickDelete={() => console.log('delete')}
                                                        onClickEdit={() => console.log('edit')}
                                                    />
                                                )
                                            })
                                        }
                                    </Tbody>
                                </Table>

                                <Pagination
                                    totalCountOfRegisters={transmissions.length}
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