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

interface IEditTransmissionSchema {
    name: string;
    description: string;
}

const EditTransmissionFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    description: yup.string().required('Descrição é obrigatório'),
})

export function EditTransmission() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<IEditTransmissionSchema>({
        resolver: yupResolver(EditTransmissionFormSchema)
    });

    const { errors } = formState;

    const handleEditTransmission: SubmitHandler<IEditTransmissionSchema> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);
    }

    function handleBack() {
        navigate('/cambios');
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
                onSubmit={handleSubmit(handleEditTransmission)}
            >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.50" p={["6", "8"]}>
                    <Heading
                        size="lg"
                        fontWeight="normal"
                    >
                        Cadastrar Tipo de Câmbio
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <Input
                            label="Nome do Câmbio"
                            type="text"
                            error={errors.name}
                            {...register('name')}
                        />
                        <Input
                            label="Descrição do Câmbio"
                            type="text"
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