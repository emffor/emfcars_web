

import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, HStack, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function EditBrand() {

    const navigate = useNavigate();

    function handleBack() {
        navigate('/marcas');
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.50" p={["6", "8"]}>
                    <Heading
                        size="lg"
                        fontWeight="normal"
                    >
                        Cadastrar Marca
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <Input name="Nome da Marca" label="Nome da Marca" />
                        <Input name="Descrição da Marca" label="Descrição da Marca" />
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button
                                as="a"
                                colorScheme="red"
                                color={"white"}
                                onClick={handleBack}
                            >
                                Cancelar
                            </Button>

                            <Button
                                as="a"
                                colorScheme="green"
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}