import { useState } from "react";
import CopyIcon from "../Icons/CopyIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import QrCodeIcon from "../Icons/QrCodeIcon";
import CheckIcon from "../Icons/CheckIcon";

export function CardButtons() {

    const [copiedLink, setCopiedLink] = useState<string | null>(null)

    const handleCopy = (shortenedLink: string) => {
        const url = `https://shortlink.com/${shortenedLink}`
        navigator.clipboard.writeText(url)
        setCopiedLink(shortenedLink)
        setTimeout(() => setCopiedLink(null), 2000)
    }

    return (
        <div className="flex gap-2 items-center">
            <span>
                Accesos: 0
            </span>
            <span> | </span>
            <button
                className="p-2 hover:text-blue-500 hover:bg-blue-100 transition-all duration-200 rounded-full  cursor-pointer"
                title="Editar"
            >
                <EditIcon />
            </button>
            <button
                className="p-2 hover:text-red-500 hover:bg-red-100 transition-all duration-200 rounded-full  cursor-pointer"
                title="Eliminar"
            >
                <DeleteIcon />
            </button>
            <button
                onClick={() => handleCopy('a3l6fk')}
                className="p-2 hover:text-gray-500 hover:bg-gray-100 transition-all duration-200 rounded-full  cursor-pointer"
                title="Copiar enlace"
            >
                {copiedLink ? <CheckIcon /> : <CopyIcon />}
            </button>
            <button
                className="p-2 hover:text-purple-500 hover:bg-purple-100 transition-all duration-200 rounded-full  cursor-pointer"
                title="Generar código QR"
            >
                <QrCodeIcon />
            </button>
        </div>
    )
}