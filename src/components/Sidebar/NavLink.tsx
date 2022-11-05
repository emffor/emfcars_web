import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { Link } from "react-router-dom";
interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType; //quando passa o nome de um componente, ele já sabe que é um elemento
    children: ReactNode;
    color?: string;
    href: string;
}

export function NavLink({ icon, children, color, href, ...rest }: NavLinkProps) {
    return (
        <Link to={href}>
            <ChakraLink display="flex" alignContent="center" {...rest}>
                <Icon as={icon} fontSize="20" color={color} />
                <Text ml="4" fontWeight="medium"> {children} </Text>
            </ChakraLink>
        </Link>
    );
}