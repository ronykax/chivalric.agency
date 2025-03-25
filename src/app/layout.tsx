import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Chivalric Agency",
    description:
        "Chivalric is a full-service social media management agency specializing in creating and maintaining online spaces here on the internet. We transform your online presence into a thriving and engaging community.",
    openGraph: {
        title: "Chivalric Agency",
        description:
            "Chivalric is a full-service social media management agency specializing in creating and maintaining online spaces here on the internet. We transform your online presence into a thriving and engaging community.",
        images: [
            {
                url: "/chivalric-logo.png",
                width: 512,
                height: 512,
                alt: "Chivalric Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Chivalric Agency",
        description:
            "Chivalric is a full-service social media management agency specializing in creating and maintaining online spaces here on the internet. We transform your online presence into a thriving and engaging community.",
        images: ["/chivalric-logo.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
