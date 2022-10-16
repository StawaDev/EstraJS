import { EstraClient } from "estrajs";

const Client = new EstraClient();

// Async Function Example        
async function sfw() {
    const hug = await Client.Sfw.hug();
    const run = await Client.Sfw.run();

    console.log(hug.url);
    console.log(run.url);
}

sfw();

// Promise Example
const promise_example = async () => {
    const output = await Client.sfw.hug(5);
    console.log(output);
}

promise_example();
