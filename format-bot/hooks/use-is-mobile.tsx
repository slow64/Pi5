"use client"

import * as React from "react"

// Definindo breakpoints para diferentes tamanhos de tela
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export type BreakpointKey = keyof typeof BREAKPOINTS

// Hook para verificar se a tela é menor que um determinado breakpoint
export function useBreakpoint(breakpoint: BreakpointKey): boolean {
  const [isSmaller, setIsSmaller] = React.useState<boolean>(false)

  React.useEffect(() => {
    const checkSize = () => {
      setIsSmaller(window.innerWidth < BREAKPOINTS[breakpoint])
    }

    // Verificar tamanho inicial
    checkSize()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [breakpoint])

  return isSmaller
}

// Hook para verificar se é um dispositivo móvel (menor que md)
export function useIsMobile(): boolean {
  return useBreakpoint("md")
}

// Hook para verificar se é um tablet (entre md e lg)
export function useIsTablet(): boolean {
  const smallerThanLg = useBreakpoint("lg")
  const largerThanMd = !useBreakpoint("md")

  return smallerThanLg && largerThanMd
}

// Hook para verificar se é um desktop (maior que lg)
export function useIsDesktop(): boolean {
  const isLargerThanLg = !useBreakpoint("lg")

  return isLargerThanLg
}
