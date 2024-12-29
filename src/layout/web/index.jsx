import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function WebLayout() {
    const [showSubscription, setShowSubscription] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight >= documentHeight - 50) {
            setShowSubscription(true);
        } else {
            setShowSubscription(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Toaster />
            <Header />
            <Outlet />
            {showSubscription && <Footer />}
        </div>
    );
}
