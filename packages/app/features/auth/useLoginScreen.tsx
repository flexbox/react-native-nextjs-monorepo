import { useNavigation } from '@react-navigation/native'

export const useLoginScreen = () => {
    const navigation = useNavigation()

  const navigateToTerms = () => {
    navigation.navigate("Terms")
  }

  return navigateToTerms
}
