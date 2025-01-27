import { useContext, useEffect, useState } from 'react';
import { UrlCard } from '../components/Dashboard/UrlCard';
import AddIcon from '../components/Icons/AddIcon';
import { FormModal } from '../components/Dashboard/FormModal';
import { Url } from '../types/types';
import { useAuth0Token } from '../hooks/useAuth0Token';
import { getUrlByUserId } from '../api/urlApi';
import { UserContext } from '../context/UserContext';

export function Dashboard() {

    const { currentUser } = useContext(UserContext);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [userUrls, setUserUrls] = useState<Url[]>([]);
    const [urlId, setUrlId] = useState<number | null>(null);
    const [currentUserId, setCurrentUserId] = useState<number | null>(null);

    const { getToken } = useAuth0Token();

    const fetchUserUrls = async () => {
        if (currentUser) {
            const token = await getToken() as string;
            const urls = await getUrlByUserId(currentUser.id, token) as Url[];
            setUserUrls(urls);
            setCurrentUserId(currentUser.id);
        }
    };

    useEffect(() => {
        fetchUserUrls();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    const openCreateModal = () => {
        setShowModal(true);
        setUrlId(null);
    };

    const openEditModal = (id: number) => {
        setShowModal(true);
        setUrlId(id);
    };

    const closeModal = () => {
        setShowModal(false);
        setUrlId(null);
    };

    return (
        <div className='w-[95%] sm:max-w-7xl mx-auto mt-12'>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center sm:mb-8">
                <h1 className="text-2xl mb-7 sm:text-3xl sm:mb-0 font-bold">Mis URLs Acortadas</h1>

                <button
                    onClick={openCreateModal}
                    className="bg-blue-900 hover:bg-blue-700 transition-all text-white text-sm sm:text-base font-bold py-2 px-4 rounded-lg flex items-center cursor-pointer"
                >
                    <AddIcon />
                    Crear nuevo enlace
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-16 pb-16">
                {userUrls.map((url) => (
                    <UrlCard key={url.id} url={url} onEdit={openEditModal} fetchUrls={fetchUserUrls} />
                ))}
            </div>

            {currentUserId &&
                <FormModal showModal={showModal} handleClose={closeModal} fetchUrls={fetchUserUrls} urlId={urlId} currentUserId={currentUserId} />
            }
        </div>
    );
}