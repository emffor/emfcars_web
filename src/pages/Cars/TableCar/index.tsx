import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Icon,
    Td,
    Text,
    Tr,
    useBreakpointValue
} from "@chakra-ui/react";

import { BsFillTrashFill } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { ICarDTO } from "../../../dtos/ICarDTO";

interface Props {
    data: ICarDTO;
    onClickEdit: () => void;
    onClickDelete: () => void;
}

export function TableCar({ data, onClickEdit, onClickDelete }: Props) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Tr justifyContent="center" alignItems={"center"}>
            <Td px={["4", "4", "6"]} width="8" pt="3" pb="3">
                <Checkbox colorScheme="red" borderColor='gray' />
            </Td>
            <Td>
                <Box>
                    <Text fontWeight="500" color="gray.500">{data.model}</Text>
                </Box>
            </Td>
            <Td>
                <Box>
                    <Text fontWeight="500" color="gray.500">{data.Brands.name}</Text>
                </Box>
            </Td>
            <Td>
                <Box>
                    <Text fontWeight="500" color="gray.500">{data.Transmissions.name}</Text>
                </Box>
            </Td>
            {
                isWideVersion && (
                    <Td>
                        <Box>
                            <Text fontWeight="500" color="gray.500">{data.color}</Text>
                        </Box>
                    </Td>
                )
            }
            {
                isWideVersion && (
                    <Td>
                        <Box>
                            <Text fontWeight="500" color="gray.500">{data.creation_year}</Text>
                        </Box>
                    </Td>
                )
            }
            {
                isWideVersion && (
                    <Td>
                        <Box>
                            <Text fontWeight="500" color="gray.500">{data.creation_year}</Text>
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
    );
}