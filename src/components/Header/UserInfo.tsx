import { useAuth0 } from "@auth0/auth0-react";

export function UserInfo() {
    const { user } = useAuth0();
    const username = user?.name?.split("@")[0] || user?.name;
    return (
        <>
            <img src={user?.picture} alt={username} className="rounded-full size-8 mr-4" />
            <span className="mr-8">{username}</span>
        </>
    )
}