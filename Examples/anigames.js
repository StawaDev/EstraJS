import { EstraClient } from "estrajs";

const Client = new EstraClient();

// Async Function Example
async function shipper_player() {
    const data = await Client.AniGames.shipper_waifu("Stawa");

    console.log("Player: " + data.player);
    console.log("Character Name: " + data.character_name);
    console.log("Percentage: " + data.percentage);
}

shipper_player();

// Second Example
async function truth_dare() {
    const truth = await Client.AniGames.truth();
    const dare = await Client.AniGames.dare();

    console.log(`Truth: ${truth.text}`);
    console.log(`Dare: ${dare.text}`);

};

truth_dare();

// Promise Example
const promise_example = async () => {
    const output = await Client.AniGames.waifu();
    console.log(`Character Name: ${output.character_name}`);
    console.log(`Image Link: ${output.url}`);
};

promise_example();
