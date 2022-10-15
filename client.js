import { AniGames } from './category/anigames.js';
import { Games } from './category/games.js';
import { OsuClient } from './category/osu.js';
import { Nsfw } from './category/nsfw.js';
import { Sfw } from './category/sfw.js';
import { Help } from './help.js';

export class EstraClient {
    constructor() {
        this.Sfw = new Sfw();
        this.Nsfw = new Nsfw();
        this.Games = new Games();
        this.AniGames = new AniGames();
        this.OsuClient = new OsuClient();
        this.Help = new Help();
    };
};
