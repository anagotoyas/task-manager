import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

function Layout() {
    return (
        <Container>
            <Sidebar />
            <Content>
				<Navbar/>
                <Outlet />
            </Content>
        </Container>
    );
}
const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 32px;
	height: 100%;
	padding: 32px;
	overflow: hidden;
	height: 100vh;
`;


const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 100%;
	height: full;
	overflow: hidden;
`;


export { Layout }