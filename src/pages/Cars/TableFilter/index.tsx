import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Icon,
    Td,
    Text,
    Tr,
    useBreakpointValue,
    CheckboxProps,
    Table,
    Thead,
    Th,
    Tbody,
    Heading
} from "@chakra-ui/react";

import { BsFillTrashFill } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { Empty } from "../../../components/Empty";
import { IBrandCarDTO } from "../../../dtos/IBrandCarDTO";
import { ICarDTO } from "../../../dtos/ICarDTO";

interface Props {
    data: IBrandCarDTO;
}

export function TableFilter({ data }: Props) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <>
            <Text
                fontSize={"20"}
                fontWeight={"500"}
                mb="5"
                bg={"yellow.500"}
                pl={"5"}
                color={"gray.600"}
                borderRadius={"md"}
                mt="5"
            >
                {data.name}
            </Text>

            <Table
                colorScheme="red"
                size="sm"
                variant="simple"
                color="gray.500"
            >
                <Thead>
                    <Tr>
                        <Th px={["4", "4", "6"]} color="gray.900" width="8"></Th>
                        <Th>Modelo</Th>
                        <Th>Cor</Th>
                        {isWideVersion && <Th>Ano de Fabricação</Th>}
                        {isWideVersion && <Th>Ano do Modelo</Th>}
                        <Th w={"8"}></Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        data.Cars.map(car => (
                            <Tr justifyContent="center" alignItems={"center"}>
                                <Td px={["4", "4", "6"]} width="8" pt="3" pb="3">
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="500" color="gray.500">
                                            {car.model}
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="500" color="gray.500">
                                            {car.color}
                                        </Text>
                                    </Box>
                                </Td>
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Box>
                                                <Text fontWeight="500" color="gray.500">
                                                    {car.creation_year}
                                                </Text>
                                            </Box>
                                        </Td>
                                    )
                                }
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Box>
                                                <Text fontWeight="500" color="gray.500">
                                                    {car.model_year}
                                                </Text>
                                            </Box>
                                        </Td>
                                    )
                                }
                                <Td>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </>
    );
}