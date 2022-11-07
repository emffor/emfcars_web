import { Badge, Flex, Td, Text, Tr, VStack } from "@chakra-ui/react";

export function EmptyCar() {
    return (
        <VStack display='flex' w='100vh' h={'50'} justify={'center'} align={'center'} my={'10'}>
            <Text fontSize='xl' fontWeight='bold'>
                Nenhum carro encontrado
            </Text>
            <Badge ml='1' fontSize='0.8em' colorScheme='green'>
                Cadastrar Novo Carro
            </Badge>
        </VStack>
    );
}