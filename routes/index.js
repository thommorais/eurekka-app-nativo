import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// login routes
import Login from './Login'

const Stack = createStackNavigator()

function Routes() {
  const [userToken] = useState(null)
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {userToken === null ? (
          <>
            <Stack.Screen name="SignIn" component={Login} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
