import { Quote } from "lucide-react";
import Title from "../common/title";

export default function Testimonials() {
    return (
        <section className="flex flex-col w-full bg-gradient-to-t from-neutral-300 to-neutral-50 pb-12">
            <Title content="Depoimentos" center/>
            <div className="flex flex-col md:flex-row text-justify gap-x-8 gap-y-8 max-w-6xl px-4 mx-auto">
                <div className="w-full md:w-1/3 bg-neutral-400 rounded-lg px-8 py-2 items-center justify-start shadow-lg">
                    <Quote className="w-8 h-8 fill-neutral-500 text-neutral-500" />
                    <p className="py-2">
                        Minha esposa viu o apartamento de uma amiga projetado pela Viviane, ela ficou ansiosa em contratar os serviços dela, confesso que no início estava um pouco receoso, mas após uma reunião ela sanou nossas dúvidas, e fez um projeto impecável.<br />
                        Todos os móveis ficaram em locais bem estratégicos, o ambiente ficou harmônico e tenho muito prazer em reunir meus amigos aqui em casa.<br />
                        Recomendo o trabalho da Viviane de olhos fechados, estou muito satisfeito.<br />
                    </p>
                </div>
                <div className="w-full md:w-1/3 bg-neutral-400 rounded-lg px-8 py-2 items-center justify-start shadow-lg">
                    <Quote className="w-8 h-8 fill-neutral-500 text-neutral-500" />
                    <p className="py-2">
                        Adorei o trabalho feito pela Viviane, pois eu e minha esposa não sabíamos como iríamos decorar o apartamento, estávamos totalmente em dúvidas e com uma reunião ela fez um projeto que nos deixou bastante admirados.
                    </p>
                </div>
                <div className="w-full md:w-1/3 bg-neutral-400 rounded-lg px-8 py-2 items-center justify-start shadow-lg">
                    <Quote className="w-8 h-8 fill-neutral-500 text-neutral-500" />
                    <p className="py-2">
                        A Viviane realizou meu maior sonho!<br />
                        Eu pensava que o meu apartamento não tinha mais jeito, estava até pensando em comprar outro. Mas ela acertou o projeto ideal tão em cheio que eu fiquei maravilhada!<br />
                        Meu ambiente foi transformado graças a ela, me sinto muito bem acolhida em minha casa!
                    </p>
                </div>
            </div>
        </section>
    );
}