import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuthentication } from 'app/features/auth/AuthContext'
import { LoginScreen } from 'app/features/auth/LoginScreen'
import { TermsScreen } from 'app/features/auth/TermsScreen'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { AuthNavigator } from './AuthNavigator'
import { HomeNavigator } from './HomeNavigator'

const Stack = createNativeStackNavigator<{
  'auth-stack': undefined
  'home-stack': undefined
}>()

export function NativeNavigation() {
  const { user } = useAuthentication();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="auth-stack" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="home-stack" component={HomeNavigator} />
      )}
    </Stack.Navigator>
  )
}
