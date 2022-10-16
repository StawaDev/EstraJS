import { get_api } from "./http.js";
import { InvalidNumber } from "./errors.js";

export var base_url = "https://estra-api.vercel.app/api/v1/";

export class Base {
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

}
