import { Url } from "../../types/types";
import { CardButtons } from "./CardButtons";

interface UrlCardProps {
    url: Url;
    onEdit: (urlId: number) => void;
    fetchUrls: () => void;
}

export function UrlCard({ url, onEdit, fetchUrls }: UrlCardProps) {

    const dominio = 'https://shrt-twc9.onrender.com';

    return (
        <article className="flex flex-col w-[95%] sm:w-xl h-40 border border-[#ffffff29] rounded-2xl p-4 gap-2 shadow-lg hover:border-indigo-500 hover:shadow-sm hover:shadow-indigo-500 transition-all duration-300">
            <div className="flex justify-between items-center">
                <a href={`${dominio}/${url.shortenedLink}`} target="_blank" rel="noreferrer">
                    <span className="text-lg font-bold hover:text-fuchsia-600 transition-all cursor-pointer">
                        /{url.shortenedLink}
                    </span>
                </a>
                <CardButtons accessCount={url.accessCount} onEdit={onEdit} urlId={url.id} shortUrl={url.shortenedLink} fetchUrls={fetchUrls} />
            </div>
            <span className="font-semibold opacity-70 overflow-hidden text-ellipsis whitespace-nowrap" title={url.originalLink}>
                {url.originalLink}
            </span>
            <span className="text-sm h-5 opacity-70 overflow-hidden text-ellipsis whitespace-nowrap" title={url.description}>
                {url.description}
            </span>
            <div className="flex justify-between text-sm opacity-70">
                <span>
                    Creado: {new Date(url.createdAt).toLocaleDateString('es-AR')}
                </span>
                <span>
                    Última actualización: {new Date(url.updatedAt).toLocaleDateString('es-AR')}
                </span>
            </div>
        </article>
    );
}
