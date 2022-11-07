import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent, number, onPageChange }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="green"
                disabled
                color={"white"}
                _disabled={{
                    bg: 'green.500',
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
            onClick={() => onPageChange(number)}

        >
            {number}
        </Button>
    );
}