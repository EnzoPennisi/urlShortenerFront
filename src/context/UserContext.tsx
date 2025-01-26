import { createContext, ReactNode, useEffect, useState } from "react";
import { NewUser, User } from "../types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth0Token } from "../hooks/useAuth0Token";
import { createUser, findUserByUsername } from "../api/userApi";

interface userContextType {
    currentUser: User | null;
    fetchUser: () => void;
    logoutUser: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<userContextType>({
    currentUser: null,
    fetchUser: () => { },
    logoutUser: () => { }
})

export function UserContextProvider({ children }: { children: ReactNode }) {

    const { user, isAuthenticated } = useAuth0();
    const { getToken } = useAuth0Token();
    const [currentUser, setCurrentUser] = useState<User | null>(null);


    const fetchUser = async () => {
        if (!user || !isAuthenticated) {
            console.log('No hay usuario logueado');
            return;
        }

        const token = await getToken() as string | null;
        const username = user.email?.split('@')[0] as string;

        if (!token) {
            console.log('No hay token');
            return;
        }

        const userExists = await findUserByUsername(username, token);

        if (userExists) {
            console.log('El usuario ya existe');
            setCurrentUser(userExists);
            return;
        }

        const newUser: NewUser = {
            username
        }

        const userCreated = await createUser(newUser, token);

        if (userCreated) {
            setCurrentUser(userCreated);
            console.log('Usuario creado', userCreated);
        }
    }

    const logoutUser = () => {
        setCurrentUser(null);
    }

    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, isAuthenticated])

    return (
        <UserContext.Provider value={{ currentUser, fetchUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
}