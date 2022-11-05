import * as React from "react"

import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react"

import logo from "../../assets/logo/emfcars.svg";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const LogoAnimation = forwardRef<ImageProps, "img">((props, ref) => {

  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

  return <chakra.img animation={animation} src={logo} ref={ref} {...props} />
})



{/* <VStack spacing={8}>
          <LogoAnimation h="40vmin" pointerEvents="none" />
        </VStack> */}
