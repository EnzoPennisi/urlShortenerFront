import { useAuth0 } from "@auth0/auth0-react";

export function useAuth0Token() {
    const { getAccessTokenSilently } = useAuth0();

    const getToken = async () => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUDIENCE,
                }
            });
            return token;
        } catch (error) {
            console.error('Error al obtener el token de acceso:', error);
            return null;
        }
    };

    return { getToken };
};
