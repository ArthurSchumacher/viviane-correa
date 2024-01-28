import { Image } from "@nextui-org/react";

export default function OfficeSection() {
    return (
        <section className="flex flex-col gap-y-8 w-full max-w-6xl px-4 mx-auto">
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-4">
                <div className="flex flex-col items-center justify-center w-full sm:w-1/2 text-justify">
                    <p className="py-2 px-8 text-xl sm:text-2xl antialiased">
                        O escritório de “Arquitetura Viviane Corrêa” vem transformado ambientes únicos, cheio de estilo, design e personalidade de acordo com cada cliente.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-2xl antialiased">
                        Oferecendo uma assessoria completa, para dar todo o suporte necessário em cada uma das etapas do seu projeto.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-2xl antialiased">
                        O escritório conta com profissionais de diferentes áreas, para poder entregar os melhores resultados.
                    </p>
                </div>
                <div className="flex items-center justify-center w-full sm:w-1/2 mx-auto order-first sm:order-none">
                    <Image
                        src="/img/apto-jenifer-4.png"
                        alt="Foto de uma sala"
                        className="object-cover object-center max-w-sm"
                        width={820}
                        height={1024}
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-4">
                <div className="flex items-center justify-center w-full sm:w-1/2 mx-auto">
                    <Image
                        src="/img/apto-jenifer-10.png"
                        alt="Foto de uma cozinha"
                        className="object-cover object-center max-w-sm"
                        width={820}
                        height={1024}
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full sm:w-1/2 text-justify">
                    <p className="py-2 px-8 text-xl sm:text-2xl antialiased">
                        Fazer ou reformar uma casa é um processo minucioso que requer muito trabalho e dedicação.
                    </p>
                    <p className="py-2 px-8 text-xl sm:text-2xl antialiased">
                        É preciso muito empenho e conhecimento para entregar a você, cliente, um lar dos sonhos, com seu estilo único.
                    </p>
                </div>
            </div>
        </section>
    );
}