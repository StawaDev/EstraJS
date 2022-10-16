import { OsuClient } from 'estrajs';

var clients_id = 1234 // Put your own osu client_id      
var clients_secret = '' // Put your own osu client_secret

const OsuClients = new OsuClient(clients_id, clients_secret);

// Async Function Examples
async function profile() {
    const profile = await OsuClients.profile('Stawa'); // Can be Player's UserID or Username

    console.log(profile.avatar_url);
    console.log(profile.location);
}

profile();

async function beatmap() {
    const beatmap = await OsuClients.beatmap(2405223);

    console.log(beatmap.mode)
    console.log(beatmap.id)
}

beatmap();
