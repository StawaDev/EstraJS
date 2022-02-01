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

Example();

// Async Shipper Examples
async function shipper() {
    const data = await Client.shipper.shipper(true, true, 'Player1', 'None', 'Player2', 'None', 'None', {height: 1920, width: 1080})
                                              // save, open, player, player_image, player2, player2_image, background, background_size
}

shipper();

// Promise Shipper Examples
const Example_Shipper = async() => {
    await Client.games.set_shipper(true, true, 'Player1', 'None', 'Player2', 'None', 'None', {height: 1920, width: 1080});
                                   // save, open, player, player_image, player2, player2_image, background, background_size
}

Example_Shipper();
