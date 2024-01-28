import paths from "@/paths";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function ContactInfo() {
    return (
        <section className="flex flex-col sm:flex-row flex-wrap mb-8 gap-y-8">
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center px-8 md:px-20">
                <p className="w-full leading-relaxed font-light text-sm sm:text-base text-left border-b border-b-neutral-700 py-2"><span className="text-warning">Endereço:</span> Av, Onze de julho, 2070 - Sala 205</p>
                <p className="w-full leading-relaxed font-light text-sm sm:text-base text-left border-b border-b-neutral-700 py-2"><span className="text-warning">Telefone:</span> (11) 97576 8991</p>
                <p className="w-full leading-relaxed font-light text-sm sm:text-base text-left border-b border-b-neutral-700 py-2"><span className="text-warning">E-mail:</span> contato@vivianecorrea.com.br</p>

                <Link href={paths.instagram()} rel="noopener noreferrer" target="_blank" className="inline-flex items-center justify-center mt-4 text-neutral-800 sm:mx-auto mx-0">
                    <div className="bg-warning w-12 h-12 rounded-full mr-4 items-center justify-center flex">
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </div>
                    vivianecorrea.arquitetura
                </Link>
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-y-8 items-center justify-center">
                <Image
                    src={'/apto-44-2.png'}
                    alt="Imagem para contato"
                    className="object-cover object-center rounded-tr-full rounded-tl-full"
                    width={600}
                    height={360}
                />
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col justify-center items-center my-4">
                        <Button
                            radius="sm"
                            size="md"
                            color="warning"
                            variant="ghost"
                            className="mb-4"
                            as={Link}
                            href={paths.whatsApp()}
                            target="_blank"
                        >
                            Trabalhe conosco
                        </Button>

                        <p className="text-neutral-800 text-center antialiased">Clique aqui para enviar seu currículo/portfólio</p>
                    </div>
                    <div className="flex flex-col justify-center items-center my-4">
                        <Button
                            radius="sm"
                            size="md"
                            color="warning"
                            variant="ghost"
                            className="mb-4"
                            as={Link}
                            href={paths.whatsApp()}
                            target="_blank"
                        >
                            Seja meu parceiro
                        </Button>
                        <p className="text-neutral-800 text-center antialiased">Você que é designer/tem uma loja, buscar uma parceria, etc…</p>
                    </div>
                </div>
            </div>
        </section>
    );
}