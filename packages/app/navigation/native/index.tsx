import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from 'app/features/auth/LoginScreen'
import { TermsScreen } from 'app/features/auth/TermsScreen'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  terms: undefined
  login: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
