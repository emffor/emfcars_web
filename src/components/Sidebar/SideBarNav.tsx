import { Stack } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

import { RiDashboardLine } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { GiBigGear } from "react-icons/gi";
import { TiSocialLastFmCircular } from "react-icons/ti";
import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext';

export function SideBarNav() {
    const { SideOnClose } = useSidebarDrawer();

    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title={"GERAL"}>
                <NavLink
                    icon={RiDashboardLine}
                    color="green.500"
                    href='/dashboard'
                    onClick={SideOnClose}
                //se ativo for true, ele vai colocar o color como green.500
                //se ativo for false, ele vai colocar o color como gray.400
                >
                    Dashboard
                </NavLink>
            </NavSection>

            <NavSection title={"FUNCIONALIDADES"}>
                <NavLink
                    icon={FaCarSide}
                    color="green.500"
                    href='/carros'
                    onClick={SideOnClose}
                >
                    Carros
                </NavLink>
                <NavLink
                    icon={TiSocialLastFmCircular}
                    color="green.500"
                    href='/marcas'
                    onClick={SideOnClose}
                >
                    Marcas
                </NavLink>
                <NavLink
                    icon={GiBigGear}
                    color="green.500"
                    href='/cambios'
                    onClick={SideOnClose}
                >
                    Câmbios
                </NavLink>
            </NavSection>
        </Stack>
    );
}