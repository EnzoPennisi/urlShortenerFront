import { NewUrl, UpdateUrl } from "../types/types";

const dominio = 'http://localhost:8080/api/url';

// --- GET ---
export async function getUrlById(id: number, token: string) {

    const urlFetch = dominio + `/${id}`;

    try {
        const response = await fetch(urlFetch, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.json();
    } catch (error) {
        console.error('Error al obtener la URL:', error);
    }
}

export async function getUrlByUserId(userId: number, token: string) {

    const urlFetch = dominio + `/user/${userId}`;

    try {
        const response = await fetch(urlFetch, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.json();
    } catch (error) {
        console.error('Error al obtener la URL:', error);
    }
}

//no necesita token para redirigir
export async function redirectUrl(shortUrl: string) {
    const urlFetch = dominio + `/${shortUrl}`;

    try {
        const response = await fetch(urlFetch);
        return response.json();
    } catch (error) {
        console.error('Error al redirigir la URL:', error);
    }
}

// --- POST ---
export async function createShortUrl(urlToSave: NewUrl, token: string) {

    const urlFetch = dominio;

    try {

        await fetch(urlFetch, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(urlToSave)
        });

    } catch (error) {
        console.error('Error al crear la URL:', error);
    }
}

// --- PATCH ---
export async function updateUrl(id: number, urlToUpdate: UpdateUrl, token: string) {
    const urlFetch = dominio + `/${id}`;

    try {
        await fetch(urlFetch, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(urlToUpdate)
        });
    } catch (error) {
        console.error('Error al actualizar la URL:', error);
    }

}

// --- DELETE ---
export async function deleteUrl(id: number, token: string) {
    const urlFetch = dominio + `/${id}`;

    try {
        await fetch(urlFetch, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Error al eliminar la URL:', error);
    }
}