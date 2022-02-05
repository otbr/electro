export interface TopPremiumPoints {
	premium_points: Number,
	name: String
}

export interface Vocations {
	vocation: Number,
	total: Number
}

export interface Character {
	id: number,
	name: String,
	world_id: number,
	group_id: number,
	account_id: number,
	level: number,
	vocation: number,
	health: number,
	healthmax: number,
	experience: number,
	lookbody: number,
	lookfeet: number,
	lookhead: number,
	looklegs: number,
	looktype: number,
	lookaddons: number,
	maglevel: number,
	mana: number,
	manamax: number,
	manaspent: number,
	soul: number,
	town_id: number,
	posx: number,
	posy: number,
	posz: number,
	cap: number,
	sex: number,
	lastlogin: number,
	lastip: number,
	save: number,
	skull: number,
	skulltime: number,
	rank_id: number,
	guildnick: String,
	lastlogout: number,
	blessings: number,
	pvp_blessing: number,
	balance: number,
	stamina: number,
	direction: number,
	loss_experience: number,
	loss_mana: number,
	loss_skills: number,
	loss_containers: number,
	loss_items: number,
	premend: number,
	online: number,
	marriage: number,
	marrystatus: number,
	promotion: number,
	deleted: number,
	description: String,
	created: number,
	nick_verify: number,
	old_name: String,
	hidden: number,
	worldtransfer: String,
	comment: String,
	show_outfit: number,
	show_eq: number,
	show_bars: number,
	show_skills: number,
	show_quests: number,
	exphist_lastexp: number,
	exphist1: number,
	exphist2: number,
	exphist3: number,
	exphist4: number,
	exphist5: number,
	exphist6: number,
	exphist7: number,
	onlinetimetoday: number,
	onlinetime1: number,
	onlinetime2: number,
	onlinetime3: number,
	onlinetime4: number,
	onlinetime5: number,
	onlinetime6: number,
	onlinetime7: number,
	onlinetimeall: number,
	ip: String,
	cast: number,
	castViewers: number,
	castDescription: null,
	frags: number,
	offlinetraining_time: number,
	offlinetraining_skill: number,
	broadcasting: number,
	viewers: number
}

export interface CharacterSkills {
	player_id: number,
	skillid: number,
	value: number,
	count: number
}