import { items, socials } from "@/utils/links";
import Button from "./Button";

export default function Footer() {
    return (
        <div className="pt-3 px-6 pb-12 bg-brand border-t-2 border-black flex flex-col gap-6">
            <img
                className="w-[180px] h-auto"
                src="/branding/chivalric-wtrmrk-no.svg"
                alt="logo"
            />
            <div className="flex flex-col gap-4">
                <span className="font-garamond text-lg leading-lg">
                    All Rights Reserved © 2025
                </span>
                {items.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="font-garamond text-lg leading-lg underline underline-offset-[3px] decoration-[1.5px]"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
            <div className="flex justify-center">
                <ul className="flex gap-1">
                    {socials.map((item, index) => (
                        <li className="" key={index}>
                            <a href={item.url} aria-label={item.alt}>
                                <Button
                                    color="white"
                                    size="rg"
                                    style="secondary"
                                    icon={item.icon()}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
