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
    CheckboxProps
} from "@chakra-ui/react";

import { BsFillTrashFill } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { IBrandDTO } from "../../../dtos/IBrandDTO";

interface Props extends CheckboxProps {
    data: IBrandDTO;
    onClickEdit?: () => void;
    onClickDelete?: () => void;
    onClickCheck?: () => void;
}

export function TableBrand({
    data,
    onClickEdit,
    onClickDelete,
    onClickCheck,
    ...rest
}: Props) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Tr justifyContent="center" alignItems={"center"}>
            <Td px={["4", "4", "6"]} width="8" pt="3" pb="3">
                <Checkbox
                    id={data.id}
                    colorScheme="red"
                    borderColor='gray'
                    value={data.id}
                    onChange={onClickCheck}
                    {...rest}
                />
            </Td>
            <Td>
                <Box>
                    <Text fontWeight="500" color="gray.500">
                        {data.name}
                    </Text>
                </Box>
            </Td>
            <Td>
                <Box>
                    <Text fontWeight="500" color="gray.500">
                        {data.description}
                    </Text>
                </Box>
            </Td>
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
                                    onClick={onClickEdit}
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
                                    onClick={onClickDelete}
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
                                    onClick={onClickEdit}
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
                                    onClick={onClickDelete}
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