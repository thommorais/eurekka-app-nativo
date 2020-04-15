import styled from 'styled-components'
import { Button } from 'react-native-paper'

export const Field = styled.View`
  margin-bottom: 12px;
  ${({ row }) => row && 'flex-direction:row'};
  ${({ justify }) => (justify ? `justify-content: ${justify}` : '')}
  ${({ centered }) => centered && 'align-items: center'}
`
export const Form = styled.View`
  padding: 0 24px;
  flex: 1;
  justify-content: center;
`
export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`

export const Subtitle = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`

export const StyledButton = styled(Button)`
  padding: 6px 24px;
`
