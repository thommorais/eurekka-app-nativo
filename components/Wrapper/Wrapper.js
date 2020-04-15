import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider as PaperProvider } from 'react-native-paper'

import { StyledWrapper } from './styled'
import { theme, paperTheme } from '../../theme'

function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={paperTheme}>
        <StyledWrapper>{children}</StyledWrapper>
      </PaperProvider>
    </ThemeProvider>
  )
}

export default Wrapper
