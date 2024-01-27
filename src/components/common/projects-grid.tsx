'use client';

import { projectList } from "@/data";
import paths from "@/paths";
import { Card } from "@nextui-org/react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function ProjectsGrid() {
    const router = useRouter();

    const projectsCards = projectList.map((project, index) => (
        <div key={index} className="lg:w-1/3 sm:w-1/2 p-2 mx-auto md:mx-0">
            <Card isPressable radius="none" onPress={() => router.replace(paths.projectsById((index + 1).toString()))} className="md:w-full w-80 h-64 relative">
                <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.src}
                    width={project.width}
                    height={project.height}
                />
                <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-neutral-600 bg-neutral-300/90 opacity-0 hover:opacity-100 flex items-center justify-center flex-col">
                    <h1 className="text-3xl font-medium text-neutral-950 mb-3">{project.title}</h1>
                    <p className="leading-relaxed text-neutral-800">Clique para visualizar.</p>
                </div>
            </Card>
        </div>
    ));

    return (
        <section className="flex flex-wrap">
            {projectsCards}
        </section>
    );
}