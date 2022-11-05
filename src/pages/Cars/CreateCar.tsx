import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, HStack, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function CreateCar() {
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
                        Cadastrar Carro
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="Modelo do veículo" label="Modelo do veículo" />
                            <Input name="Cor do veículo" label="Cor do veículo" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="Ano de fabricação" label="Ano de fabricação" />
                            <Input name="Ano do Modelo" label="Ano do Modelo" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormControl>
                                <FormLabel htmlFor="email">Marca do veículo</FormLabel>
                                <Select placeholder='Marca do veículo' size='lg'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="email">Tipo de Câmbio</FormLabel>
                                <Select placeholder='Tipo de Câmbio' size='lg'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </FormControl>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button as="a" colorScheme="red" color={"white"}>
                                Cancelar
                            </Button>

                            <Button as="a" color={"white"} bg={"yellow.600"} >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}