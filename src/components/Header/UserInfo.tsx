import { useAuth0 } from "@auth0/auth0-react";

export function UserInfo() {
    const { user } = useAuth0();
    const username = user?.name?.split("@")[0] || user?.name;
    return (
        <>
            <div className="flex flex-col items-center sm:flex-row">
                <img src={user?.picture} alt={username} className="rounded-full size-8 sm:mr-4 flex-shrink-0" />
                <span className="sm:mr-8 text-sm sm:text-base max-w-xs sm:max-w-md flex-grow truncate">{username}</span>
            </div>
        </>
    )
}
