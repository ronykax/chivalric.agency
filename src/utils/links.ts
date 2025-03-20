import Behance from "@/components/icons/behance";
import Bluesky from "@/components/icons/bluesky";
import Discord from "@/components/icons/discord";
import HomeOpen from "@/components/icons/home-open";
import Instagram from "@/components/icons/instagram";
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
        icon: HomeOpen,
        url: "#",
        showOnDesktop: true,
    },
    {
        label: "Portfolio",
        icon: HomeOpen,
        url: "#",
        showOnDesktop: true,
    },
    {
        label: "About us",
        icon: HomeOpen,
        url: "#",
        showOnDesktop: true,
    },
    {
        label: "Privacy",
        icon: HomeOpen,
        url: "#",
    },
    {
        label: "Terms",
        icon: HomeOpen,
        url: "#",
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
        url: "https://x.com/chivalric.agency",
    },
    {
        alt: "Discord",
        icon: Discord,
        url: "https://x.com/chivalric.agency",
    },
    {
        alt: "Behance",
        icon: Behance,
        url: "https://x.com/chivalric.agency",
    },
    {
        alt: "Instagram",
        icon: Instagram,
        url: "https://x.com/chivalric.agency",
    },
];
