"use client";
import BarsThree from "./icons/bars-three";

export default function Navbar() {
    return (
        <div className="fixed w-full z-40 p-4 bg-brand border-black border-b-2 text-black flex items-center justify-between">
            <img
                className="h-8 w-auto"
                src="/branding/chivalric-wtrmrk-no.svg"
                alt="logo"
            />
            <button
                onClick={() => {
                    /* open the menu */
                }}
            >
                <BarsThree />
            </button>
        </div>
    );
}
