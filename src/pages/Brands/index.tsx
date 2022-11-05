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

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export function ListBrands() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.50" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Marcas cadastradas
                        </Heading>

                        <ButtonGroup>
                            <Button
                                size="sm"
                                fontSize="sm"
                                colorScheme="red"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                _hover={{
                                    bg: "red.600",
                                }}
                            >
                                Cadastrar Novo
                            </Button>
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
                            <Tr justifyContent="center" alignItems={"center"}>
                                <Td px={["4", "4", "6"]} width="8" pt="3" pb="3">
                                    <Checkbox colorScheme="red" borderColor='gray' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="500" color="gray.500">Toyota</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="500" color="gray.500">Descrição da Marca</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <ButtonGroup>
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