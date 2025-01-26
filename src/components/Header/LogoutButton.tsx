import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function LogoutButton() {
    const { logout } = useAuth0();
    const { logoutUser } = useContext(UserContext);

    return (
        <button className="px-6 py-2 rounded-sm text-sm font-medium bg-[#3c213598] hover:bg-[#5a314f98] transition-all cursor-pointer"
            onClick={() => {
                logoutUser();
                logout({
                    logoutParams: { returnTo: window.location.origin }
                })
            }}
        >
            Cerrar Sesión
        </button>
    )
}