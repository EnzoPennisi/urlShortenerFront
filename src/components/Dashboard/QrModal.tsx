import { QRCodeSVG } from "qrcode.react";

interface QrModalProps {
    showModal: boolean;
    closeModal: () => void;
    qrCodeLink: string;
}

export function QrModal({ showModal, closeModal, qrCodeLink }: QrModalProps) {
    return (
        <>
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-[#00000076]"
                    onClick={() => closeModal()} // Cierra el modal al hacer clic fuera
                >
                    <div
                        className="bg-gray-800 text-white rounded-lg p-8 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro del modal
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-100">Código QR</h2>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer transition-all"
                                onClick={closeModal}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center mb-4">
                            <QRCodeSVG value={qrCodeLink} size={200} />
                        </div>
                        <p className="text-center text-gray-200 mb-4">{qrCodeLink}</p>
                        <button
                            onClick={() => closeModal()}
                            className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer text-white font-bold py-2 px-4 rounded-lg transition-all"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}