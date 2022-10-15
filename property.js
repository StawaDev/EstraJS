export function convert_object(obj) {
    return new Map(Object.entries(obj));
}

export class PropertiesManager {
    constructor({
        arg,
        ...kwargs
    } = {}) {
        this.url = convert_object(kwargs).get("url")   
        this.text = convert_object(kwargs).get('text');
        this.type = convert_object(kwargs).get("type");
        this.player = convert_object(kwargs).get("player");
        this.character_name = convert_object(kwargs).get("character_name");
        this.percentage = convert_object(kwargs).get("percentage");
        this.total = convert_object(kwargs).get("total");
    };
}

export class OsuProfileProperties {
    constructor({
        arg,
        ...kwargs
    } = {}) {
        this.avatar_url = convert_object(kwargs).get('avatar_url')
        this.country_code = convert_object(kwargs).get('country_code')
        this.default_group = convert_object(kwargs).get('default_group')
        this.id = convert_object(kwargs).get('id')
        this.is_active = convert_object(kwargs).get('is_active')
        this.is_bot = convert_object(kwargs).get('is_bot')
        this.is_deleted = convert_object(kwargs).get('is_deleted')
        this.is_online = convert_object(kwargs).get('is_online')
        this.is_supporter = convert_object(kwargs).get('is_supporter')
        this.last_visit = convert_object(kwargs).get('last_visit')
        this.pm_friends_only = convert_object(kwargs).get('pm_friends_only')
        this.profile_colour = convert_object(kwargs).get('profile_colour')
        this.username = convert_object(kwargs).get('username')
        this.cover_url = convert_object(kwargs).get('cover_url')
        this.discord = convert_object(kwargs).get('discord')
        this.has_supported = convert_object(kwargs).get('has_supported')
        this.interests = convert_object(kwargs).get('interests')
        this.join_date = convert_object(kwargs).get('join_date')
        this.kudosu = convert_object(kwargs).get('kudosu')
        this.location = convert_object(kwargs).get('location')
        this.max_blocks = convert_object(kwargs).get('max_blocks')
        this.max_friends = convert_object(kwargs).get('max_friends')
        this.occupation = convert_object(kwargs).get('occupation')
        this.playmode = convert_object(kwargs).get('playmode')
        this.playstyle = convert_object(kwargs).get('playstyle')
        this.post_count = convert_object(kwargs).get('post_count')
        this.profile_order = convert_object(kwargs).get('profile_order')
        this.title = convert_object(kwargs).get('title')
        this.title_url = convert_object(kwargs).get('title_url')
        this.twitter = convert_object(kwargs).get('twitter')
        this.website = convert_object(kwargs).get('website')
        this.country = convert_object(kwargs).get('country')
        this.cover = convert_object(kwargs).get('cover')
        this.account_history = convert_object(kwargs).get('account_history')
        this.active_tournament_banner = convert_object(kwargs).get('active_tournament_banner')
        this.badges = convert_object(kwargs).get('badges')
        this.beatmap_playcounts_count = convert_object(kwargs).get('beatmap_playcounts_count')
        this.comments_count = convert_object(kwargs).get('comments_count')
        this.favourite_beatmapset_count = convert_object(kwargs).get('favourite_beatmapset_count')
        this.follower_count = convert_object(kwargs).get('follower_count')
        this.graveyard_beatmapset_count = convert_object(kwargs).get('graveyard_beatmapset_count')
        this.groups = convert_object(kwargs).get('groups')
        this.guest_beatmapset_count = convert_object(kwargs).get('guest_beatmapset_count')
        this.loved_beatmapset_count = convert_object(kwargs).get('loved_beatmapset_count')
        this.mapping_follower_count = convert_object(kwargs).get('mapping_follower_count')
        this.monthly_playcounts = convert_object(kwargs).get('monthly_playcounts')
        this.page = convert_object(kwargs).get('page')
        this.pending_beatmapset_count = convert_object(kwargs).get('pending_beatmapset_count')
        this.previous_usernames = convert_object(kwargs).get('previous_usernames')
        this.ranked_beatmapset_count = convert_object(kwargs).get('ranked_beatmapset_count')
        this.replays_watched_counts = convert_object(kwargs).get('replays_watched_counts')
        this.scores_best_count = convert_object(kwargs).get('scores_best_count')
        this.scores_first_count = convert_object(kwargs).get('scores_first_count')
        this.scores_pinned_count = convert_object(kwargs).get('scores_pinned_count')
        this.scores_recent_count = convert_object(kwargs).get('scores_recent_count')
        this.statistics = convert_object(kwargs).get('statistics')
        this.support_level = convert_object(kwargs).get('support_level')
        this.user_achievements = convert_object(kwargs).get('user_achievements')
        this.rank_history = convert_object(kwargs).get('rank_history')
        this.rankHistory = convert_object(kwargs).get('rankHistory')
        this.ranked_and_approved_beatmapset_count = convert_object(kwargs).get('ranked_and_approved_beatmapset_count')
        this.unranked_beatmapset_count = convert_object(kwargs).get('unranked_beatmapset_count')
    }
}

export class OsuBeatmapProperties {
    constructor({
        arg,
        ...kwargs
    } = {}) {
        this.beatmapset_id = convert_object(kwargs).get('beatmapset_id')
        this.difficulty_rating = convert_object(kwargs).get('difficulty_rating')
        this.id = convert_object(kwargs).get('id')
        this.mode = convert_object(kwargs).get('mode')
        this.status = convert_object(kwargs).get('status')
        this.total_length = convert_object(kwargs).get('total_length')
        this.user_id = convert_object(kwargs).get('user_id')
        this.version = convert_object(kwargs).get('version')
        this.accuracy = convert_object(kwargs).get('accuracy')
        this.ar = convert_object(kwargs).get('ar')
        this.bpm = convert_object(kwargs).get('bpm')
        this.convert = convert_object(kwargs).get('convert')
        this.count_circles = convert_object(kwargs).get('count_circles')
        this.count_sliders = convert_object(kwargs).get('count_sliders')
        this.count_spinners = convert_object(kwargs).get('count_spinners')
        this.cs = convert_object(kwargs).get('cs')
        this.deleted_at = convert_object(kwargs).get('deleted_at')
        this.drain = convert_object(kwargs).get('drain')
        this.hit_length = convert_object(kwargs).get('hit_length')
        this.is_scoreable = convert_object(kwargs).get('is_scoreable')
        this.last_updated = convert_object(kwargs).get('last_updated')
        this.mode_int = convert_object(kwargs).get('mode_int')
        this.passcount = convert_object(kwargs).get('passcount')
        this.playcount = convert_object(kwargs).get('playcount')
        this.ranked = convert_object(kwargs).get('ranked')
        this.url = convert_object(kwargs).get('url')
        this.checksum = convert_object(kwargs).get('checksum')
        this.beatmapset = convert_object(kwargs).get('beatmapset')
        this.failtimes = convert_object(kwargs).get('failtimes')
        this.max_combo = convert_object(kwargs).get('max_combo')
    }
}
