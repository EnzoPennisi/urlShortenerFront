import { useAuth0 } from "@auth0/auth0-react";

export function RegisterButton() {

    const { loginWithRedirect } = useAuth0();

    return (
        <button className="px-6 py-2 rounded-sm text-sm font-medium bg-[#3c213598] hover:bg-[#5a314f98] transition-all cursor-pointer"
            onClick={() => loginWithRedirect(
                {
                    appState: { returnTo: "/dashboard" }, // Retorna al usuario a la página actual después de iniciar sesión
                    authorizationParams: { screen_hint: "signup" } // Muestra la pantalla de registro
                }
            )}
        >
            Registrarse
        </ button >
    )
}