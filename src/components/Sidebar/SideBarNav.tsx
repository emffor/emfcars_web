import { Stack } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

import { RiDashboardLine } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { GiBigGear } from "react-icons/gi";
import { TiSocialLastFmCircular } from "react-icons/ti";

export function SideBarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title={"GERAL"}>
                <NavLink icon={RiDashboardLine} color="green.500" href='/dashboard'>Dashboard</NavLink>
            </NavSection>

            <NavSection title={"FUNCIONALIDADES"}>
                <NavLink
                    icon={FaCarSide}
                    color="green.500"
                    href='/carros'
                >
                    Carros
                </NavLink>
                <NavLink icon={TiSocialLastFmCircular} color="green.500" href='/marcas'>Marcas</NavLink>
                <NavLink icon={GiBigGear} color="green.500" href='/cambios'>Câmbios</NavLink>
            </NavSection>
        </Stack>
    );
}