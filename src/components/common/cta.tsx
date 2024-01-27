import paths from "@/paths";
import { Button, Link } from "@nextui-org/react";
import { Box, ClipboardList, MonitorPlay } from "lucide-react";

export default function Cta() {
    return (
        <section className="flex flex-wrap w-full max-w-6xl py-12 px-4 mx-auto">
            <div className="p-4 md:w-1/4 flex items-center justify-center w-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                    <MonitorPlay />
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-neutral-950 text-base md:text-sm sm:text-lg title-font font-medium">Reunião online ou presencial</h2>
                </div>
            </div>
            <div className="p-4 md:w-1/4 flex items-center justify-center w-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                    <Box />
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-neutral-950 text-base md:text-sm sm:text-lg title-font font-medium">Ambientes em 3D realistas</h2>
                </div>
            </div>
            <div className="p-4 md:w-1/4 flex items-center justify-center w-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                    <ClipboardList />
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-neutral-950 text-base md:text-sm sm:text-lg title-font font-medium">Lista de itens e detalhamento PDF</h2>
                </div>
            </div>
            <div className="p-4 md:w-1/4 flex items-center justify-center w-full">
                <div className="mx-auto">
                    <Button
                        size="lg"
                        radius="sm"
                        color="warning"
                        as={Link}
                        href={paths.whatsApp()}
                        target="_blank"
                    >
                        Orçamento
                    </Button>
                </div>
            </div>
        </section>
    );
}