var SFW_LIST = "1. Hug, 2. Run, 3. Smile, 4. Headpat, 5. Neko, 6. Bite, 7. Highfive, 8. Poke, 9. Slap"
var NSFW_LIST = "1. Kill, 2.Yuri, 3. Yuri"
var GAMES_LIST = "1. Truth, 2. Dare"
var ANIGAMES_LIST = "1. Truth, 2. Dare"
var ALL_LIST = {
    "Sfw": SFW_LIST,
    "Nsfw": NSFW_LIST,
    "Games": GAMES_LIST,
    "AniGames": ANIGAMES_LIST,
};

class EstraHelpClass {
    sfw() {
        return SFW_LIST;
    };

    nsfw() {
        return NSFW_LIST;
    };

    games() {
        return GAMES_LIST;
    };

    anigames() {
        return ANIGAMES_LIST;
    };

    all() {
        return ALL_LIST;
    };
};

const EstraHelp = new EstraHelpClass // Optional

export {
    EstraHelp,
    EstraHelpClass
};
