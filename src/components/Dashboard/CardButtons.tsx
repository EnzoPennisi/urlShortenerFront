import { useState } from "react";
import CopyIcon from "../Icons/CopyIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import QrCodeIcon from "../Icons/QrCodeIcon";
import CheckIcon from "../Icons/CheckIcon";
import { deleteUrl } from "../../api/urlApi";
import { useAuth0Token } from "../../hooks/useAuth0Token";
import { ConfirmModal } from "./ConfirmModal";
import { QrModal } from "./QrModal";

interface CardButtonsProps {
    accessCount: number;
    urlId: number;
    shortUrl: string;
    onEdit: (urlId: number) => void;
    fetchUrls: () => void;

}

export function CardButtons({ accessCount, urlId, shortUrl, onEdit, fetchUrls }: CardButtonsProps) {

    const { getToken } = useAuth0Token();

    const [copiedLink, setCopiedLink] = useState<string | null>(null)
    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false)
    const [showQrModal, setShowQrModal] = useState<boolean>(false)
    const dominio = "http://localhost:8080/"

    const handleCopy = (shortenedLink: string) => {
        const url = dominio + shortenedLink
        navigator.clipboard.writeText(url)
        setCopiedLink(shortenedLink)
        setTimeout(() => setCopiedLink(null), 2000)
    }

    // Open and cclose connfirm modal
    const handleOpenConfirmModal = () => {
        setShowConfirmModal(true)
    }

    const handleCloseConfirmModal = () => {
        setShowConfirmModal(false);
    }

    // Open and close qr modal
    const handleOpenQrModal = () => {
        setShowQrModal(true)
    }

    const handleCloseQrModal = () => {
        setShowQrModal(false)
    }

    // Delete url
    const handleUrlDelete = async () => {

        const token = await getToken() as string;

        await deleteUrl(urlId, token)

        fetchUrls();
    }

    return (
        <div className="flex gap-1 sm:gap-2 items-center font-semibold">
            <span className="mr-2 text-sm sm:text-base">
                Accesos: {accessCount}
            </span>
            <span>|</span>
            <button
                className="p-2 hover:text-blue-500 hover:bg-blue-100 transition-all duration-200 rounded-full  cursor-pointer"
                title="Editar"
                onClick={() => onEdit(urlId)}
            >
                <EditIcon />
            </button>
            <button
                className="p-2 hover:text-red-500 hover:bg-red-100 transition-all duration-200 rounded-full  cursor-pointer"
                title="Eliminar"
                onClick={handleOpenConfirmModal}
            >
                <DeleteIcon />
            </button>
            <button
                onClick={() => handleCopy(shortUrl)}
                className="p-2 hover:text-amber-500 hover:bg-amber-100 transition-all duration-200 rounded-full  cursor-pointer"
                title="Copiar enlace"
            >
                {copiedLink ? <CheckIcon /> : <CopyIcon />}
            </button>
            <button
                onClick={handleOpenQrModal}
                className="p-2 hover:text-purple-500 hover:bg-purple-100 transition-all duration-200 rounded-full  cursor-pointer"
                title="Generar código QR"
            >
                <QrCodeIcon />
            </button>

            <ConfirmModal showModal={showConfirmModal} closeModal={handleCloseConfirmModal} handleUrlDelete={handleUrlDelete} />
            <QrModal showModal={showQrModal} closeModal={handleCloseQrModal} qrCodeLink={dominio + shortUrl} />
        </div>
    )
}