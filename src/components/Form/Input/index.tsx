import {
    Input as ChakraInput,
    FormLabel,
    FormControl,
    InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            {/* Se existir label mostrar*/}
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                name={name}
                id={name}
                focusBorderColor='gray.500'
                bgColor='gray.100'
                variant={"filled"}
                size="lg"
                _hover={{
                    bgColor: 'gray.50'
                }}
                {...rest}
            />
        </FormControl>
    );
}