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

import { BsFillTrashFill } from "react-icons/bs";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export function ListCars() {
    const navigate = useNavigate();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });


    function handleCreateCar() {
        navigate('/carros/cadastrar-carro');
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

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
                                <Th px={["4", "4", "6"]} color="gray.900" width="8">
                                    <Checkbox colorScheme="red" borderColor='gray' />
                                </Th>
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
                            <Tr justifyContent="center" alignItems={"center"}>
                                <Td px={["4", "4", "6"]} width="8" pt="3" pb="3">
                                    <Checkbox colorScheme="red" borderColor='gray' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="500" color="gray.500">Hb20</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="500" color="gray.500">Hyundai</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="500" color="gray.500">Manual</Text>
                                    </Box>
                                </Td>
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Box>
                                                <Text fontWeight="500" color="gray.500">Branco</Text>
                                            </Box>
                                        </Td>
                                    )
                                }
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Box>
                                                <Text fontWeight="500" color="gray.500">2021</Text>
                                            </Box>
                                        </Td>
                                    )
                                }
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Box>
                                                <Text fontWeight="500" color="gray.500">2022</Text>
                                            </Box>
                                        </Td>
                                    )
                                }
                                <Td>
                                    <ButtonGroup>
                                        {
                                            isWideVersion ? (
                                                <>
                                                    <Button
                                                        size="sm"
                                                        fontSize="sm"
                                                        bg={"yellow.600"}
                                                        color={"white"}
                                                        leftIcon={<Icon as={RiPencilLine} fontSize="17" />}
                                                        _hover={{
                                                            bg: "yellow.500",
                                                        }}
                                                    >
                                                        Editar
                                                    </Button>

                                                    <Button
                                                        size="sm"
                                                        fontSize="sm"
                                                        bg={"red.500"}
                                                        color={"white"}
                                                        leftIcon={<Icon as={BsFillTrashFill} fontSize="17" />}
                                                        _hover={{
                                                            bg: "red.600",
                                                        }}
                                                    >
                                                        Apagar
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button
                                                        size="sm"
                                                        fontSize="sm"
                                                        p="0"
                                                        bg={"yellow.600"}
                                                        color={"white"}
                                                        _hover={{
                                                            bg: "yellow.500",
                                                        }}
                                                    >
                                                        <Icon as={RiPencilLine} fontSize="17" />
                                                    </Button>

                                                    <Button
                                                        size="sm"
                                                        fontSize="sm"
                                                        p="0"
                                                        bg={"red.500"}
                                                        color={"white"}
                                                        _hover={{
                                                            bg: "red.600",
                                                        }}
                                                    >
                                                        <Icon as={BsFillTrashFill} fontSize="17" />
                                                    </Button>
                                                </>
                                            )
                                        }
                                    </ButtonGroup>
                                </Td>
                            </Tr>
                        </Tbody>

                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}