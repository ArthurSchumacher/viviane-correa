import paths from "@/paths";
import { faFacebook, faInstagram, faLinkedinIn, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";

export default function Footer() {
    return (
        <footer className="bg-neutral-100 px-5 py-8 flex items-center sm:flex-row flex-col">
            <Link className="flex font-medium items-center md:justify-start justify-center text-neutral-950">
                <span className="sm:ml-3 text-xl">Viviane Corrêa</span>
            </Link>

            <p className="text-sm text-neutral-500 sm:border-l-2 sm:border-neutral-200 sm:ml-4 sm:pl-4 py-2">© 2024 Arthur Schumacher —
                <Link href="https://art-schumacher.com.br/" className="text-neutral-600 ml-1" rel="noopener noreferrer" target="_blank">@imarthur_</Link>
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <Link href={paths.facebook()} rel="noopener noreferrer" target="_blank" className="text-neutral-500 hover:text-neutral-950">
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </Link>
                <Link href={paths.instagram()} rel="noopener noreferrer" target="_blank" className="ml-3 text-neutral-500 hover:text-neutral-950">
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </Link>
                <Link href={paths.whatsApp()} rel="noopener noreferrer" target="_blank" className="ml-3 text-neutral-500 hover:text-neutral-950">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                </Link>
                <Link href={paths.youtube()} rel="noopener noreferrer" target="_blank" className="ml-3 text-neutral-500 hover:text-neutral-950">
                    <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
                </Link>
            </span>
        </footer>
    );
}