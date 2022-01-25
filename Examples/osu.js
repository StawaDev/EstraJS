import { OsuClient } from '../index.js';

var clients_id = '' // Put your own osu client_id
var clients_secret = '' // Put your own osu client_secret

const OsuClients = new OsuClient(clients_id, clients_secret);

// Async Function Examples
async function osuclient() {
    console.log(await OsuClients.osubeatmap(2405223)) // Must be a Beatmap_ID
    console.log(await OsuClients.osuprofile('Stawa')) // Can be UserID or Username
}

osuclient();

// Promise Examples
const Example = async() => {
    const output = await OsuClients.osuprofile('Stawa')
    console.log(output.playstyle)
    // or,
    console.log(output['statistics']['ranked_score'])
}

Example()
