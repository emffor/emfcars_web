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

import { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Form/Loading";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { IBrandDTO } from "../../dtos/IBrandDTO";
import { Environment } from "../../environment";
import api from "../../services/api";
import { TableBrand } from "./TableBrand";

export function ListBrands() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [brands, setBrands] = useState<IBrandDTO[]>([]);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    function handleCreateBrands() {
        navigate('/marcas/cadastrar-marca');
    }

    function handleEditBrands() {
        navigate('/marcas/editar-marca');
    }

    useEffect(() => {
        async function handleFetchBrands() {
            await api.get('/brands')
                .then(response => {
                    setBrands(response.data);
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
        handleFetchBrands();
    }, [])

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                {
                    isLoading
                        ? (
                            <Box w={"100%"} h={"60vh"}>
                                <Loading />
                            </Box>
                        )
                        : (
                            <Box flex="1" borderRadius={8} bg="gray.50" p="8">
                                <Flex mb="8" justify="space-between" align="center">
                                    <Heading size={'md'} fontWeight="500">
                                        Lista de Marcas
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
                                                    onClick={handleCreateBrands}
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
                                                    onClick={handleCreateBrands}
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
                                            <Th px={["4", "4", "6"]} color="gray.900" width="8">
                                                <Checkbox colorScheme="red" borderColor='gray' />
                                            </Th>
                                            <Th>Nome da Marca</Th>
                                            <Th>Descrição</Th>
                                            <Th w={"8"}></Th>
                                        </Tr>
                                    </Thead>

                                    <Tbody>
                                        {
                                            brands.slice((page - 1) * Environment.LINHA_DE_LINHAS, page * Environment.LINHA_DE_LINHAS).map(brand => {
                                                return (
                                                    <TableBrand
                                                        key={brand.id}
                                                        data={brand}
                                                        onClickDelete={() => console.log('delete')}
                                                        onClickEdit={() => console.log('edit')}
                                                    />
                                                )
                                            })
                                        }
                                    </Tbody>
                                </Table>

                                <Pagination
                                    totalCountOfRegisters={brands.length}
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