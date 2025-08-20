import { OnlineIcon } from "@/app/icons";
import { getServerOnline } from "./getServerOnline";

export const ServerOnline = async () => {
    return (
        <div>
            <p>игроков онлайн</p>
            <div>
                <OnlineIcon />
                {await getServerOnline()}
            </div>
        </div>
    );
}