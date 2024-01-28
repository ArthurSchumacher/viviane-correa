'use client';

import { Button, Card, CardBody, Link, Image } from "@nextui-org/react";
import Title from "../common/title";
import paths from "@/paths";

export default function OfficeCard() {
    return (
        <section className="w-full bg-gradient-to-b from-neutral-300 to-neutral-50">
            <Title content="Escritório Viviane Corrêa" center styles="pt-12"/>

            <Card
                isBlurred
                shadow="md"
                className="bg-neutral-50/30 dark:bg-default-100/30 mx-8 sm:mx-auto py-8 sm:p-4 max-w-6xl"
            >
                <CardBody className="flex md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            src="/Apto-jenifer-16.png"
                            alt="Foto de banheiro moderno"
                            width={720}
                            height={600}
                            className="object-cover object-center rounded-lg"
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:px-8 md:px-4 px-2 flex flex-col md:items-start items-center">
                        <div className="text-justify text-lg leading-relaxed">
                            <p className="py-2">
                                O escritório Viviane Corrêa é especialista em projetos de interiores.
                            </p>
                            <p className="py-2">
                                E oferecem aos clientes soluções completas e personalizadas para transformar sonhos em realidade, criando ambientes únicos que agradam a todos.
                            </p>
                            <p className="py-2">
                                Essa capacidade é essencial em um mercado tão competitivo como o da arquitetura, onde a criatividade e a inovação são altamente valorizadas.
                            </p>
                            <p className="py-2">
                                O seu compromisso em entender as necessidades e desejos de cada cliente, e transformá-los em projetos que atendam às suas expectativas.
                            </p>
                            <p className="py-2">
                                O seu sonho tem um preço e um prazo para ser realizado.
                            </p>
                        </div>

                        <div className="flex justify-center w-1/2 sm:w-full mb-8">
                            <Image
                                src="/viviane-logo.png"
                                alt="Viviane Corrêa Logo"
                                width={230}
                                height={100}
                                className="object-contain object-center mx-auto"
                            />
                        </div>

                        <div className="flex justify-center w-full">
                            <Button
                                size="lg"
                                radius="sm"
                                color="warning"
                                variant="ghost"
                                className="text-neutral-950 mx-auto"
                                as={Link}
                                href={paths.whatsApp()}
                                target="_blank"
                            >
                                Quero fazer um orçamento.
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </section>
    );
}