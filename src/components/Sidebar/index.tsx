import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";


import { SideBarNav } from "./SideBarNav";

export function Sidebar() {
    const { onOpen, onClose } = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={onOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.100" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SideBarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        );
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SideBarNav />
        </Box>
    );
}