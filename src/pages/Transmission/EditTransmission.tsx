import { useNavigate, useParams } from "react-router-dom";

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
import api from "../../services/api";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Form/Loading";


export function EditTransmission() {
    const navigate = useNavigate();
    const params = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    function handleBack() {
        navigate('/cambios');
    }

    async function handleUpdateTransmission() {
        if (isDisabled === true) {
            return alert('Aperte em editar para desbloquear os campos');
        }

        setIsLoading(true);

        const data = {
            name,
            description
        }

        await api.put(`/transmissions/${params.id}`, data)
            .then(response => {
                console.log(response);
                alert('Câmbio atualizado com sucesso!');
                navigate('/cambios');
            })
            .catch(error => {
                console.log(error.response.data.message);
                alert("Editar o câmbio falhou, câmbio já existe ou não foi editado!");
            })
            .finally(() => {
                setIsLoading(false);
            })
    }


    useEffect(() => {
        async function handleFetchTransmission() {
            await api.get(`/transmissions/${params.id}`)
                .then(response => {
                    setName(response.data[0].name);
                    setDescription(response.data[0].description);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
        handleFetchTransmission();
    }, [])

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
                        justifyContent={['space-between']}
                        display="flex"
                    >
                        Editar Tipo de Câmbio

                        <Button
                            bg={"yellow.600"}
                            color={'white'}
                            px={["4", "6"]}
                            onClick={() => setIsDisabled(false)}
                        >
                            Editar
                        </Button>
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />
                    {
                        isLoading ?
                            (
                                <Box w={"100%"} h={"25vh"}>
                                    <Loading />
                                </Box>
                            )
                            : (
                                <VStack>
                                    <Input
                                        label="Nome do Câmbio"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        isDisabled={isDisabled}
                                    />

                                    <Input
                                        label="Descrição do Câmbio"
                                        type="text"
                                        name="description"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        isDisabled={isDisabled}
                                    />
                                </VStack>
                            )
                    }

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
                                onClick={handleUpdateTransmission}
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