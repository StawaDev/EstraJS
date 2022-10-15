import { Base } from '../base.js';
import { get_api } from '../http.js';
import { PropertiesManager } from '../property.js';

export class Nsfw {
    constructor() {
        this.Base = new Base();
    }

    /**
     * @param {number} generate - Generate how many requests to return - Optional
     */
    async kill(generate = Number) {
        var route = 'nsfw/kill'
        var output = await get_api(route);

        var properties = new PropertiesManager({
            url: output.link,
            type: output.type,
            total: output.total_image,
        })

        if (typeof generate === 'number') {
            return this.Base.produce(generate, route, 'link');
        }

        return properties;
    }

    /**
     * @param {number} generate - Generate how many requests to return - Optional
     */
    async yuri(generate = Number) {
        var route = 'nsfw/yuri'
        var output = await get_api(route);

        var properties = new PropertiesManager({
            url: output.link,
            type: output.type,
            total: output.total_image,
        })

        if (typeof generate === 'number') {
            return this.Base.produce(generate, route, 'link');
        }

        return properties;
    }

    /**
     * @param {number} generate - Generate how many requests to return - Optional
     */

    async yaoi(generate = Number) {
        var route = 'nsfw/yaoi'
        var output = await get_api(route);

        var properties = new PropertiesManager({
            url: output.link,
            type: output.type,
            total: output.total_image,
        })

        if (typeof generate === 'number') {
            return this.Base.produce(generate, route, 'link');
        }

        return properties;
    }
}
