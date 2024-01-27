import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';

export default function AboutSection() {
    return (
        <div className="flex lg:flex-row flex-col items-center gap-x-8">
            <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="text-2xl sm:text-3xl text-neutral-950 inline-flex items-center justify-center">
                    <FontAwesomeIcon icon={faChevronRight} className="w-8 h-8" />
                    Quem é Viviane Corrêa
                </h1>
                <div className="text-justify px-8 py-4 text-sm sm:text-base">
                    <p className="py-2">
                        VIVIANE CORRÊA, é formada em Arquitetura pela Universidade Belas Artes de São Paulo - SP está há mais de 15 anos em sua profissão e tem paixão pelo que faz.
                    </p>
                    <p className="py-2">
                        Como arquiteta, seu objetivo é criar espaços funcionais e esteticamente agradáveis que atendam às necessidades e desejos dos seus clientes.
                    </p>
                    <p className="py-2">
                        Desde a concepção do projeto até a sua conclusão, se empenhando em oferecer soluções criativas e inovadoras que reflitam a personalidade e o estilo de vida de cada um.
                    </p>
                    <p className="py-2">
                        Como designer de interiores, minha missão é transformar ambientes, deixando-os mais acolhedores, confortáveis e bonitos trabalhando com cores, texturas, iluminação e móveis, criando composições harmônicas que valorizem o espaço e proporcionem bem-estar aos seus ocupantes.
                    </p>
                    <p className="py-2">
                        Para mim, cada projeto é um desafio único que exige dedicação, comprometimento e atenção aos detalhes. Desde a escolha dos materiais até a disposição dos móveis, tudo é pensado com cuidado para que o resultado final seja perfeito.
                    </p>
                    <p className="py-2">
                        Há mais de 15 anos transformando seus sonhos em realidade
                    </p>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full w-5/6 flex items-center justify-center">
                <Image
                    alt="feature"
                    className="object-cover object-center rounded-lg mx-auto max-h-unit-8xl"
                    width={460}
                    height={500}
                    src={'/img/viviane-perfil.jpg'}
                />
            </div>
        </div>
    );
}