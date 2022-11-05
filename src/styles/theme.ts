import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        yellow: {
            "600": "#FFBA08",
            "500": "#FDCF46",
        },
        red: {
            "600": "#E43827",
            "500": "#E05143",
        },
        green: {
            "600": "#4F5D24",
            "500": "#778A3E",
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'whiteAlpha.900',
                color: 'gray.800'
            }
        }
    }
})