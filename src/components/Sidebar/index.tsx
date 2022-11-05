import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { GiBigGear } from "react-icons/gi";
import { TiFeather } from "react-icons/ti";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.600"
                        fontSize="small"
                    >
                        GERAL
                    </Text>
                    <Stack
                        spacing="4"
                        mt="8"
                        align="stretch"
                    >
                        <Link
                            display="flex"
                            alignItems="center"
                            py="1"
                        >
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                Dashboard
                            </Text>
                        </Link>

                    </Stack>
                </Box>

                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.600"
                        fontSize="small"
                    >
                        FUNCIONALIDADES
                    </Text>
                    <Stack
                        spacing="4"
                        mt="8"
                        align="stretch"
                    >
                        <Link
                            display="flex"
                            alignItems="center"
                            py="1"
                        >
                            <Icon as={GiBigGear} fontSize="20" />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                Tipo de Câmbio
                            </Text>
                        </Link>

                        <Link
                            display="flex"
                            alignItems="center"
                            py="1"
                        >
                            <Icon as={TiFeather} fontSize="20" />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                Marca de Veículo
                            </Text>
                        </Link>

                        <Link
                            display="flex"
                            alignItems="center"
                            py="1"
                        >
                            <Icon as={FaCarSide} fontSize="20" />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                Carros
                            </Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}