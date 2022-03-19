import { useNavigation } from '@react-navigation/native'
import React from 'react'

export const useLoginScreen = () => {
    const navigation = useNavigation()

  const navigateToTerms = () => {
    navigation.navigate("Terms")
  }

  return navigateToTerms
}
