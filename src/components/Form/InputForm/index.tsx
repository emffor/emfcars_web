import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
    Input as ChakraInput,
    FormLabel,
    FormControl,
    InputProps as ChakraInputProps,
    FormErrorMessage
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
    ({ name, label, error, ...rest }, ref) => {
        return (
            <FormControl>
                {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

                < ChakraInput
                    name={name}
                    id={name}
                    focusBorderColor='gray.500'
                    bgColor='gray.100'
                    variant={"filled"}
                    _hover={{
                        bgColor: 'gray.200'
                    }
                    }
                    size="lg"
                    ref={ref}
                    {...rest}
                />

                {!!error && (
                    <FormErrorMessage>{error}</FormErrorMessage>
                )}

            </FormControl>
        );
    }

export const InputForm = forwardRef(InputBase);