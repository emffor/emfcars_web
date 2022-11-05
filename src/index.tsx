import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { SideBarDrawerProvider } from "./contexts/SideBarDrawerContext"
import { theme } from "./styles/theme"


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <SideBarDrawerProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </SideBarDrawerProvider>
  </React.StrictMode>,
)


