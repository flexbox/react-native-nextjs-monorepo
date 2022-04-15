import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from 'app/features/auth/LoginScreen'
import { TermsScreen } from 'app/features/auth/TermsScreen'

const Stack = createNativeStackNavigator<{
  login: undefined
  terms: undefined
}>()

export function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="terms"
        component={TermsScreen}
        options={{
          title: 'Terms',
        }}
      />
    </Stack.Navigator>
  )
}
