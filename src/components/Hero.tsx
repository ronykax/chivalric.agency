import Image from "next/image";
import Button from "./Button";
import ArrowRight from "./icons/arrow-right";

export default function Hero() {
    return (
        <div className="w-full bg-brand relative px-12 lg:px-48 pt-32 pb-64 flex flex-col gap-6 overflow-hidden">
            <span className="font-league text-2xl text-white leading-2xl uppercase">
                Create your
                <br />
                <span className="font-garamond italic lowercase">kingdom.</span>
            </span>

            <span className="font-garamond text-lg leading-lg">
                With <span className="font-bold">Chivalric</span>, you're in
                <br />
                control. Turn your community
                <br />
                into a flourishing kingdom.
            </span>

            <div className="flex gap-2">
                <Button
                    label="Get in touch"
                    color="black"
                    size="lg"
                    style="primary"
                    icon={<ArrowRight />}
                />
                <Button
                    label="Our work"
                    color="white"
                    size="lg"
                    style="secondary"
                    icon={<ArrowRight />}
                />
            </div>
            <Image
                className="absolute bottom-0 left-0 md:left-auto md:-right-72 md:w-full md:top-0"
                src={"/branding/Castle.png"}
                alt="Castle"
                width={1143}
                height={704}
            />
        </div>
    );
}
