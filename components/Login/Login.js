import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

// styled components
import { Field, Form, Title, StyledButton } from './styled'
import Logo from '../Logo'

function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('thommorais@gmail.com')
  const [password, setPassword] = useState('')

  function updatePassword(value) {
    setPassword(value)
  }

  function updateEmail(value) {
    setEmail(value)
  }

  function forgotPassword() {
    navigation.navigate('ForgotPassword')
  }

  return (
    <Form>
      <Logo />
      <Field>
        <Title>Entre na sua conta:</Title>
      </Field>
      <Field>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={updateEmail}
          mode="outlined"
          autoCompleteType="email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </Field>

      <Field>
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={updatePassword}
          autoCompleteType="password"
          mode="outlined"
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </Field>

      <Field row justify="space-between" centered>
        <Button compact uppercase={false} onPress={forgotPassword}>
          Perdeu sua senha?
        </Button>

        <StyledButton mode="contained" compact>
          Entrar
        </StyledButton>
      </Field>
    </Form>
  )
}

export default Login
