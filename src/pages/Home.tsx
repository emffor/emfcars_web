import { Button, Flex } from "@chakra-ui/react";
import { LogoAnimation } from "../components/LogoAnimation";

export function Home() {
    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Flex as="form" width="100%" maxWidth={500} flexDirection="column">
                <LogoAnimation mb={10} />
                <Button
                    type="submit"
                    colorScheme={["red", "yellow"][Math.floor(Math.random() * 2)]}
                    m={20}
                    size="lg"
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}