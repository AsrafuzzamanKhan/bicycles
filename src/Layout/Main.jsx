import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <ScrollRestoration />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;