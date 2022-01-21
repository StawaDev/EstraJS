import fetch from "node-fetch";

export var BASE_URL = "https://estra-api.herokuapp.com/api";

export async function get_api(Url=String, Type=String) {
    const response = await fetch(Url);
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    };
    const json = await response.text();
    const obj = JSON.parse(json);
    if (Type === "link") {
        return obj.link;
    }
};

export async function produce(Total=Number, Url=String, Type=String) {
    const LIST = [];
    var i = 0;
    if (Total > 10) {
        throw new Error('Total must be lower than 10')
    }
    while (true) {
        i++;
        const API = await get_api(Url, Type);
        LIST.push(API)
        if (i === Total) break;
    }
    return LIST
};
