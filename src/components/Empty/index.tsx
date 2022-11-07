import { Badge, Flex, Td, Text, Tr, VStack } from "@chakra-ui/react";

interface Props {
    title: string;
    subtitle: string;
}

export function Empty({ title, subtitle }: Props) {
    return (
        <VStack display='flex' w='100vh' h={'50'} justify={'center'} align={'center'} my={'10'}>
            <Text fontSize='xl' fontWeight='bold'>
                {title}
            </Text>
            <Badge ml='1' fontSize='0.8em' colorScheme='green'>
                {subtitle}
            </Badge>
        </VStack>
    );
}