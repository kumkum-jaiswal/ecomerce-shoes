import { Outlet } from "react-router-dom";
import TopMenu from "./TopMenu";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const Layout = () => {
    return ( 
        <>
        <Container>
            <TopMenu/>
            <Outlet/>
            <br/>
            <Footer/>
            </Container>
        </>
     );
}
 
export default Layout;