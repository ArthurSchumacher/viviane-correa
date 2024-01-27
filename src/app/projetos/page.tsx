import ProjectsGrid from "@/components/common/projects-grid";
import Title from "@/components/common/title";

export default function ProjectsPage() {
    return (
        <main className="w-full max-w-6xl py-12 px-4 mx-auto">
            <Title content="Projetos Realizados" center/>
            <ProjectsGrid/>
        </main>
    );
}