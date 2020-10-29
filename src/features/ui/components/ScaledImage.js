import { Image } from "react-native"
import styled from "styled-components"

const ScaledImage = styled(Image)`
  width: ${props => props.width * props.scale}px;
  height: ${props => props.height * props.scale}px;
`
export default ScaledImage
