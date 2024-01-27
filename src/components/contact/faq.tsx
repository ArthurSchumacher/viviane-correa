'use client';

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Accordion className="max-w-3xl">
                <AccordionItem className="text-justify" key="1" aria-label="Accordion 1" title="Quais tipos de projetos trabalhamos?">
                    Nosso escritório é especializado em todos os tipos de projetos de interiores, incluindo apartamentos, empresas e casas. Tenho certeza de que seremos capazes de atender às necessidades e expectativas dos clientes em cada tipo de projeto.<br /><br />
                    Temos a capacidade de atender a uma variedade de estilos arquitetônicos, o que é importante para garantir que cada projeto seja único e personalizado para atender às necessidades específicas do cliente.<br /><br />
                    Nossa equipe é capaz de criar espaços acolhedores, elegantes e funcionais que irão encantar nossos clientes e superar suas expectativas.<br /><br />
                    Estamos ansiosos para lhe atender.
                </AccordionItem>
                <AccordionItem className="text-justify" key="2" aria-label="Accordion 2" title="Por que devo contratar os seus serviços?">
                    Agradeço pelo interesse em nossos serviços de arquitetura. Se você está procurando por uma equipe de profissionais comprometidos em atender suas necessidades e expectativas, podemos lhe garantir que faremos o possível para superá-las. Nossa equipe tem ampla experiência no mercado e utilizamos as melhores ferramentas e tecnologias para garantir um projeto de qualidade e eficiência.<br /><br />
                    Nosso comprometimento com a satisfação do cliente é uma prioridade máxima e trabalhamos para garantir que todos os detalhes sejam considerados e atendidos. Além disso, estamos sempre atualizados com as tendências e novidades do mercado, para que possamos oferecer soluções criativas e inovadoras para seu projeto.<br /><br />
                    Por fim, acredito que nosso conhecimento, dedicação e a qualidade dos serviços prestados são nossos principais diferenciais. Estamos à disposição para ajudá-lo com seu projeto de arquitetura e garantir que todas as suas expectativas sejam atendidas e superadas.<br /><br />
                </AccordionItem>
            </Accordion>
        </div>
    );
}