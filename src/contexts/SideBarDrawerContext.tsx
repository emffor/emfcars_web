import { createContext, ReactNode, useContext, useState } from "react";
interface SideBarDrawerProviderData {
    children: ReactNode;
}

type SideBarDrawerContextData = {
    isOpen: boolean;
    SideOnOpen(): void;
    SideOnClose(): void;
};

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({ children }: SideBarDrawerProviderData) {
    const [isOpen, setIsOpen] = useState(false);

    function SideOnOpen() {
        setIsOpen(true);
    }

    function SideOnClose() {
        setIsOpen(false);
    }

    return (
        <SideBarDrawerContext.Provider value={{ isOpen, SideOnOpen, SideOnClose }}>
            {children}
        </SideBarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext);


