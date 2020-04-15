import React, { useRef } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native'

// components
import { ForgotPassword } from '../components/Login'

function LoginView() {
  const plataform = useRef(Platform.OS === 'ios' ? 'padding' : null)
  const image = require('../assets/bg-lamps.jpg')

  return (
    <KeyboardAvoidingView
      behavior={plataform.current}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.select({ android: 500 })}
      enabled
    >
      <StatusBar barStyle="light-content" />
      <ImageBackground source={image} style={styles.image}>
        <ForgotPassword />
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export default LoginView
