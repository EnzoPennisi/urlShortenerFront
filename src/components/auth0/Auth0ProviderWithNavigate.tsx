import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: JSX.Element;
};

export function Auth0ProviderWithNavigate({ children }: Props) {
    const navigate = useNavigate();

    const domain = import.meta.env.VITE_DOMAIN;
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUDIENCE;

    // Esta función se ejecuta después de que Auth0 redirige al usuario de vuelta a la aplicación
    const onRedirectCallback = (appState: AppState | undefined) => {
        // Navega a la página de retorno o a la página de inicio si no hay una página de retorno
        navigate(appState?.returnTo || window.location.pathname);
    };

    // Si falta alguno de los valores de configuración, no se renderiza el componente Auth0Provider
    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                audience: audience,
                redirect_uri: redirectUri
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
}