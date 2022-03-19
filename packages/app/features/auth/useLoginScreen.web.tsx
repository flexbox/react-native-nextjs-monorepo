import { useRouter } from 'solito/router'
import React from 'react'

export const useLoginScreen = () => {
  const { push } = useRouter()

  const navigateToTerms = () => {
    push('/terms/')
  }

  return navigateToTerms
}
