import { Avatar, Box, color, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ImGithub } from "react-icons/im";

interface ProfileProps {
    showProfileData?: boolean;
}

export function BannerGitHub({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center"
            bg="green.500"
            p="1"
            borderRadius="lg"
            ml="auto"
            _hover={{
                bgColor: 'green.600'
            }}
        >
            {
                showProfileData && (
                    <Box
                        display="flex"
                        textAlign="start"
                        flexDir="column"
                        mr="4"
                        pr="4"
                        py="1"
                        borderColor="gray.100"
                        borderRightWidth="1px"
                    >
                        <Link
                            color="gray.100"
                            fontWeight="600"
                            fontSize="13"
                            pl="2"
                            href="https://github.com/emffor/emfcars_api"
                            target="_blank"
                        >
                            /emfcars_api
                        </Link>
                        <Link
                            color="gray.100"
                            fontWeight="600"
                            fontSize="13"
                            pl="2"
                            href="https://github.com/emffor/emfcars_web"
                            target="_blank"
                        >
                            /emfcars_web
                        </Link>
                    </Box>
                )
            }

            <Link
                href="https://github.com/emffor/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon
                    as={ImGithub}
                    fontSize="35"
                    color="gray.100"
                    pt="1"
                    pr="2"
                />
            </Link>
        </Flex>
    );
}