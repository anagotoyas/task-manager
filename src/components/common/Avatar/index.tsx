import styled from 'styled-components'
import default_pic from '../../../assets/images/default_profile.jpg'

interface AvatarProps {
    src: string | null;
   
    }

export const Avatar = (props: AvatarProps) => {
    const { src } = props

  return (
    <StyledImg src={src || default_pic} alt="profile" />
  )
}

const StyledImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`