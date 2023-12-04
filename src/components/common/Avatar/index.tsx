import styled from 'styled-components'
import default_pic from '../../../assets/images/default_profile.jpg'

interface AvatarProps {
    src: string | null | undefined;
    size: number;
   
   
    }

export const Avatar = (props: AvatarProps) => {

    const { src, size} = props

    return  <StyledImg src={src || default_pic} size={size} alt="profile" /> 

}

const StyledImg = styled.img<AvatarProps>`

    width: ${(props) => props.size | 24}px;
    height: ${(props) => props.size | 24}px;
    border-radius: 50%;


`