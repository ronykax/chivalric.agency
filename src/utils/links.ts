import Behance from "@/components/icons/behance";
import Bluesky from "@/components/icons/bluesky";
import Discord from "@/components/icons/discord";
import Growth from "@/components/icons/growth";
import HomeOpen from "@/components/icons/home-open";
import Instagram from "@/components/icons/instagram";
import Kofi from "@/components/icons/kofi";
import Script from "@/components/icons/script-2";
import Shield from "@/components/icons/shield";
import SuitcaseWork from "@/components/icons/suitcase-work";
import X from "@/components/icons/x";

interface Item {
    label: string;
    icon: () => React.JSX.Element;
    url: string;
    showOnDesktop?: boolean; // enable
}

interface Social {
    alt: string;
    icon: () => React.JSX.Element;
    url: string;
}

export const items: Item[] = [
    {
        label: "Home",
        icon: HomeOpen,
        url: "#",
    },
    {
        label: "Services",
        icon: Growth,
        url: "#services",
        showOnDesktop: true,
    },
    {
        label: "Portfolio",
        icon: SuitcaseWork,
        url: "#portfolio",
        showOnDesktop: true,
    },
    // {
    //     label: "About us",
    //     icon: HomeOpen,
    //     url: "#",
    //     showOnDesktop: true,
    // },
    {
        label: "Privacy",
        icon: Shield,
        url: "/privacy",
    },
    {
        label: "Terms",
        icon: Script,
        url: "/terms",
    },
];

export const socials: Social[] = [
    {
        alt: "X",
        icon: X,
        url: "https://x.com/chivalric.agency",
    },
    {
        alt: "Bluesky",
        icon: Bluesky,
        url: "https://bsky.app/profile/chivalric.agency",
    },
    {
        alt: "Discord",
        icon: Discord,
        url: "https://discord.gg/eZaZrU4rUb",
    },
    {
        alt: "Behance",
        icon: Behance,
        url: "https://www.behance.net/chivalricagency",
    },
    {
        alt: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/chivalricagency/",
    },
    {
        alt: "Ko-fi",
        icon: Kofi,
        url: "https://ko-fi.com/chivalricagency",
    },
];
