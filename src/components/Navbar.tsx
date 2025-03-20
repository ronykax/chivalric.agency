"use client";

import { useState } from "react";
import BarsThree from "./icons/bars-three";
import HomeOpen from "./icons/home-open";
import CrossLarge from "./icons/cross-large";
import X from "./icons/x";
import Bluesky from "./icons/bluesky";
import Discord from "./icons/discord";
import Behance from "./icons/behance";
import Instagram from "./icons/instagram";
import Button from "./Button";
import ArrowRight from "./icons/arrow-right";
import { items, socials } from "@/utils/links";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed z-40 w-full border-black border-b-2">
            <div className="px-4 py-4 bg-brand  text-black flex items-center justify-between">
                <img
                    className="h-8 w-auto"
                    src="/branding/chivalric-wtrmrk-no.svg"
                    alt="logo"
                />

                <button className="t:hidden" onClick={() => setOpen(!open)}>
                    {!open ? <BarsThree /> : <CrossLarge />}
                </button>

                <div className="hidden t:block">
                    <div className="flex gap-3">
                        {items.map(
                            (item, index) =>
                                item.showOnDesktop && (
                                    <Button
                                        label={item.label}
                                        style="secondary"
                                        color="white"
                                        size="rg"
                                        key={index}
                                    />
                                )
                        )}
                        <Button
                            label="Get in touch"
                            style="primary"
                            color="black"
                            size="rg"
                            icon={<ArrowRight />}
                        />
                    </div>
                </div>
            </div>

            <div className={`${open ? "visible" : "hidden"}`}>
                <div className="p-4 bg-brand">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <a
                                    className="px-3 py-2 flex justify-between text-black"
                                    href={item.url}
                                >
                                    <span className="font-league text-lg leading-lg uppercase">
                                        {item.label}
                                    </span>
                                    {item.icon()}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center mt-3">
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
            </div>
        </div>
    );
}
