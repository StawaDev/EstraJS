import { OsuClient } from '../index.js';

var clients_id = 11944
var clients_secret = "t07F6m8ikFnOl4Mxtzc0eXlHIZuVEjw123pPYnwW"

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
