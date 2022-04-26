import { AuthenticationProvider } from 'app/features/auth/AuthContext'
import React from 'react'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { DataProvider } from './react-query'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticationProvider>
      <DataProvider>
        <NavigationProvider>
          <Dripsy>{children}</Dripsy>
        </NavigationProvider>
      </DataProvider>
    </AuthenticationProvider>
  )
}
