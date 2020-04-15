import Reactotron from 'reactotron-react-native'
import { DefaultTheme } from 'react-native-paper'

const theme = {
  colors: {
    primary: '#ffe13b',
    gray: '#333',
    blueLink: '#5791c1',
    white: '#fff',
  },
}

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...theme.colors,
  },
}

Reactotron.log(paperTheme)

export { theme, paperTheme }
