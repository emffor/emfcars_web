import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarDrawerProviderData {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({ children }: SideBarDrawerProviderData) {
    const disclosure = useDisclosure();

    useEffect(() => {
        disclosure.onClose();
    }, []);

    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext);


