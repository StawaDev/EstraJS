import { BASE_URL , get_api, produce } from './base.js';

export class EstraClient {
    constructor() {
        this.sfw = {
            async run(generate=Number) {
                var Url = `${BASE_URL}/sfw/run`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            },

            async hug(generate=Number) {
                var Url = `${BASE_URL}/sfw/hug`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            },

            async smile(generate=Number) {
                var Url = `${BASE_URL}/sfw/smile`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            },

            async headpat(generate=Number) {
                var Url = `${BASE_URL}/sfw/headpat`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            },

            async poke(generate=Number) {
                var Url = `${BASE_URL}/sfw/poke`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            },

            async bite(generate=Number) {
                var Url = `${BASE_URL}/sfw/bite`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            },

            async neko(generate=Number) {
                var Url = `${BASE_URL}/sfw/neko`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            },

            async highfive(generate=Number) {
                var Url = `${BASE_URL}/sfw/headpat`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            },

            async slap(generate=Number) {
                var Url = `${BASE_URL}/sfw/slap`
                if (typeof generate === "number") {
                    return produce(generate, Url, "link");
                }

                return get_api(Url, "link");
            }
        };
    };
};
