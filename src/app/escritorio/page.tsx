import Cta from "@/components/common/cta";
import Title from "@/components/common/title";
import AboutOffice from "@/components/office/about-office";
import OfficeCard from "@/components/office/office-card";
import OfficeSection from "@/components/office/office-section";
import ProjectListCard from "@/components/office/project-list-card";
import Testimonials from "@/components/office/testimonials";

export default function Office() {
    return (
        <>
            <OfficeCard />
            <Cta />
            <OfficeSection />
            <Cta />
            <ProjectListCard />
            <AboutOffice />
            <Cta />
            <Testimonials/>
        </>
    );
}