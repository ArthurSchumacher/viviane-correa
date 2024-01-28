import { Image } from "@nextui-org/react";
import Title from "../common/title";

export default function AboutOffice() {
    return (
        <section className="flex flex-col gap-y-8 w-full max-w-6xl px-4 mx-auto">
            <Title content="Seu novo ambiente através de um projeto acessível, rápido e descomplicado." center styles="pt-12 uppercase" />

            <div className="flex flex-col sm:flex-row flex-wrap gap-y-4">
                <div className="flex flex-col items-center justify-center w-full sm:w-1/2 text-justify">
                    <p className="py-2 px-8 text-xl sm:text-base antialiased">
                        Na correria do dia a dia, muitas vezes nos deparamos com a falta de tempo e recursos para realizar grandes reformas em nossos lares.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-base antialiased">
                        Foi pensando nisso que desenvolvemos o Projeto Express, uma proposta inovadora que se concentra na repaginação de ambientes pequenos e outros tipos de projetos arquitetônicos.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-base antialiased">
                        Como arquiteta, entendo a importância de se criar espaços funcionais, esteticamente agradáveis e personalizados para cada cliente. Com o Projeto Express, meu objetivo é oferecer soluções práticas e criativas para transformar qualquer ambiente, seja ele uma sala de estar compacta, um escritório apertado ou até mesmo um cantinho especial em sua casa.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-base antialiased">
                        O segredo do Projeto Express está na capacidade de otimizar cada centímetro disponível, explorando ao máximo o potencial dos espaços reduzidos. Utilizo técnicas inteligentes de design e escolhas estratégicas de mobiliário, cores e iluminação para criar uma atmosfera acolhedora e funcional.
                    </p>
                </div>
                <div className="flex items-center justify-center w-full sm:w-1/2 mx-auto order-first sm:order-none">
                    <Image
                        src="/viviane-quarto-rosa-1.png"
                        alt="Foto de um quarto feminino"
                        className="object-cover object-center max-w-sm"
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-4">
                <div className="flex items-center justify-center w-full sm:w-1/2 mx-auto">
                    <Image
                        src="/viviane-quarto-rosa-2.png"
                        alt="Foto de um quarto feminino 2"
                        className="object-cover object-center max-w-sm"
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full sm:w-1/2 text-justify">
                    <p className="py-2 px-8 text-xl sm:text-base antialiased">
                        Ao optar pelo Projeto Express, você receberá um serviço ágil e eficiente, sem abrir mão da qualidade e do cuidado nos detalhes. Com base em suas necessidades e preferências, vou trabalhar em estreita colaboração com você, desenvolvendo soluções personalizadas que atendam aos seus desejos e orçamento.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-base antialiased">
                        Além disso, o Projeto Express também pode ser aplicado em espaços comerciais, permitindo que empresas de diferentes segmentos otimizem suas áreas de trabalho, tornando-as mais produtivas e convidativas.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-base antialiased">
                        Convido você a explorar nosso portfólio de projetos anteriores, onde poderá ver exemplos reais de espaços transformados pelo Projeto Express. Estou ansiosa para compartilhar minha paixão pela arquitetura e ajudá-lo a criar um ambiente queseja verdadeiramente seu.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-base antialiased">
                        Entre em contato conosco hoje mesmo para agendar uma consulta inicial. Vamos juntos repaginar seu espaço e criar um ambiente único que reflita sua personalidade e estilo de vida. O Projeto Express está aqui para tornar seus sonhos arquitetônicos uma realidade
                    </p>
                </div>
            </div>
        </section>
    );
}