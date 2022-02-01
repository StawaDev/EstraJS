import { get_api, get_image, produce, BASE_URL } from './base.js';

class EstraClient {
    constructor() {
        this.sfw = {

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async run(generate = Number) {
                    var Url = 'sfw/run'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async hug(generate = Number) {
                    var Url = 'sfw/hug'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async smile(generate = Number) {
                    var Url = 'sfw/smile'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async headpat(generate = Number) {
                    var Url = 'sfw/headpat'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async poke(generate = Number) {
                    var Url = 'sfw/poke'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async bite(generate = Number) {
                    var Url = 'sfw/bite'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async neko(generate = Number) {
                    var Url = 'sfw/neko'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async highfive(generate = Number) {
                    var Url = 'sfw/headpat'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async slap(generate = Number) {
                    var Url = 'sfw/slap'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                }
            },

            this.nsfw = {

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async kill(generate = Number) {
                    var Url = 'nsfw/kill'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async yuri(generate = Number) {
                    var Url = 'nsfw/yuri'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */

                async yaoi(generate = Number) {
                    var Url = 'nsfw/yaoi'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                }
            },

            this.games = {

                /**
                * @param {number} generate - Generate specified number of text - Optional
                */
                async truth(generate = Number) {
                    var Url = 'games/truth'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'text');
                    }

                    return get_api(Url, false, 'text');
                },

                /**
                * @param {number} generate - Generate specified number of text - Optional
                */
                async dare(generate = Number) {
                    var Url = 'games/dare'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'text');
                    }

                    return get_api(Url, false, 'text');
                },

                /**
                 * ## A Setup Data for Shipper Games
                * @param {string} player - The player name - Optional
                * @param {string} player_image - The player image url - Optional
                * @param {string} player2 - The second player name - Optional
                * @param {string} player2_image - The second player image url - Optional
                * @param {string} background - The background image url - Optional
                * @param {object} background_size - The background size - Optional
                * 
                */
                async set_shipper(save=Boolean, open=Boolean, player, player_image, player2, player2_image, background, background_size = {height: 1920, width: 1080}) {
                    const url = `${BASE_URL}games/shipper/image/?player=${player}&player2=${player2}&player_image=${player_image}&player2_image=${player2_image}&background=${background}&background_size=${background_size['height']}x${background_size['width']}`;
                    return await get_image(save, open, url);
                }
            },

            this.anigames = {
                /**
                * @param {number} generate - Generate specified number of text - Optional
                */
                async truth(generate = Number) {
                    var Url = 'anigames/truth'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'text');
                    }
                    return get_api(Url, false, 'text');
                },

                /**
                * @param {number} generate - Generate specified number of text - Optional
                */
                async dare(generate = Number) {
                    var Url = 'anigames/dare'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'text');
                    }
                    return get_api(Url, false, 'text');
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async waifu() {
                    return get_api('anigames/waifu', true);
                },

                /**
                * @param {number} generate - Generate specified number of images - Optional
                */
                async husbando() {
                    return get_api('anigames/husbando', true);
                },

                /**
                 * @param {string} player - The player name - Optional
                */
                async shipper_waifu(player = String) {
                    return get_api(`anigames/shipper/waifu/?player=${player}`, true);
                },

                /**
                 * @param {string} player - The player name - Optional
                */
                async shipper_husbando(player) {
                    return get_api(`anigames/shipper/husbando/?player=${player}`, true);
                }
            };
    };
};

class OsuClient {
    constructor(client_id, client_secret) {
        this.client_id = client_id;
        this.client_secret = client_secret;
    }

    /**
    * @param {string} username - The username of the user, can be used using ID
    */
    async osuprofile(username=String & Number) {
        return get_api(`osu/?user=${username}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    }

    /**
     * @param {Number} beatmap_id - The ID of the beatmap
    */
    async osubeatmap(beatmap_id=Number) {
        return get_api(`osubeatmap/?id=${beatmap_id}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    }
}

export {
    EstraClient,
    OsuClient
}