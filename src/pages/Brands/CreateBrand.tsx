import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from "react-hook-form";

import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    VStack
} from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

interface ICreateBrandSchema {
    name: string;
    description: string;
}

const CreateBrandSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    description: yup.string().required('Descrição é obrigatório'),
})

export function CreateBrand() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<ICreateBrandSchema>({
        resolver: yupResolver(CreateBrandSchema)
    });

    const { errors } = formState;

    const handleCreateCar: SubmitHandler<ICreateBrandSchema> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);
    }

    function handleBack() {
        navigate('/marcas');
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

                <Box flex="1" borderRadius={8} bg="gray.50" p={["6", "8"]}>
                    <Heading
                        size="lg"
                        fontWeight="normal"
                    >
                        Cadastrar Marca
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <Input
                            label="Nome da Marca"
                            error={errors.name}
                            {...register('name')}
                        />
                        <Input
                            label="Descrição da Marca"
                            error={errors.description}
                            {...register('description')}
                        />
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
                                type="submit"
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