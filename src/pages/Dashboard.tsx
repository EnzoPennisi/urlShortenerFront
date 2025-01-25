import { useState } from 'react';
import { UrlCard } from '../components/Dashboard/UrlCard';
import AddIcon from '../components/Icons/AddIcon';
import { FormModal } from '../components/Dashboard/FormModal';

export function Dashboard() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='max-w-7xl min-h-screen mx-auto mt-12'>
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
            <div className='container flex flex-wrap justify-center items-center gap-12 mt-16'>
                <UrlCard />
                <UrlCard />
            </div>

            <FormModal showModal={showModal} handleClose={handleCloseModal} />
        </div>
    );
}