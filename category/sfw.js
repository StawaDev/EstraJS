import { Base } from '../base.js';
import { get_api } from '../http.js';
import { PropertiesManager } from '../property.js';

export class Sfw {
    constructor() {
        this.Base = new Base();
    }

    /**
     * @param {number} generate -  Generate how many requests to return - Optional
     */
    async run(generate = Number) {
        var route = 'sfw/run'
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
    async hug(generate = Number) {
        var route = 'sfw/hug'
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
    async smile(generate = Number) {
        var route = 'sfw/smile'
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
    async headpat(generate = Number) {
        var route = 'sfw/headpat'
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
    async poke(generate = Number) {
        var route = 'sfw/poke'
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
    async bite(generate = Number) {
        var route = 'sfw/bite'
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
    async neko(generate = Number) {
        var route = 'sfw/neko'
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
    async highfive(generate = Number) {
        var route = 'sfw/headpat'
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
    async slap(generate = Number) {
        var route = 'sfw/slap'
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
