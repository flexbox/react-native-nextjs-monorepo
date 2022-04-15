import { AuthenticationProvider } from 'app/features/auth/AuthContext'
import React from 'react'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticationProvider>
      <NavigationProvider>
        <Dripsy>{children}</Dripsy>
      </NavigationProvider>
    </AuthenticationProvider>
  )
}
