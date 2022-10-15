import fetch from "node-fetch";
import { base_url } from "./base.js";
import { InvalidResponse } from "./errors.js";

export async function get_api(route = String) {
    const response = await fetch(base_url + route);
    if (!response.ok) {
        throw new InvalidResponse(`Http Error, ${response.status}`);
    };
    const obj = JSON.parse(await response.text());
    return obj;
};

export async function post_api(route = String, _json = JSON) {
    const response = await fetch(base_url + route, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(_json)
    });
    if (!response.ok) {
        throw new InvalidResponse(`Http Error, ${response.status}`);
    };
    const obj = JSON.parse(await response.text());
    return obj;
}
