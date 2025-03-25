import Image from "next/image";

interface Props {
    name: string;
    thumbnail: string;
    url: string;
}

export default function WorkCard({ name, thumbnail, url }: Props) {
    return (
        <a href={url}>
            <div className="h-36 min-w-64 relative">
                {/* Shadow */}
                <Image
                    className="w-full h-full absolute -bottom-2 -right-2"
                    src="/branding/shadow.png"
                    width={960}
                    height={540}
                    alt="shadow"
                />

                {/* Thumbnail */}
                <Image
                    className="w-full h-full relative"
                    src={thumbnail}
                    width={960}
                    height={540}
                    alt={name}
                />
            </div>
        </a>
    );
}
