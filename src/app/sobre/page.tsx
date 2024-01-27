import AboutSection from "@/components/about/about-section";
import Title from "@/components/common/title";

export default function AboutPage() {
    return (
        <main className="w-full max-w-6xl py-12 px-4 mx-auto">
            <Title content="Sobre mim" center={true}/>
            <AboutSection/>
        </main>
    );
}