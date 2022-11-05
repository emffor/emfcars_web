import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            colors: {
                gray: {
                    "900": "#181B23",
                    "800": "#1F2029",
                    "700": "#353646",
                    "600": "#4B4D63",
                    "500": "#616480",
                    "400": "#797D9A",
                    "300": "#9699B0",
                    "200": "#B3B5C6",
                    "100": "#D1D2DC",
                    "50": "#EEEEF2",
                },
                yellow: {
                    "600": "#FFBA08",
                    "500": "#FDCF46",
                },
                red: {
                    "600": "##E43827",
                    "500": "#E05143",
                },
                green: {
                    "600": "#4F5D24",
                    "500": "#778A3E",
                    "400": "#B7D461",
                }
            },
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