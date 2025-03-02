import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Work />
            <Contact />
        </>
    );
}
