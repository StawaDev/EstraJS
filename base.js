import fetch from "node-fetch";
import fs from "fs";
import path from 'path';
import {fileURLToPath} from 'url';
import open from 'open';

export var BASE_URL = "https://estra-api.herokuapp.com/api/";
export var Current_IV = '0.1.1'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PathImage = __dirname + '\\shipper.jpg'

export async function get_api(Url=String, JsonType=Boolean, Type=String) {
    const response = await fetch(BASE_URL + Url);
    if (!response.ok) {
        throw new Error(`Http Error, ${response.status}`);
    };
    const json = await response.text();
    const obj = JSON.parse(json);
    if (JsonType === false) {
        return obj[Type];
    }
    return obj;
};

export async function produce(Total=Number, Url=String, Type=String) {
    const LIST = [];
    var i = 0;
    if (Total > 10) {
        throw new Error('Total must be lower than 10')
    }
    if (Total === 0 || (Total === 1)) {
        throw new Error('Total must be greater than 1')
    }

    while (true) {
        i++;
        const API = await get_api(Url, false, Type);
        LIST.push(API)
        if (i === Total) break;
    }
    return LIST
};

async function download(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(PathImage, buffer);
}

export async function get_image(save=Boolean, open_file=Boolean, url) {
    if (save === true && open_file === false) {
        return await download(url);
    }
    if (save === false || open_file === false) {
        return;
    }
    if (save === true || open_file === true) {
        await download(url), open(PathImage);
        return;
    }
}
