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
                focusBorderColor='yellow.500'
                bgColor='gray.50'
                variant={"filled"}
                _hover={{
                    bgColor: 'gray.100'
                }}
                size="lg"
                {...rest}
            />
        </FormControl>
    );
}