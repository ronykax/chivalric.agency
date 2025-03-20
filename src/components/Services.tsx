import Shield from "./icons/shield";
import ServiceCard from "./service-card";

export default function Services() {
    return (
        <div className="bg-white flex flex-col">
            <div className="flex flex-col gap-6 px-12 py-12 t:px-48">
                <div className="uppercase font-league text-2xl text-black leading-2xl">
                    Build something{" "}
                    <span className="font-garamond lowercase italic">
                        beautiful.
                    </span>
                </div>

                <div className="font-garamond text-lg leading-lg">
                    Providing illustrious management, branding, development, and
                    more — all for your kingdom to prosper.
                </div>
            </div>

            <div className="flex px-12 t:px-48 pb-12 gap-12 overflow-x-scroll overflow-hidden no-scrollbar">
                <ServiceCard
                    heading="Management"
                    description="erm waht the sigm"
                    icon={<Shield />}
                    bg="/branding/service-card-management.png"
                />
                <ServiceCard
                    heading="Management"
                    description="erm waht theefefe sigm"
                    icon={<Shield />}
                    bg="/branding//branding/service-card-management.png"
                />
                <ServiceCard
                    heading="Management"
                    description="erm waht the sigm"
                    icon={<Shield />}
                    bg="/branding//branding/service-card-management.png"
                />
                <ServiceCard
                    heading="Management"
                    description="erm wefeaht the sigm"
                    icon={<Shield />}
                    bg="/branding//branding/service-card-management.png"
                />
            </div>
        </div>
    );
}
