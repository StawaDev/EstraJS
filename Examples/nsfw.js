import { EstraClient } from "estrajs";

const Client = new EstraClient();

// Async Function Example        
async function sfw() {
    const kill = await Client.Nsfw.kill();
    const yuri = await Client.Nsfw.yuri();

    console.log(kill.url);
    console.log(yuri.url);
}

sfw();

// Promise Example
const promise_example = async () => {
    const output = await Client.Nsfw.kill(5);
    console.log(output);
}

promise_example();
