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
    useBreakpointValue,
    VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

import { RiAddLine, RiArrowLeftUpFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Empty } from "../../components/Empty";
import { Loading } from "../../components/Form/Loading";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { IBrandCarDTO } from "../../dtos/IBrandCarDTO";
import { ICarDTO } from "../../dtos/ICarDTO";
import { Environment } from "../../environment";
import api from "../../services/api";
import { TableCar } from "./TableCar";
import { TableFilter } from "./TableFilter";

export function FilterBrand() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [emptyCars, setEmptyCars] = useState(0);

    const [page, setPage] = useState(1);

    const [brandsCars, setBrandsCars] = useState<IBrandCarDTO[]>([]);

    const [checkedCar, setCheckedCar] = useState<boolean>(false);
    const [selectedCarId, setSelectedCarId] = useState('');

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });


    function handleGoBack() {
        navigate('/carros');
    }

    useEffect(() => {
        async function loadBrandsCars() {
            await api.get('/brands/cars')
                .then((response) => {
                    setBrandsCars(response.data);
                    console.log(response.data);
                })

        }
        loadBrandsCars();
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
                        )
                        :
                        (
                            <Box flex="1" borderRadius={8} bg="gray.50" p="8" >
                                <Flex mb="8" justify="space-between" align="center">
                                    <Heading size={'md'} fontWeight="500">
                                        Filtrado por Marcas
                                    </Heading>
                                    <ButtonGroup>
                                        <Button
                                            size="sm"
                                            fontSize={"sm"}
                                            colorScheme="green"
                                            leftIcon={<Icon as={BsArrowLeft} fontSize="20" />}
                                            _hover={{
                                                bg: "green.600",
                                            }}
                                            onClick={handleGoBack}
                                        >
                                            Voltar
                                        </Button>
                                    </ButtonGroup>
                                </Flex>

                                {
                                    brandsCars.map((brand) => {
                                        return (
                                            <TableFilter
                                                key={brand.id}
                                                data={brand}
                                            />
                                        )
                                    })
                                }
                            </Box>
                        )
                }
            </Flex>
        </Box>
    );
}