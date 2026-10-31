import React from "react";
import closingImg from "../../assets/closing.jpg";

export default function ClosingPage() {
    return (
        <main className="w-screen h-screen min-h-screen bg-black flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden select-none">
            <img
                src={closingImg}
                alt="Website Closing Notice"
                className="max-w-full max-h-full w-auto h-auto object-contain pointer-events-none shadow-2xl"
                loading="eager"
            />
        </main>
    );
}
