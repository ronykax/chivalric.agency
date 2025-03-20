import React from "react";
import CirclePlaceholderOn from "./icons/circle-placeholder-on";

interface Props {
    label?: string;
    style: "primary" | "secondary";
    color: "brand" | "black" | "white";
    size: "rg" | "lg";
    icon?: React.JSX.Element;
    width?: "full" | "fit";
    type?: HTMLButtonElement["type"];
}

export default function Button({
    label,
    style,
    color,
    size,
    icon,
    width = "fit",
    type = "button",
}: Props) {
    return (
        <button
            type={type}
            className={`${
                style === "primary"
                    ? color === "brand"
                        ? "bg-brand"
                        : color === "black"
                        ? "bg-black"
                        : color === "white" && "bg-white"
                    : style === "secondary" && "bg-transparent"
            } ${
                color === "brand"
                    ? "text-black"
                    : color === "white"
                    ? "text-black"
                    : color === "black" && "text-white"
            } ${
                style === "primary"
                    ? size === "rg"
                        ? "px-3 py-2"
                        : size === "lg" && "px-4 py-3"
                    : style === "secondary" &&
                      (size === "rg" ? "px-3 py-1" : "px-3 py-2")
            } ${size === "rg" ? "text-rg" : size === "lg" && "text-lg"} ${
                width === "full" ? "w-full" : width === "fit" && "w-fit"
            }
            font-league uppercase flex justify-center`}
        >
            <div className="flex gap-2 items-center">
                {label && label}
                {icon}
            </div>
        </button>
    );
}
