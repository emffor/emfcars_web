import { Box, Icon, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { NavLink as NavLik } from "react-router-dom";
interface Props {
    icon: ElementType; //quando passa o nome de um componente, ele já sabe que é um elemento
    children: ReactNode;
    color?: string;
    href: string;
    onClick?: () => void;
}

export function NavLink({ icon, children, color, href, onClick }: Props) {
    return (
        <NavLik to={href} onClick={onClick}>
            <Box display="flex" alignContent="center" _hover={{
                color: color,
                textDecoration: "none"
            }}>
                <Icon as={icon} fontSize="20" color={color} />
                <Text ml="4" fontWeight="medium"> {children} </Text>
            </Box>
        </NavLik>


    );
}

