import Image from "next/image";
import Button from "./Button";
import ArrowRight from "./icons/arrow-right";

export default function Hero() {
    return (
        <div
            className="w-full bg-brand flex flex-col relative d:bg-[url('/branding/Castle.png')] bg-no-repeat"
            style={{
                backgroundPosition: "60% 15vh",
                backgroundSize: "contain",
            }}
        >
            <div className="px-12 t:px-48 pt-32 pb-6 d:pb-72 flex flex-col gap-6 overflow-hidden">
                <span className="font-league text-2xl text-white leading-2xl uppercase">
                    Create your
                    <br />
                    <span className="font-garamond italic lowercase">
                        kingdom.
                    </span>
                </span>

                <span className="font-garamond text-lg leading-lg">
                    With <span className="font-bold">Chivalric</span>, you're in
                    <br />
                    control. Turn your community
                    <br />
                    into a flourishing kingdom.
                </span>

                <div className="flex gap-2 items-center">
                    <a href="#contact">
                        <Button
                            label="Get in touch"
                            color="black"
                            size="lg"
                            style="primary"
                            icon={<ArrowRight />}
                        />
                    </a>
                    <a href="#portfolio">
                        <Button
                            label="Our work"
                            color="white"
                            size="lg"
                            style="secondary"
                            icon={<ArrowRight />}
                        />
                    </a>
                </div>
            </div>
            <Image
                className="d:hidden"
                src={"/branding/Castle.png"}
                alt="Castle"
                width={1143}
                height={704}
            />
        </div>
    );
}
