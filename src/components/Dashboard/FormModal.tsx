import { useEffect, useState } from "react";
import { NewUrl, Url, User } from "../../types/types";
import { createShortUrl, getUrlById } from "../../api/urlApi";
import { useAuth0Token } from "../../hooks/useAuth0Token";

interface ModalProps {
    showModal: boolean;
    handleClose: () => void;
    editing?: boolean;
    id?: number;
}

export function FormModal({ showModal, handleClose, editing, id }: ModalProps) {

    const { getToken } = useAuth0Token();
    const storedUser = localStorage.getItem("user");
    const user: User | null = storedUser ? JSON.parse(storedUser) : null;

    const [formData, setFormData] = useState<NewUrl>({
        originalLink: "",
        description: "",
        idUser: user?.id || 0
    })

    useEffect(() => {

        const getUrlFromDB = async () => {
            if (editing && id) {
                const token = await getToken() as string;
                const actualUrl: Url = await getUrlById(id, token)
                setFormData({
                    originalLink: actualUrl.originalLink,
                    description: actualUrl.description,
                });
            }
        }

        getUrlFromDB();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editing, id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        const token = await getToken() as string;
        const result = await createShortUrl(formData, token);
        console.log(result);
        handleClose();

    };

    if (!showModal) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden h-screen bg-[#00000076]">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                    {/* Header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {editing ? "Editar " : "Crear un nuevo"} enlace corto
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer transition-all"
                            onClick={handleClose}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    {/* Body */}
                    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="originalLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enlace original</label>
                                <input
                                    type="text"
                                    name="originalLink"
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://ejemplo.com" />
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                                <textarea
                                    name="description"
                                    rows={4}
                                    onChange={handleChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe tu enlace"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex items-center bg-blue-900 hover:bg-blue-700 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                            {editing ? "Guardar cambios" : "Crear enlace corto"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}




