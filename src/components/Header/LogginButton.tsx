import { useAuth0 } from "@auth0/auth0-react";

export function LogginButton() {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="px-6 py-2 rounded-sm text-sm font-medium hover:text-fuchsia-600 transition-all cursor-pointer"
            onClick={() => loginWithRedirect({
                appState: { returnTo: "/dashboard" } // Redirige al usuario a la página actual después de iniciar sesión
            })}
        >
            Iniciar Sesión
        </button>
    )
}