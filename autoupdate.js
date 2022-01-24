import fetch from 'node-fetch';
import { BASE_URL, Current_IV } from './base.js';
import { exec } from "child_process";

const version_url = BASE_URL.replace('/api', '/version');

async function get_data() {
    const response = await fetch(version_url);
    const json = await response.text();
    const obj = JSON.parse(json);
    return obj;
}

const data = await get_data();
const Current_V = data.EstraJS.Version;

export class AutoUpdate {
    async update() {
        exec(`npm i estrajs@${Current_V}`, async (error, stdout) => {
            if (error) {
                throw error;
            }
            return stdout;
        });
    }

    async config(power=true, output=Boolean, change_log=Boolean) {
        if (power === true) {
            if (change_log === false, undefined && output === false, undefined) {
                return;
            }

            if (change_log === true && output === true) {
                if (Current_IV < Current_V) {
                    await this.update();
                    console.log("EstraJS - It seems you got an older version of EstraJS, AutoUpdate will update it to the newest version.");
                    return;
                }
                console.log("EstraJS - Version is Up to Date.");
                return;
            }

            if (change_log === true) {
                console.log(await data.EstraJS['Change Logs']);
                return;
            }

            if (output === true) {
                if (Current_IV < Current_V) {
                    console.log("EstraJS - It seems you got an older version of EstraJS, AutoUpdate will update it to the newest version.");
                    return;
                }
                console.log("EstraJS - Version is Up to Date.");
                return;
            }
        }
    }
}
