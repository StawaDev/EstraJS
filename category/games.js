import { Base } from '../base.js';
import { get_api } from '../http.js';
import { PropertiesManager } from '../property.js';

export class Games {
    constructor() {
        this.Base = new Base();
    }

    /**
     * @param {number} generate - Generate specified number of text - Optional
     */
    async truth(generate = Number) {
        var route = 'games/truth'
        var output = await get_api(route);

        var properties = new PropertiesManager({
            text: output.text,
            type: output.type,
            total: output.total_text,
        })

        if (typeof generate === 'number') {
            return this.Base.produce(generate, route, 'text');
        }

        return properties;
    }

    /**
     * @param {number} generate - Generate specified number of text - Optional
     */
    async dare(generate = Number) {
        var route = 'games/dare'
        var output = await get_api(route);

        var properties = new PropertiesManager({
            text: output.text,
            type: output.type,
            total: output.total_text,
        })

        if (typeof generate === 'number') {
            return this.Base.produce(generate, route, 'text');
        }

        return properties;
    }
}
