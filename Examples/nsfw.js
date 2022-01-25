import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

// Async Function Examples
async function nsfw() {
    console.log(await Client.nsfw.kill())
    console.log(await Client.nsfw.yaoi(2)) // You can generate multiple times! Max 10.
}

nsfw();

// Promise Examples
const Example = async() => { // It generate 5 times! Max 10.
    const output = await Client.nsfw.yuri(5)
    console.log(output);
}

Example()

