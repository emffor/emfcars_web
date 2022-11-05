import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({ isCurrent, number }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="yellow"
                disabled
                color={"white"}
                _disabled={{
                    bg: 'red.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.100"
            color={"gray.500"}
            _hover={{
                bg: 'gray.200'
            }}

        >
            {number}
        </Button>
    );
}