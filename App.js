import React from 'react'
import Wrapper from './components/Wrapper'
import Routes from './routes'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

function App() {
  return (
    <Wrapper>
      <Routes />
    </Wrapper>
  )
}

export default App
