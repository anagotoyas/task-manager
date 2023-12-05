
import { ToastContainer } from 'react-toastify';
import { Navigation } from '../navigation/Navigation'
import "react-toastify/dist/ReactToastify.css";
import { useGlobal } from '../context/GlobalContext';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


function App() {

	const { isLoading } = useGlobal()

	return (
		<>
			<Navigation />
			{isLoading && (
                    <StyledSpinnerContainer>
                        <Spin className="absolute"indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
                    </StyledSpinnerContainer>
                )}
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
}



export default App

const StyledSpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    z-index: 100;
	overflow: hidden;
`;
