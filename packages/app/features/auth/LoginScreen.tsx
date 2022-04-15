import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Platform } from 'react-native'
import { Button, Colors, TextInput } from 'react-native-paper'
import { useRouter } from 'solito/router'
import { useAuthentication } from './AuthContext'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisble, setIsVisible] = useState(true)

  const { push } = useRouter()

  const navigateToTerms = () => {
    push('/terms/')
  }

  const { setUser } = useAuthentication()
  function handleLogin() {
    setUser(true)
    if(Platform.OS ==='web'){
      push('/home')
    }
  }

  function toggleSecureIcon() {
    setIsVisible(!isVisble)
  }

  return (
    <View>
      <View style={styles.content}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry={isVisble}
          onChangeText={(value) => setPassword(value)}
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              name={isVisble ? 'eye-off' : 'eye'}
            />
          }
        />
        <Button
          onPress={handleLogin}
          style={styles.submitButton}
          mode="contained"
        >
          Login
        </Button>
        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={styles.tocText}>
            by login you accept the Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16,
    backgroundColor: Colors.purple500,
  },
  tocText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.grey500,
  },
})
