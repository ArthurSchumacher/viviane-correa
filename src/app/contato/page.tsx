import Title from "@/components/common/title";
import ContactInfo from "@/components/contact/contact-info";
import Faq from "@/components/contact/faq";

export default function ContactPage() {
    return (
        <main className="w-full max-w-6xl py-12 px-4 mx-auto">
            <Title content="Entre em " contentWarning="Contato" center/>
            <ContactInfo/>

            <Title content="Dúvidas frequentes" center/>
            <Faq/>
        </main>
    );
}