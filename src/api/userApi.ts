import { NewUser, User } from "../types/types";

const dominio = 'http://localhost:8080/api/user';

// --- GET ---
export async function findUserByUsername(username: string, token: string) {

    const urlFetch = dominio + `/${username}`;

    try {
        const response = await fetch(urlFetch, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error('Error al obtener el usuario');
        }

        return response.json() as Promise<User>;
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
    }
}

// --- POST ---
export async function createUser(newUser: NewUser, token: string) {

    const urlFetch = dominio;

    try {
        const response = await fetch(urlFetch, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newUser)
        });

        return response.json() as Promise<User>;
    } catch (error) {
        console.error('Error al crear el usuario:', error);
    }
}