import Header from "./components/header";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer";
import {Toaster} from "react-hot-toast";
import {useLoading} from "../../store/hooks/hooks";

export default function WebLayout() {

    const loading = useLoading()

    return (
        <div className={`w-screen h-auto ${loading > 0 ? "bg-background" : "bg-background"}`}>
            <Toaster/>
            <Header/>
            <Outlet />
           {loading === 0 && <Footer/>}
        </div>
    )
}