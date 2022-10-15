import { post_api } from '../http.js';
import {
    OsuProfileProperties,
    OsuBeatmapProperties,
} from '../property.js';

export class OsuClient { 
    constructor(client_id, client_secret) {
        this.client_id = client_id;
        this.client_secret = client_secret;
    }

    /**
     * @param {string} username - The player's username or id.
     */
    async profile(username = String & Number) {
        var _json = {
            "user": username,
            "client_id": this.client_id,
            "client_secret": this.client_secret
        }
        var output = await post_api("osu/user", _json);
        var properties = new OsuProfileProperties(output);

        return properties;
    }

    /**
     * @param {Number} beatmap_id - The ID of the beatmap
     */
    async beatmap(beatmap_id = Number) {
        var _json = {
            "id": beatmap_id,
            "client_id": this.client_id,
            "client_secret": this.client_secret
        }
        var output = await post_api("osu/beatmap", _json);
        var properties = new OsuBeatmapProperties(output);

        return properties;
    }
}
