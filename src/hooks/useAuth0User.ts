import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useAuth0Token } from './useAuth0Token';
import { createUser, findUserByUsername } from '../api/userApi';
import { NewUser } from '../types/types';

export function useAuth0User() {
    const { user, isAuthenticated } = useAuth0();
    const { getToken } = useAuth0Token();

    useEffect(() => {

        const saveUserToDB = async () => {

            if (!user || !isAuthenticated) {
                console.log('No hay usuario logueado');
                return;
            }

            const token = await getToken() as string | null;
            const username = user.email?.split('@')[0] as string;

            if (!token) {
                console.log('No se pudo guardar el usuario en la base de datos');
                return;
            }

            const userExists = await findUserByUsername(username, token);

            if (userExists) {
                console.log('El usuario ya existe');
                localStorage.setItem('user', JSON.stringify(userExists));
                return;
            }

            const newUser: NewUser = {
                username
            }

            const userCreated = await createUser(newUser, token);

            if (userCreated) {
                localStorage.setItem('user', JSON.stringify(userCreated));
            }
        }

        saveUserToDB();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, isAuthenticated]);
}