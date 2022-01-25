import { get_api, produce } from './base.js';

class EstraClient {
    constructor() {
        this.sfw = {
                async run(generate = Number) {
                    var Url = 'sfw/run'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async hug(generate = Number) {
                    var Url = 'sfw/hug'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async smile(generate = Number) {
                    var Url = 'sfw/smile'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async headpat(generate = Number) {
                    var Url = 'sfw/headpat'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async poke(generate = Number) {
                    var Url = 'sfw/poke'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async bite(generate = Number) {
                    var Url = 'sfw/bite'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async neko(generate = Number) {
                    var Url = 'sfw/neko'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async highfive(generate = Number) {
                    var Url = 'sfw/headpat'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async slap(generate = Number) {
                    var Url = 'sfw/slap'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                }
            },

            this.nsfw = {
                async kill(generate = Number) {
                    var Url = 'nsfw/kill'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async yuri(generate = Number) {
                    var Url = 'nsfw/yuri'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                },

                async yaoi(generate = Number) {
                    var Url = 'nsfw/yaoi'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'link');
                    }

                    return get_api(Url, false, 'link');
                }
            },

            this.games = {
                async truth(generate = Number) {
                    var Url = 'games/truth'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'text');
                    }

                    return get_api(Url, false, 'text');
                },

                async dare(generate = Number) {
                    var Url = 'games/dare'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'text');
                    }

                    return get_api(Url, false, 'text');
                }
            },

            this.anigames = {
                async truth(generate = Number) {
                    var Url = 'anigames/truth'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'text');
                    }
                    return get_api(Url, false, 'text');
                },

                async dare(generate = Number) {
                    var Url = 'anigames/dare'
                    if (typeof generate === 'number') {
                        return produce(generate, Url, 'text');
                    }
                    return get_api(Url, false, 'text');
                },

                async waifu() {
                    return get_api('anigames/waifu', true);
                },

                async husbando() {
                    return get_api('anigames/husbando', true);
                },

                async shipper_waifu(player = String) {
                    return get_api(`anigames/shipper/waifu/?player=${player}`, true);
                },

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

    async osuprofile(username=String) {
        return get_api(`osu/?user=${username}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    }

    async osubeatmap(beatmap_id=Number) {
        return get_api(`osubeatmap/?id=${beatmap_id}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    }
}

export {
    EstraClient,
    OsuClient
}