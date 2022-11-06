import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Select,
    SimpleGrid,
    VStack
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

interface ICreateCarSchema {
    modelo: string;
    cor: string;
    ano_modelo: number;
    ano_fabricacao: number;
}

const CreateCarFormSchema = yup.object().shape({
    modelo: yup.string().required('Modelo é obrigatório'),
    cor: yup.string().required('Cor é obrigatório'),
    ano_modelo: yup.string().required('Ano do Modelo é obrigatório'),
    ano_fabricacao: yup.string().required('Ano de Fabricação é obrigatório'),
})

export function CreateCar() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm<ICreateCarSchema>({
        resolver: yupResolver(CreateCarFormSchema)
    });

    const { errors } = formState;

    const handleCreateCar: SubmitHandler<ICreateCarSchema> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);
    }

    function handleBack() {
        navigate('/carros');
    }

    return (
        <Box>
            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
                as='form'
                onSubmit={handleSubmit(handleCreateCar)}
            >
                <Sidebar />

                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.50"
                    p={["6", "8"]}
                >
                    <Heading
                        size="lg"
                        fontWeight="normal"
                    >
                        Cadastrar Carro
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                label="Modelo do veículo"
                                type="text"
                                {...register('modelo')}
                                error={errors.modelo}
                            />

                            <Input
                                label="Cor do veículo"
                                type={'text'}
                                {...register('cor')}
                                error={errors.cor}
                            />



                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                label="Ano de fabricação"
                                type={'number'}
                                {...register('ano_fabricacao')}
                                error={errors.ano_fabricacao}
                            />

                            <Input
                                label="Ano do Modelo"
                                type={'number'}
                                {...register('ano_modelo')}
                                error={errors.ano_modelo}
                            />

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
                            <Button
                                as="a"
                                colorScheme="red"
                                color={"white"}
                                onClick={handleBack}
                            >
                                Cancelar
                            </Button>

                            <Button
                                colorScheme="green"
                                type="submit"
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