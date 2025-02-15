interface Props {
    label: string;
    style: "primary" | "secondary";
    color: "brand" | "black" | "white";
    size: "rg" | "lg";
}

export default function Button({ label, style, color, size }: Props) {
    return (
        <button
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
            } ${
                size === "rg" ? "text-rg" : size === "lg" && "text-lg"
            } font-league uppercase`}
        >
            {label}
        </button>
    );
}
