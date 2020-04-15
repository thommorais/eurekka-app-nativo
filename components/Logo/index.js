import React from 'react'
import { LogoWrapper, Image } from './styled'

const DisplayAnImage = () => {
  return (
    <LogoWrapper>
      <Image source={require('../../assets/logo-eurekka.png')} />
    </LogoWrapper>
  )
}

export default DisplayAnImage
