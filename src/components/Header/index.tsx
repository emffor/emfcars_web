import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { BannerGitHub } from "./BannerGitHub";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

export function Header() {
    const { SideOnOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    }, 'lg');

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

            {
                !isWideVersion && (
                    <IconButton
                        aria-label="Open navigation"
                        icon={<Icon as={RiMenuLine} />}
                        fontSize="24"
                        variant="unstyled"
                        onClick={SideOnOpen}
                        marginRight="2"
                    >

                    </IconButton>
                )
            }
            <Logo />

            {isWideVersion && <SearchBox />}

            <BannerGitHub showProfileData={isWideVersion} />
        </Flex>
    );
}