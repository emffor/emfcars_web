import { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Th,
    Thead,
    Tr,
    useBreakpointValue
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { TableTransmission } from "./TableTransmission";
import { Loading } from "../../components/Form/Loading";
import { Environment } from "../../environment";
import { Empty } from "../../components/Empty";
import { ITransmissionDTO } from "../../dtos/ITransmissionDTO";

export function ListTransmissions() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [emptyTransmissions, setEmptyTransmissions] = useState(0);

    const [page, setPage] = useState(1);

    const [transmissions, setTransmissions] = useState<ITransmissionDTO[]>([]);

    const [checkedTransmission, setCheckedTransmission] = useState<boolean>(false);
    const [selectedTransmissionId, setSelectedTransmissionId] = useState('');

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    function handleCreateTransmission() {
        navigate('/cambios/cadastrar-cambio');
    }

    function handleEditTransmission() {
        if (selectedTransmissionId === '') {
            return alert('Selecione um cambio para editar');
        }

        navigate(`/cambios/editar-cambio/${selectedTransmissionId}`);
    }

    function handleChecked(id: string) {
        if (selectedTransmissionId === id) {
            setSelectedTransmissionId('');
            setCheckedTransmission(false);
        } else if (selectedTransmissionId !== id) {
            setSelectedTransmissionId(id);
            setCheckedTransmission(true);

        } else if (selectedTransmissionId === '') {
            setSelectedTransmissionId(id);
            setCheckedTransmission(true);
        }
    }


    async function handleDeleteTransmission(id: string) {
        if (selectedTransmissionId === '') {
            return alert('Selecione um cambio para deletar');
        }

        setIsLoading(true);

        await api.delete(`/transmissions/${id}`)
            .then(() => {
                alert('Cambio deletado com sucesso');
                window.location.reload();
            })
            .catch(error => {
                console.log(error)

                if (error.response.data.message === "Transmission cannot be removed because it has cars associated with it!") {

                    alert('Não é possível deletar um cambio associados carros');
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        async function handleFetchTransmissions() {
            await api.get('/transmissions')
                .then(response => {
                    setTransmissions(response.data);
                    setEmptyTransmissions(response.data.length);
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
                                    {
                                        emptyTransmissions === 0
                                            ?
                                            (
                                                <Empty
                                                    title="Nenhum câmbio cadastrado"
                                                    subtitle="Cadastrar novo Câmbio"
                                                />
                                            )
                                            :
                                            (
                                                <>
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
                                                                        onClickDelete={() => handleDeleteTransmission(transmission.id)}
                                                                        onClickEdit={() => handleEditTransmission()}
                                                                        onClickCheck={() => handleChecked(transmission.id)}
                                                                        defaultChecked={checkedTransmission && selectedTransmissionId === transmission.id ? true : false}

                                                                        isChecked={checkedTransmission && selectedTransmissionId === transmission.id ? true : false}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </Tbody>
                                                </>
                                            )
                                    }
                                </Table >

                                <Pagination
                                    totalCountOfRegisters={transmissions.length}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </Box >
                        )
                }
            </Flex >
        </Box >
    );
}