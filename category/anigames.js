import { Base } from '../base.js';
import { get_api } from '../http.js';
import { PropertiesManager } from '../property.js';

export class AniGames {
    constructor() {
        this.Base = new Base();
    }

    /**
     * @param {number} generate - Generate how many requests to return - Optional
     */
    async truth(generate = Number) {
        var route = 'anigames/truth'
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
     * @param {number} generate - Generate how many requests to return - Optional
     */
    async dare(generate = Number) {
        var route = 'anigames/dare'
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

    async waifu() {
        var route = 'anigames/waifu';
        var output = await get_api(route);

        var properties = new PropertiesManager({
            url: output.link,
            type: output.type,
            character_name: output.character_name,
            total: output.total_image,
        })

        return properties;
    }


    async husbando() {
        var route = 'anigames/husbando';
        var output = await get_api(route);

        var properties = new PropertiesManager({
            url: output.link,
            type: output.type,
            character_name: output.character_name,
            total: output.total_image,
        })

        return properties;
    }

    /**
     * @param {string} player - Player's name - Optional
     */
    async shipper_waifu(player = String) {
        var route = `anigames/shipper/waifu/?player=${player}`;
        var output = await get_api(route);

        var properties = new PropertiesManager({
            player: output.player,
            character_name: output.character_name,
            percentage: output.percentage,
        })

        if (typeof generate === 'number') {
            return this.Base.produce(generate, route, 'link');
        }

        return properties;
    }

    /**
     * @param {string} player - Player's name - Optional
     */
    async shipper_husbando(player) {
        var route = `anigames/shipper/husbando/?player=${player}`;
        var output = await get_api(route);

        var properties = new PropertiesManager({
            player: output.player,
            character_name: output.character_name,
            percentage: output.percentage,
        })

        if (typeof generate === 'number') {
            return this.Base.produce(generate, route, 'link');
        }

        return properties;
    }
}
