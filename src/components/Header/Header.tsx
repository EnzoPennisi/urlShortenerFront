import { Link } from "react-router-dom";
import LinkIcon from "../Icons/LinkIcon";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogoutButton";
import { LogginButton } from "./LogginButton";
import { RegisterButton } from "./RegisterButton";
import { UserInfo } from "./UserInfo";

export function Header() {

    const { isAuthenticated } = useAuth0();

    return (
        <header className=" bg-[rgb(18,18,18)] relative z-10">
            <div className="w-[95%] sm:max-w-7xl mx-auto py-6 flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="flex items-center space-x-2 hover:text-fuchsia-600 transition-all cursor-pointer">
                    <LinkIcon />
                    <span className="font-bold text-sm sm:text-xl">ShortLink</span>
                </Link>

                {isAuthenticated ?
                    (
                        <div className="flex items-center justify-center gap-9 sm:gap-0">
                            <UserInfo />
                            <LogoutButton />
                        </div>
                    )
                    :
                    (<div>
                        <LogginButton />
                        <RegisterButton />
                    </div>)}
            </div>
        </header>
    );
}
