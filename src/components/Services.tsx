import Brush from "./icons/brush";
import CuteRobot from "./icons/cute-robot";
import Devices from "./icons/devices";
import Shield from "./icons/shield";
import ServiceCard from "./service-card";

export default function Services() {
    return (
        <section id="services" className="bg-white flex flex-col">
            <div className="flex flex-col gap-6 px-12 py-12 t:px-48">
                <div className="uppercase font-league text-2xl text-black leading-2xl">
                    Build something
                    <br />
                    <span className="font-garamond lowercase italic">
                        beautiful.
                    </span>
                </div>

                <div className="font-garamond text-lg leading-lg">
                    Providing illustrious management, branding, development, and
                    more — all for your kingdom to prosper.
                </div>
            </div>

            <div className="flex px-12 t:px-48 pb-12 gap-12 overflow-x-scroll overflow-hidden no-scrollbar text-white">
                <ServiceCard
                    heading="Management"
                    description="Our team will provide a comprehensive range of methods to help build and elevate your social media presence. Featuring user engagement and user growth strategies, our expertise ensures your social media page will be guided into a thriving and diverse online community."
                    icon={<Shield />}
                    bg="/branding/service-card-management.png"
                />
                <ServiceCard
                    heading="Branding"
                    description="We offer many diverse options to help elevate your brand's identity, or make you a completely new one! Branding, brand strategy, marketing graphics, banners, icons, backgrounds, and more can all be done by our team of graphic designers. Branding plays a key role in ensuring that your brand is properly perceived by users and customers, so let our unique and capable talent handle it for you!"
                    icon={<Brush />}
                    bg="/branding/service-card-branding.png"
                />
                <ServiceCard
                    heading="Discord Development"
                    description="Whether you are in need of an economy system, custom moderation solution, ticketing to privately contact the moderation team, or unique interactive commands. Our expert developers can create a bot tailored to not only your needs, but your entire community's needs."
                    icon={<CuteRobot />}
                    bg="/branding/service-card-discord.png"
                />
                <ServiceCard
                    heading="Web Design/Dev"
                    description="A competent website is crucial for any company’s success. We focus on creating intuitive and aesthetically pleasing interfaces. From wireframing and prototyping to development. We make sure your site is responsive, interactive, stunning, and provides an enjoyable experience for your audience that captivates users and keeps them coming back!"
                    icon={<Devices />}
                    bg="/branding/service-card-web.png"
                />
            </div>
        </section>
    );
}
