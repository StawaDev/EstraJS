import { fileURLToPath } from 'url';
import { get_api } from "./http.js";
import { InvalidNumber } from "./errors.js";
import fetch from "node-fetch";
import fs from "fs";
import path from 'path';
import open from 'open';

export var base_url = "https://estra-api.vercel.app/api/v1/";

export class Base {
    constructor () {
        this._filename = fileURLToPath(import.meta.url);
        this._dirname = path.dirname(this._filename);
        this.PathImage = this._dirname + '\\shipper.jpg'
    }

    async produce(total = Number, route = String, type = String) {
        const generated_urls = []
        var i = 0;

        if (total > 10 || total < 2) {
            throw new InvalidNumber('Cannot generate more than 10 or less than 1 request at a time.')
        }

        while (true) {
            i++;

            const results = await get_api(route);
            generated_urls.push(results[type]);

            if (i === total) break;
        }
        return generated_urls
    };

    async download(url = String) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(this.PathImage, buffer);
    }

    async get_image(url = String, save = Boolean, open_file = Boolean) {
        if (save === true && open_file === false) {
            return await download(url);
        }
        if (save === false || open_file === false) {
            return;
        }
        if (save === true || open_file === true) {
            return await download(url), open(this.PathImage);
        }
    }

}
