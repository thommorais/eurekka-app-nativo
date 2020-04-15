import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../views/Login'
import ForgotPassword from '../views/ForgotPassword'

const Stack = createStackNavigator()

function Routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default Routes
