
import { ToastContainer } from 'react-toastify';
import { Navigation } from '../navigation/Navigation'
import "react-toastify/dist/ReactToastify.css";
import { useGlobal } from '../context/GlobalContext';
import { Spinner } from '../components/common/Spinner';



function App() {

	const {isLoading}=useGlobal()


	return (
		<>
			<Navigation />
			{isLoading &&
				<Spinner/>
			}

			
		
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

