import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

// Async Function Examples
async function sfw() {
    console.log(await Client.sfw.run())
    console.log(await Client.sfw.poke(2)) // You can generate multiple times! Max 10.
}

sfw();

// Promise Examples
const Example = async() => { // It generate 5 times! Max 10.
    const output = await Client.sfw.hug(5)
    console.log(output);
}

Example()
