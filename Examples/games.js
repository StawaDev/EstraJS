import { EstraClient } from "estrajs";

const Client = new EstraClient();

// Async Function Example
async function truth_dare() {
    const truth = await Client.Games.truth();
    const dare = await Client.Games.dare();

    console.log(truth.text);
    console.log(dare.text)
}

truth_dare();

// Promise Example
const promise_example = async () => {
    const output = await Client.Games.truth(2);

    console.log(output);
}

promise_example();
