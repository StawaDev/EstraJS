import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

// Async Examples
async function nsfw() {
    console.log(await Client.nsfw.kill())
    console.log(await Client.nsfw.yaoi(2)) // You can generate multiple times! Max 10.
}

nsfw();

// Promise Examples
Client.nsfw.yuti(5).then((output) => { // It generate 5 times! Max 10.
    console.log(output);
});
