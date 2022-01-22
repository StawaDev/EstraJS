import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

// Async Examples
async function anigames() {
    const  data = await Client.anigames.shipper_waifu("Stawa")
    console.log(data);
    console.log("Player: " + data["player"])
    console.log("Character Name: " + data["character"]);
    console.log("Percentage: " + data["percentage"])
}

anigames();

// Promise Example

Client.anigames.waifu().then((output) => {
    console.log(output); // Full JSON Response
    console.log("Character Name: " + output["character_name"])
    console.log("Image Link: " + output["link"])}
);
