import mc from 'minecraft-protocol';
import { SERVER_ADDRESS } from "@/app/config";
import { unstable_cache } from 'next/cache';

function fetchOnline() {
    console.log('RERENDER!');
    return new Promise<string>((resolve) => {
        const serverAddress = SERVER_ADDRESS.split(':');
        mc.ping({
            host: serverAddress[0],
            port: Number(serverAddress[1]) || 25565
        }, (error, result) => {
            if(error){
                return resolve('- из -');
            }
        
            if('players' in result) {
                resolve(`${result.players.online} из ${result.players.max}`);
            } else {
                resolve(`${result.playerCount} из ${result.maxPlayers}`);
            }

        })
    })
}

export const getServerOnline = unstable_cache(fetchOnline, ['server-online'], {
    revalidate: 30
})