var SFW_LIST = "1. hug, 2. run, 3. smile, 4. headpat, 5. neko, 6. bite, 7. highfive, 8. poke, 9. slap"
var NSFW_LIST = "1. kill, 2. yaoi , 3. yuri"
var GAMES_LIST = "1. truth, 2. dare, 3. shipper"
var ANIGAMES_LIST = "1. truth, 2. dare, 3. waifu , 4. husbando, 5. shipper_waifu, 6. shipper_husbando"
var OSU_LIST = "1. profile, 2. beatmap"
var ALL_LIST = {
    "Sfw": SFW_LIST,
    "Nsfw": NSFW_LIST,
    "Games": GAMES_LIST,
    "AniGames": ANIGAMES_LIST,
    "Osu": OSU_LIST,
};
 
export class Help {
    async sfw() {
        return SFW_LIST;
    };

    async nsfw() {
        return NSFW_LIST;
    };

    async games() {
        return GAMES_LIST;
    };

    async anigames() {
        return ANIGAMES_LIST;
    };

    async all() {
        return ALL_LIST;
    };
};
