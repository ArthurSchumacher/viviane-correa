import ProjectsGrid from "@/components/common/projects-grid";
import Title from "@/components/common/title";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-full max-w-6xl py-12 px-4 mx-auto">
        <Title content="Recentes Projetos de Arquitetura e Decoração do Escritório" center={true} />
        <ProjectsGrid />
      </main>
    </>

  );
}
