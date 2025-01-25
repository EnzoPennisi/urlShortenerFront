import { useAuth0 } from "@auth0/auth0-react";

export function LogoutButton() {
    const { logout } = useAuth0();

    return (
        <button className="px-6 py-2 rounded-sm text-sm font-medium bg-[#3c213598] hover:bg-[#5a314f98] transition-all cursor-pointer"
            onClick={() => {
                localStorage.clear()
                logout({
                    logoutParams: { returnTo: window.location.origin }
                })
            }}
        >
            Cerrar Sesión
        </button>
    )
}