import { Link } from "react-router-dom";
import LinkIcon from "../components/Icons/LinkIcon";

export function Home() {
    return (
        <div className="mt-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-6">
                    Acorta tus enlaces, expande tus posibilidades
                </h1>
                <p className="text-lg mb-8 text-gray-300">
                    Simplifica tus URLs y haz que sean fáciles de compartir en cualquier plataforma.
                </p>
                <div className="flex justify-center">
                    <Link to="/dashboard">
                        <button className="flex items-center justify-center gap-2 text-base font-semibold px-6 py-3 rounded-md border border-gray-600 bg-gray-800 text-white hover:bg-gray-700 transition-colors cursor-pointer">
                            <LinkIcon />
                            <span>Crear enlace corto</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}