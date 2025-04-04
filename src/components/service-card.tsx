"use client";

import PlusLarge from "./icons/plus-large";
import React, { useState } from "react";

interface Props {
    heading: string;
    description: string;
    icon: React.JSX.Element;
    bg: string;
}

export default function ServiceCard({ heading, description, icon, bg }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                backgroundImage: !isOpen
                    ? `url(${bg})`
                    : "",
            }}
            className={`h-96 ${
                isOpen && "bg-brand3"
            } p-6 min-w-64 max-w-64 flex flex-col gap-6 shadow-brand2`}
        >
            <div className="flex justify-between">
                {icon}
                <button
                    className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <PlusLarge />
                </button>
            </div>
            <div className="flex flex-col gap-6 h-full">
                <p className="text-rg leading-rg text-white font-garamond h-full">
                    {isOpen && description}
                </p>
                <div className="font-league uppercase text-white text-xl leading-xl">
                    {heading}
                </div>
            </div>
        </div>
    );
}
