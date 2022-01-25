import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

// Async Function Examples
async function games() {
    const data = await Client.games.truth(5) //You can generate multiple times! Max 10.
    console.log(data);
}

games();

// Promise Examples
const Example = async() => { // It generate 5 times! Max 10.
    const output = await Client.games.truth(2)
    console.log(output);
}

Example()
