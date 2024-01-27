import { Card, CardBody } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";

export default function ProjectListCard() {
    return (
        <section className="w-full bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-50">
            <Card
                isBlurred
                shadow="md"
                className="bg-warning/30 dark:bg-warning/30 mx-8 sm:mx-auto py-8 sm:p-4 max-w-6xl"
            >
                <CardBody>
                    <h1 className="sm:text-4xl text-2xl antialiased text-neutral-950 font-light uppercase pb-4">
                        O que está incluso no projeto?
                    </h1>
                    <ul>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Entrevista para elaboração do programa de necessidades;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Levantamento de medidas in loco (caso não tenha a planta do local);
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Elaboração de planta layout;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Alterações que necessitam de novas apresentações;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Memorial descritivo de materiais, louças, eletros, revestimentos e acessórios;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Demolir e construir;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Circuitos e pontos elétricos;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Pontos hidros sanitários;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Paginação de piso e revestimentos;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Forro;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Iluminação;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Marcenaria;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Marmoraria;
                            </p>
                        </li>
                        <li className="inline-flex items-center justify-start w-full sm:text-lg text-sm py-2">
                            <ChevronRight />
                            <p>
                                Serralheria;
                            </p>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </section>
    );
}