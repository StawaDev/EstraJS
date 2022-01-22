import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

// Async Examples
async function sfw() {
    console.log(await Client.sfw.run())
    console.log(await Client.sfw.poke(2)) // You can generate multiple times! Max 10.
}

sfw();

// Promise Examples
Client.sfw.hug(5).then((output) => { // It generate 5 times! Max 10.
    console.log(output);
});
