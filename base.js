import fetch from "node-fetch";

export var BASE_URL = "https://estra-api.herokuapp.com/api/";
export var Current_IV = '0.1.1'

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
