import { Dimensions } from 'react-native'

function tiltCalcs({ x, y, z }) {
  const { width, height } = Dimensions.get('window')

  return {
    position: 'absolute',
    height,
    width,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
}

export default tiltCalcs
