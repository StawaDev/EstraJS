import fetch from "node-fetch";
import { compare } from 'compare-versions';     
import { exec } from "child_process";        


export class AutoUpdate {
    constructor() {
        this.url = 'https://estra-api.vercel.app/version/'
        this.data = {
            "language": "nodejs"
        }
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        this._version = '0.1.7'
    }

    async req() {
        const req = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(this.data)
        });

        return JSON.parse(await req.text());
    }

    async update() {
        var req = await this.req()

        if (compare(this._version, req.version, '=')) {
            return;
        }

        if (compare(this._version, req.version, '<')) {
            exec(`npm i estrajs@latest`, async (error, stdout) => {
                if (error) {
                    throw error;
                }
                throw new Error(stdout);
            });
        }

    }

    async reminder() {
        var req = await this.req()

        if (compare(this._version, req.version, '=')) {
            return;
        }

        if (compare(this._version, req.version, '<')) {
            return `[ Reminder from EstraJS ] : A newer version of Estrapy is available (${req.version})`;
        }
    }
}
