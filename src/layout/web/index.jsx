import Header from "./components/header";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer";
import {Toaster} from "react-hot-toast";

export default function WebLayout() {

    return (
        <div>
            <Toaster/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
