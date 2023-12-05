import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const Spinner = () => {
  return (
    <StyledSpinnerContainer>
    <Spin className="absolute"indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
</StyledSpinnerContainer>
  )
}

const StyledSpinnerContainer = styled.div`
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    z-index: 100;
	overflow: hidden;
`;

