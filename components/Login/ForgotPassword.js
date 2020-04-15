import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

// styled components
import { Field, Form, Subtitle, StyledButton } from './styled'
import Logo from '../Logo'

function ForgotPassword() {
  const [email, setEmail] = useState('thommorais@gmail.com')

  function updateEmail(value) {
    setEmail(value)
  }

  return (
    <Form>
      <Logo />
      <Field>
        <Subtitle>
          Perdeu sua senha? Digite seu nome de usuário ou endereço de e-mail.
          Você receberá um link por e-mail para criar uma nova senha.
        </Subtitle>
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

      <Field row justify="center" centered>
        <StyledButton mode="contained" compact>
          Entrar
        </StyledButton>
      </Field>
    </Form>
  )
}

export default ForgotPassword
