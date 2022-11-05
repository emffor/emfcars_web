import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { BannerGitHub } from "./BannerGitHub";
import { SearchBox } from "./SearchBox";

export function Header() {
    const isWideVersion = useBreakpointValue({});

    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1480}
            height="20"
            marginX="auto"
            marginTop="4"
            paddingX="6"
            alignItems="center"
        >
            <Text
                fontSize={['2xl', '3xl']}
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
                color={'green.500'}
            >
                emfcars
                <Text as="span" ml="1" color="yellow.500">.</Text>
            </Text>

            <SearchBox />
            <BannerGitHub showProfileData={isWideVersion} />
        </Flex>
    );
}