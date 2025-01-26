import { useEffect, useState } from 'react';
import { UrlCard } from '../components/Dashboard/UrlCard';
import AddIcon from '../components/Icons/AddIcon';
import { FormModal } from '../components/Dashboard/FormModal';
import { Url, User } from '../types/types';
import { useAuth0Token } from '../hooks/useAuth0Token';
import { getUrlByUserId } from '../api/urlApi';

export function Dashboard() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [userUrls, setUserUrls] = useState<Url[]>([]);
    const [urlId, setUrlId] = useState<number | null>(null);

    const { getToken } = useAuth0Token();

    // Get user from local storage
    const storedUser = localStorage.getItem("user");
    const user: User | null = storedUser ? JSON.parse(storedUser) : null;
    const userId = user?.id as number;

    const fetchUserUrls = async () => {
        if (userId) {
            const token = await getToken() as string;
            const urls = await getUrlByUserId(userId, token) as Url[];
            setUserUrls(urls);
        }
    };

    useEffect(() => {
        fetchUserUrls();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const handleOpenModal = () => {
        setShowModal(true);
        setUrlId(null);
    };

    const handleOpenEdit = (urlId: number) => {
        setShowModal(true);
        setUrlId(urlId);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setUrlId(null);
    };

    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Mis URLs Acortadas</h1>

                <button
                    onClick={handleOpenModal}
                    className="bg-blue-900 hover:bg-blue-700 transition-all text-white text-sm font-bold py-2 px-4 rounded-lg flex items-center cursor-pointer"
                >
                    <AddIcon />
                    Crear nuevo enlace
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-16 pb-16">
                {userUrls.map((url) => (
                    <UrlCard key={url.id} url={url} onEdit={handleOpenEdit} fetchUrls={fetchUserUrls} />
                ))}
            </div>

            <FormModal showModal={showModal} handleClose={handleCloseModal} fetchUrls={fetchUserUrls} userId={userId} urlId={urlId} />
        </div>
    );
}