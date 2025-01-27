import { useAuth0 } from "@auth0/auth0-react";

export function LogginButton() {
    const { loginWithPopup } = useAuth0();

    return (
        <button className="px-6 py-2 rounded-sm text-sm font-medium hover:text-fuchsia-600 transition-all cursor-pointer"
            onClick={() => loginWithPopup()}
        >
            Iniciar Sesión
        </button>
    )
}