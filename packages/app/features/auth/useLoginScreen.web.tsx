import { useRouter } from 'solito/router'

export const useLoginScreen = () => {
  const { push } = useRouter()

  const navigateToTerms = () => {
    push('/terms/')
  }

  return navigateToTerms
}
