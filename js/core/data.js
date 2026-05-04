// Search: game database. Add new games inside fullGameData.

// Search: normalize game cover path for every page.
function withCover(game) {
  if (!game.cover || !game.cover.startsWith('/')) {
    game.cover = `/images/${game.id}.jpg`;
  }
  return game;
}

const fullGameData = {};

// ============================================================
// Search: indie games and classic games.
// ============================================================

fullGameData.undertale = withCover({
  id: 'undertale', title: 'Undertale',
  developer: 'Toby Fox', release: 'September 2015',
  platforms: 'PC, PS4, Xbox One, Switch',
  genre: 'RPG, Adventure', year: 2015,
  metaScore: 92, positive: 60, mixed: 25, negative: 15,
  summary: 'A narrative-driven RPG where combat can be resolved without violence. Featuring memorable characters, humor, and emotional depth - enter the Underground and choose your path.',
  trailer: '1Hojv0m3TqA', cover: '/images/undertale.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/391540/Undertale/' },
    { icon: '🕹️', name: 'Nintendo Switch', url: 'https://www.nintendo.com/games/detail/undertale-switch/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'FEB 11, 2026', text: 'A genre-defying RPG that rewards empathy and subverts player expectations brilliantly.' },
    { source: 'GameSpot', score: 9, date: 'FEB 11, 2026', text: 'Smart writing and unforgettable characters make this indie title exceptional.' }
  ],
  defaultUserReviews: [
    { user: 'soulplayer', score: 10, date: '2026-02-11', text: 'Soundtrack, humor, story - everything is incredible. Best indie game I\'ve ever played.' },
    { user: 'pacifistrun', score: 9, date: '2026-02-10', text: 'Meaningful gameplay choices and multiple endings make it very replayable.' }
  ]
});

fullGameData.hades = withCover({
  id: 'hades', title: 'Hades',
  developer: 'Supergiant Games', release: 'September 2020',
  platforms: 'PC, PS5, PS4, Xbox, Switch',
  genre: 'Roguelike, Action', year: 2020,
  metaScore: 93, positive: 70, mixed: 20, negative: 10,
  summary: 'Defy the god of death as you hack and slash out of the Underworld in this award-winning roguelike. Stunning art, fluid combat, and narrative that evolves with every run.',
  trailer: '91t0ha9x0AE', cover: '/images/hades.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1145360/Hades/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'SEP 17, 2020', text: 'Hades is a generation-defining roguelike that combines satisfying combat with a compelling, ever-evolving narrative.' }
  ],
  defaultUserReviews: [
    { user: 'zagreusfan', score: 10, date: '2026-03-10', text: 'Fluid combat, gripping story, incredibly replayable!' },
    { user: 'skelly_fan', score: 10, date: '2026-03-01', text: 'Best indie roguelike I\'ve ever played.' }
  ]
});

fullGameData.stardew = withCover({
  id: 'stardew', title: 'Stardew Valley',
  developer: 'ConcernedApe', release: 'February 2016',
  platforms: 'PC, PS4, Xbox One, Switch',
  genre: 'Farming Sim, RPG', year: 2016,
  metaScore: 89, positive: 65, mixed: 25, negative: 10,
  summary: 'Escape to the countryside and build your dream farm. Grow crops, raise animals, befriend townsfolk, and uncover the secrets of Pelican Town.',
  trailer: 'ot7uXNQskhs', cover: '/images/stardew.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/413150/Stardew_Valley/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'MAR 26, 2016', text: 'A charming, deep farming sim that perfectly respects your time and rewards exploration.' }
  ],
  defaultUserReviews: [
    { user: 'farmer123', score: 10, date: '2026-01-20', text: 'So relaxing. Perfect for unwinding after a long day.' },
    { user: 'haley_s', score: 9, date: '2026-01-15', text: 'Best $15 I ever spent. Hundreds of hours and I barely scratched the surface.' }
  ]
});

fullGameData.hollow = withCover({
  id: 'hollow', title: 'Hollow Knight',
  developer: 'Team Cherry', release: 'February 2017',
  platforms: 'PC, PS4, Xbox, Switch',
  genre: 'Metroidvania, Action', year: 2017,
  metaScore: 90, positive: 65, mixed: 25, negative: 10,
  summary: 'Forge your path in a vast, interconnected world of insects and heroes. Explore ancient caverns, battle challenging foes, and uncover dark secrets.',
  trailer: 'UAO2urG23S4', cover: '/images/hollow.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/367520/Hollow_Knight/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'JUN 26, 2018', text: 'A stunning metroidvania with incredible atmosphere and rewarding, precise combat.' }
  ],
  defaultUserReviews: [
    { user: 'knight', score: 10, date: '2026-05-15', text: 'The best exploration experience in gaming.' },
    { user: 'grubsaver', score: 9, date: '2026-05-05', text: 'Godhome DLC pushed this over the edge. Atmosphere is unmatched. Silksong when?' }
  ]
});

fullGameData.celeste = withCover({
  id: 'celeste', title: 'Celeste',
  developer: 'Maddy Makes Games', release: 'January 2018',
  platforms: 'PC, PS4, Xbox One, Switch',
  genre: 'Platformer, Adventure', year: 2018,
  metaScore: 94, positive: 72, mixed: 18, negative: 10,
  summary: 'Help Madeline survive her inner demons on her journey to the top of Celeste Mountain. A beautiful story about mental health wrapped in tight precision platforming.',
  trailer: '70d9irlxiB4', cover: '/images/celeste.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/504230/Celeste/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'JAN 25, 2018', text: 'A perfect marriage of challenging gameplay and heartfelt storytelling. Celeste is a masterpiece.' },
    { source: 'GameSpot', score: 10, date: 'JAN 25, 2018', text: 'Celeste is one of the best platformers ever made. Precise, meaningful, and deeply human.' }
  ],
  defaultUserReviews: [
    { user: 'maddyfan', score: 10, date: '2026-02-01', text: 'Made me cry and rage in equal measure. Absolutely worth it.' },
    { user: 'platformking', score: 9, date: '2026-01-28', text: 'Incredibly tight controls. Every death feels fair.' }
  ]
});

fullGameData.minecraft = withCover({
  id: 'minecraft', title: 'Minecraft',
  developer: 'Mojang Studios', release: 'November 2011',
  platforms: 'PC, PS4, Xbox One, Switch, Mobile',
  genre: 'Sandbox, Survival', year: 2011,
  metaScore: 93, positive: 70, mixed: 20, negative: 10,
  summary: 'Build, explore, and survive in an endlessly generated world. Mine resources, craft tools, and create anything imaginable. The best-selling game of all time.',
  trailer: 'MmB9b5njVbA', cover: '/images/minecraft.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Official Site', url: 'https://www.minecraft.net/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'NOV 18, 2011', text: 'A game about breaking and placing blocks that has become a global cultural phenomenon.' }
  ],
  defaultUserReviews: [
    { user: 'builder123', score: 10, date: '2026-02-20', text: 'A legend. Endless possibilities with zero limits.' },
    { user: 'herobrine_m', score: 8, date: '2026-02-10', text: 'Perfect for kids and adults alike. Nothing else comes close in creativity.' }
  ]
});

fullGameData.deadcells = withCover({
  id: 'deadcells', title: 'Dead Cells',
  developer: 'Motion Twin', release: 'August 2018',
  platforms: 'PC, PS4, Xbox One, Switch',
  genre: 'Roguelike, Metroidvania', year: 2018,
  metaScore: 91, positive: 70, mixed: 22, negative: 8,
  summary: 'Kill. Die. Learn. Repeat. Explore a sprawling, ever-changing castle with fluid, satisfying combat. Dead Cells perfected the roguelike-metroidvania hybrid.',
  trailer: 'vGMCKOixbGo', cover: '/images/deadcells.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/588650/Dead_Cells/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'AUG 07, 2018', text: 'Dead Cells is the pinnacle of the roguelike genre - fluid, fair, and endlessly engaging.' }
  ],
  defaultUserReviews: [
    { user: 'beheaded', score: 9, date: '2026-06-15', text: '500 runs in and still discovering new builds.' }
  ]
});

fullGameData.disco = withCover({
  id: 'disco', title: 'Disco Elysium',
  developer: 'ZA/UM', release: 'October 2019',
  platforms: 'PC, PS4, PS5, Xbox',
  genre: 'RPG, Detective', year: 2019,
  metaScore: 97, positive: 85, mixed: 10, negative: 5,
  summary: 'You\'re a detective. You\'ve lost your memory, your badge, and apparently your mind. Build your character through deep dialogue and unravel a murder mystery in a post-revolutionary city.',
  trailer: 'IsYm5ZFPQUM', cover: '/images/disco.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'OCT 15, 2019', text: 'A once-in-a-generation RPG experience. Literary, hilarious, and genuinely profound.' }
  ],
  defaultUserReviews: [
    { user: 'harrier', score: 10, date: '2026-07-25', text: 'The best writing in any video game. Nothing comes close.' },
    { user: 'kim_kitsuragi', score: 10, date: '2026-07-20', text: 'I have no strong feelings about this. (It\'s a masterpiece.)' }
  ]
});

fullGameData.outerwilds = withCover({
  id: 'outerwilds', title: 'Outer Wilds',
  developer: 'Mobius Digital', release: 'May 2019',
  platforms: 'PC, PS4, PS5, Xbox One, Switch',
  genre: 'Adventure, Mystery', year: 2019,
  metaScore: 85, positive: 70, mixed: 20, negative: 10,
  summary: 'You\'re an astronaut stuck in a time loop at the end of the universe. Explore a handcrafted solar system and piece together the mystery of a dead civilization.',
  trailer: 'd6GtGbI-now', cover: '/images/outerwilds.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/753640/Outer_Wilds/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'JUN 18, 2019', text: 'Outer Wilds is a masterful exploration game that delivers a profound sense of wonder and discovery.' }
  ],
  defaultUserReviews: [
    { user: 'nomai_scholar', score: 10, date: '2026-06-30', text: 'Play it blind. Don\'t look anything up. Greatest gaming experience of my life.' },
    { user: 'hearthian', score: 10, date: '2026-06-25', text: 'The moment everything clicked was the most profound feeling I\'ve had in gaming.' }
  ]
});

// ============================================================
// Search: soulslike games and action games.
// ============================================================

fullGameData.elden = withCover({
  id: 'elden', title: 'Elden Ring',
  developer: 'FromSoftware', release: 'February 2022',
  platforms: 'PC, PS5, PS4, Xbox',
  genre: 'Action RPG, Open World', year: 2022,
  metaScore: 96, positive: 75, mixed: 15, negative: 10,
  summary: 'The Lands Between await. A vast open world crafted by Hidetaka Miyazaki and George R.R. Martin - explore, battle demigods, and claim the Elden Ring.',
  trailer: 'E3Huy2cdih0', cover: '/images/elden.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1245620/ELDEN_RING/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'FEB 23, 2022', text: 'A masterpiece of open-world design that redefines what an action RPG can be.' }
  ],
  defaultUserReviews: [
    { user: 'tarnished', score: 10, date: '2026-04-01', text: 'Brutally hard but impossibly addictive.' },
    { user: 'malenia_hater', score: 9, date: '2026-03-28', text: 'Malenia took me 80 tries. Still a 10/10. Open world exploration is perfection.' },
    { user: 'rennala_fan', score: 10, date: '2026-03-20', text: 'George RR Martin and Miyazaki created something unforgettable. GOTY of the decade.' }
  ]
});

fullGameData.sekiro = withCover({
  id: 'sekiro', title: 'Sekiro: Shadows Die Twice',
  developer: 'FromSoftware', release: 'March 2019',
  platforms: 'PC, PS4, Xbox One',
  genre: 'Action Adventure, Souls-like', year: 2019,
  metaScore: 90, positive: 65, mixed: 25, negative: 10,
  summary: 'Resurrect. Adapt. Conquer. Set in Sengoku Japan, you play as a shinobi seeking revenge with precision sword combat and stealth mechanics unlike any other.',
  trailer: 'rXMX4YJ7Lks', cover: '/images/sekiro.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'MAR 21, 2019', text: 'A masterpiece of combat design. The parry mechanics are deeply satisfying.' }
  ],
  defaultUserReviews: [
    { user: 'shinobi', score: 10, date: '2026-05-10', text: 'Hesitation is defeat. Best combat system FromSoftware has ever made.' },
    { user: 'isshin', score: 9, date: '2026-05-01', text: 'Incredibly hard but the satisfaction is unreal.' }
  ]
});

fullGameData.bloodborne = withCover({
  id: 'bloodborne', title: 'Bloodborne',
  developer: 'FromSoftware', release: 'March 2015',
  platforms: 'PS4',
  genre: 'Action RPG, Souls-like', year: 2015,
  metaScore: 92, positive: 70, mixed: 20, negative: 10,
  summary: 'Hunt your nightmares in the cursed city of Yharnam. Face cosmic horrors, unravel dark mysteries, and embrace the madness in FromSoftware\'s most atmospheric game.',
  trailer: 'G203e1HhixY', cover: '/images/bloodborne.jpg',
  purchaseLinks: [
    { icon: '🎮', name: 'PlayStation Store', url: 'https://store.playstation.com/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'MAR 24, 2015', text: 'A masterpiece of atmosphere and combat. The cosmic horror theme is executed perfectly.' }
  ],
  defaultUserReviews: [
    { user: 'hunter', score: 10, date: '2026-06-15', text: 'A hunter must hunt. Best game ever made.' },
    { user: 'oldblood', score: 10, date: '2026-06-10', text: 'Fear the old blood. The atmosphere is unmatched.' }
  ]
});

// ============================================================
// Search: open world games and AAA games.
// ============================================================

fullGameData.gta5 = withCover({
  id: 'gta5', title: 'Grand Theft Auto V',
  developer: 'Rockstar Games', release: 'September 2013',
  platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S',
  genre: 'Action Adventure, Open World', year: 2013,
  metaScore: 97, positive: 75, mixed: 15, negative: 10,
  summary: 'Three criminals plot their own path in a sprawling sun-soaked metropolis. Experience a cinematic single-player story or dive into the ever-expanding GTA Online.',
  trailer: 'hvoD7ehZPcM', cover: '/images/gta5.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'SEP 16, 2013', text: 'A landmark open-world game that remains unmatched in scope and detail over a decade later.' }
  ],
  defaultUserReviews: [
    { user: 'trevor', score: 10, date: '2026-07-20', text: 'Amazing single player. Online is still going strong.' },
    { user: 'franklin_c', score: 9, date: '2026-07-10', text: 'The three protagonist system is still unmatched. Rockstar at their peak.' }
  ]
});

fullGameData.rdr2 = withCover({
  id: 'rdr2', title: 'Red Dead Redemption 2',
  developer: 'Rockstar Games', release: 'October 2018',
  platforms: 'PC, PS4, Xbox One',
  genre: 'Action Adventure, Open World', year: 2018,
  metaScore: 97, positive: 80, mixed: 12, negative: 8,
  summary: 'America, 1899. The age of outlaws is ending. Arthur Morgan and the Van der Linde gang must rob, steal, and fight to survive. An epic tale of loyalty, honor, and betrayal.',
  trailer: 'gmA6MrX81z4', cover: '/images/rdr2.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'OCT 25, 2018', text: 'A cinematic achievement that redefined the open-world genre. Arthur Morgan is one of gaming\'s greatest protagonists.' },
    { source: 'GameSpot', score: 10, date: 'OCT 26, 2018', text: 'An extraordinary achievement in narrative and open-world design.' }
  ],
  defaultUserReviews: [
    { user: 'arthur', score: 10, date: '2026-04-10', text: 'I got my honor. Best story in gaming.' },
    { user: 'dutchplan', score: 10, date: '2026-04-08', text: 'We just need a little more money. Greatest character arc ever.' }
  ]
});

fullGameData.witcher3 = withCover({
  id: 'witcher3', title: 'The Witcher 3: Wild Hunt',
  developer: 'CD Projekt Red', release: 'May 2015',
  platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S, Switch',
  genre: 'Action RPG, Open World', year: 2015,
  metaScore: 92, positive: 74, mixed: 18, negative: 8,
  summary: 'Play as Geralt of Rivia, a monster hunter for hire in a war-ravaged open world. Make choices that matter in one of the greatest RPGs ever crafted.',
  trailer: 'c0i88t0Kacs', cover: '/images/witcher3.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'MAY 18, 2015', text: 'The Witcher 3 is a monumental achievement in open-world storytelling.' }
  ],
  defaultUserReviews: [
    { user: 'geralt', score: 10, date: '2026-05-20', text: 'Hmm. Still the best RPG available.' },
    { user: 'ciri', score: 10, date: '2026-05-18', text: 'The quests, the world, the characters - nothing comes close.' }
  ]
});

fullGameData.cyberpunk = withCover({
  id: 'cyberpunk', title: 'Cyberpunk 2077',
  developer: 'CD Projekt Red', release: 'December 2020',
  platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S',
  genre: 'Action RPG, Open World', year: 2020,
  metaScore: 86, positive: 62, mixed: 25, negative: 13,
  summary: 'Live the dark future. Night City - a megalopolis of obsession and excess - awaits as V, a mercenary outlaw going after a one-of-a-kind implant. Stunning after major updates.',
  trailer: '8X2kIfS6fb8', cover: '/images/cyberpunk.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'DEC 10, 2020', text: 'An ambitious RPG that delivers a stunning world and compelling story - best on modern hardware.' }
  ],
  defaultUserReviews: [
    { user: 'nocturne', score: 9, date: '2026-06-01', text: 'After 2.0 patch + Phantom Liberty: absolutely incredible.' },
    { user: 'v_merc', score: 8, date: '2026-05-28', text: 'Night City is one of the best game worlds ever designed.' }
  ]
});

fullGameData.godofwar = withCover({
  id: 'godofwar', title: 'God of War (2018)',
  developer: 'Santa Monica Studio', release: 'April 2018',
  platforms: 'PS4, PS5, PC',
  genre: 'Action Adventure, Hack and Slash', year: 2018,
  metaScore: 94, positive: 78, mixed: 15, negative: 7,
  summary: 'Kratos and his son Atreus journey through the Norse realms. A deeply personal story of fatherhood, redemption, and mythology wrapped in visceral combat.',
  trailer: 'FyIwEFXSNOE', cover: '/images/godofwar.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1593500/God_of_War/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'APR 19, 2018', text: 'God of War reinvented itself with stunning results. A powerful story and breathtaking world.' }
  ],
  defaultUserReviews: [
    { user: 'kratos_fan', score: 10, date: '2026-03-20', text: 'BOY! The character development is incredible.' },
    { user: 'atreus', score: 10, date: '2026-03-18', text: 'Father and son story that hits different.' }
  ]
});

fullGameData.re4remake = withCover({
  id: 're4remake', title: 'Resident Evil 4 Remake',
  developer: 'Capcom', release: 'March 2023',
  platforms: 'PC, PS4, PS5, Xbox Series X/S',
  genre: 'Survival Horror, Action', year: 2023,
  metaScore: 93, positive: 74, mixed: 18, negative: 8,
  summary: 'Survive. Adapt. Overcome. The classic reimagined from the ground up. Leon Kennedy must rescue the President\'s daughter from a sinister cult in rural Spain.',
  trailer: 'gp5ocGGvrdE', cover: '/images/re4remake.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'MAR 22, 2023', text: 'Resident Evil 4 Remake is a perfect reimagining that improves on the original while honoring it.' }
  ],
  defaultUserReviews: [
    { user: 'leon_s', score: 10, date: '2026-04-20', text: 'Our President\'s daughter - rescued flawlessly.' },
    { user: 'merchant', score: 9, date: '2026-04-18', text: 'Whaddya buyin? The remake is incredible.' }
  ]
});

// ============================================================
// Search: RPG games and strategy games.
// ============================================================

fullGameData.persona5 = withCover({
  id: 'persona5', title: 'Persona 5 Royal',
  developer: 'Atlus', release: 'October 2019',
  platforms: 'PS4, PS5, Xbox, Switch, PC',
  genre: 'JRPG, Social Sim', year: 2019,
  metaScore: 95, positive: 78, mixed: 15, negative: 7,
  summary: 'Steal corrupt hearts and transform society. Lead the Phantom Thieves of Hearts in a stylish dual life of high-school student and supernatural thief.',
  trailer: 'P2kNnO1BbUE', cover: '/images/persona5.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1687950/Persona_5_Royal/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'OCT 31, 2019', text: 'Persona 5 Royal is a lavish, stylish JRPG with almost no equals. A triumph.' }
  ],
  defaultUserReviews: [
    { user: 'joker', score: 10, date: '2026-07-10', text: 'Will you show them... the ropes? Best JRPG ever made.' },
    { user: 'ryuji', score: 10, date: '2026-07-08', text: 'Dude this game is legitimately perfect.' }
  ]
});

fullGameData.baldursgate3 = withCover({
  id: 'baldursgate3', title: 'Baldur\'s Gate 3',
  developer: 'Larian Studios', release: 'August 2023',
  platforms: 'PC, PS5, Xbox Series X/S',
  genre: 'RPG, Strategy', year: 2023,
  metaScore: 96, positive: 82, mixed: 12, negative: 6,
  summary: 'Gather your party and return to the Forgotten Realms. An epic RPG of unmatched scale and freedom - your choices genuinely shape the world in ways no game has before.',
  trailer: 'oHAkjWIAAFE', cover: '/images/baldursgate3.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'AUG 03, 2023', text: 'BG3 is the new gold standard for RPGs. Larian has delivered something genuinely special.' },
    { source: 'PC Gamer', score: 10, date: 'AUG 03, 2023', text: 'A monumental achievement in player agency and reactive storytelling.' }
  ],
  defaultUserReviews: [
    { user: 'shadowheart', score: 10, date: '2026-09-01', text: 'I\'ve played 400 hours and haven\'t seen everything yet.' },
    { user: 'gale_dekarios', score: 10, date: '2026-08-30', text: 'The most reactive RPG ever made. Period.' }
  ]
});

fullGameData.monhunworld = withCover({
  id: 'monhunworld', title: 'Monster Hunter: World',
  developer: 'Capcom', release: 'January 2018',
  platforms: 'PC, PS4, Xbox One',
  genre: 'Action RPG, Co-op', year: 2018,
  metaScore: 90, positive: 68, mixed: 22, negative: 10,
  summary: 'Hunt. Craft. Evolve. The best-selling Monster Hunter title ever brings 14 weapon types and jaw-dropping ecosystems. A massive co-op adventure that keeps giving.',
  trailer: 'jfNVTQlWfRE', cover: '/images/monhunworld.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'JAN 26, 2018', text: 'Monster Hunter: World is a welcoming, deep, and endlessly rewarding co-op experience.' }
  ],
  defaultUserReviews: [
    { user: 'nergigante', score: 10, date: '2026-06-20', text: '800 hours and still hunting. This game never gets old.' }
  ]
});

// ============================================================
//  NINTENDO / PLATFORMER
// ============================================================

fullGameData.zelda_botw = withCover({
  id: 'zelda_botw', title: 'The Legend of Zelda: Breath of the Wild',
  developer: 'Nintendo', release: 'March 2017',
  platforms: 'Switch',
  genre: 'Action Adventure, Open World', year: 2017,
  metaScore: 97, positive: 83, mixed: 11, negative: 6,
  summary: 'Explore the untamed open world of Hyrule. With unprecedented freedom, Link can climb any surface, cook meals, and discover secrets in every corner of this breathtaking world.',
  trailer: '1rPxiXXxftE', cover: '/images/zelda_botw.jpg',
  purchaseLinks: [
    { icon: '🕹️', name: 'Nintendo Switch', url: 'https://www.nintendo.com/games/detail/the-legend-of-zelda-breath-of-the-wild-switch/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'MAR 03, 2017', text: 'Breath of the Wild is a landmark open-world adventure - a game that will be studied for years.' }
  ],
  defaultUserReviews: [
    { user: 'link', score: 10, date: '2026-08-05', text: 'Redefined what open world games could be.' },
    { user: 'zelda_fan', score: 10, date: '2026-08-02', text: 'Still can\'t believe how magical this world feels.' }
  ]
});

fullGameData.totk = withCover({
  id: 'totk', title: 'The Legend of Zelda: Tears of the Kingdom',
  developer: 'Nintendo', release: 'May 2023',
  platforms: 'Switch',
  genre: 'Action Adventure, Open World', year: 2023,
  metaScore: 96, positive: 83, mixed: 11, negative: 6,
  summary: 'Link explores Hyrule from its depths to the sky islands above. The Ultrahand and Fuse abilities redefine what a Zelda game can be.',
  trailer: 'uHGShqcAHlQ', cover: '/images/totk.jpg',
  purchaseLinks: [
    { icon: '🕹️', name: 'Nintendo Switch', url: 'https://www.nintendo.com/games/detail/the-legend-of-zelda-tears-of-the-kingdom-switch/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'MAY 12, 2023', text: 'Tears of the Kingdom raises the bar again. The Ultrahand mechanics are pure genius.' }
  ],
  defaultUserReviews: [
    { user: 'link_fan', score: 10, date: '2026-05-15', text: 'Even better than BOTW. The sky islands and depths are breathtaking.' }
  ]
});

fullGameData.mario_odyssey = withCover({
  id: 'mario_odyssey', title: 'Super Mario Odyssey',
  developer: 'Nintendo', release: 'October 2017',
  platforms: 'Switch',
  genre: 'Platformer, Adventure', year: 2017,
  metaScore: 96, positive: 85, mixed: 10, negative: 5,
  summary: 'Mario embarks on a globe-trotting journey with his new cap companion Cappy. The most creative 3D Mario ever made, bursting with ideas.',
  trailer: 'wGQHQc_3ycE', cover: '/images/mario_odyssey.jpg',
  purchaseLinks: [
    { icon: '🕹️', name: 'Nintendo Switch', url: 'https://www.nintendo.com/games/detail/super-mario-odyssey-switch/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'OCT 26, 2017', text: 'Super Mario Odyssey is a dazzling adventure full of creativity and joy.' }
  ],
  defaultUserReviews: [
    { user: 'cappy', score: 10, date: '2026-10-30', text: 'Just like his hat, Mario Odyssey captures your heart forever.' }
  ]
});

// ============================================================
//  CLASSIC / LEGENDARY  (no local images - auto-assigned)
// ============================================================

fullGameData.bioshock = withCover({
  id: 'bioshock', title: 'BioShock',
  developer: 'Irrational Games', release: 'August 2007',
  platforms: 'PC, PS4, Xbox One',
  genre: 'FPS, Action RPG', year: 2007,
  metaScore: 96, positive: 82, mixed: 12, negative: 6,
  summary: '1960. A plane crashes into the ocean. You discover Rapture - an underwater utopia descended into madness. A landmark first-person shooter.',
  trailer: 'KLOWpFU15I4', cover: '/images/bioshock.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/409710/BioShock_Remastered/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'AUG 21, 2007', text: 'One of the greatest games ever made. Would you kindly play it?' }
  ],
  defaultUserReviews: [
    { user: 'rapture_citizen', score: 10, date: '2026-04-01', text: 'A man chooses. A slave obeys. I chose to love this game.' }
  ]
});

fullGameData.portal2 = withCover({
  id: 'portal2', title: 'Portal 2',
  developer: 'Valve', release: 'April 2011',
  platforms: 'PC, PS3, Xbox 360',
  genre: 'Puzzle, FPS', year: 2011,
  metaScore: 95, positive: 80, mixed: 14, negative: 6,
  summary: 'Test your mind in Aperture Science. Portal 2 delivers clever puzzles, brilliant writing, and an unforgettable co-op mode.',
  trailer: 'tax4e4hBBZc', cover: '/images/portal2.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/620/Portal_2/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'APR 19, 2011', text: 'Portal 2 is funnier, smarter, and more inventive than its predecessor.' }
  ],
  defaultUserReviews: [
    { user: 'glados_fan', score: 10, date: '2026-03-15', text: 'GLaDOS is the best villain in gaming. Pure genius.' }
  ]
});

fullGameData.masseffect2 = withCover({
  id: 'masseffect2', title: 'Mass Effect 2',
  developer: 'BioWare', release: 'January 2010',
  platforms: 'PC, PS3, Xbox 360',
  genre: 'Action RPG, Sci-Fi', year: 2010,
  metaScore: 96, positive: 82, mixed: 12, negative: 6,
  summary: 'Shepard. The most iconic suicide mission in gaming. Recruit a legendary crew and fight for the survival of the galaxy.',
  trailer: 'JODZ-j1k0I4', cover: '/images/masseffect2.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/24980/Mass_Effect_2/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'JAN 26, 2010', text: 'Mass Effect 2 is a stunning achievement in game design and storytelling.' }
  ],
  defaultUserReviews: [
    { user: 'shepard', score: 10, date: '2026-06-01', text: 'I should go. The best squad-based RPG ever made.' }
  ]
});

fullGameData.tlou1 = withCover({
  id: 'tlou1', title: 'The Last of Us Part I',
  developer: 'Naughty Dog', release: 'September 2022',
  platforms: 'PS4, PS5, PC',
  genre: 'Action Adventure, Survival', year: 2022,
  metaScore: 96, positive: 82, mixed: 12, negative: 6,
  summary: 'Joel and Ellie\'s journey through post-apocalyptic America. A masterwork of storytelling, performance, and character design.',
  trailer: 'Yl-sPfN2aMo', cover: '/images/tlou1.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'SEP 02, 2022', text: 'The Last of Us remains one of the greatest games ever made. The remake is definitive.' }
  ],
  defaultUserReviews: [
    { user: 'ellie_g', score: 10, date: '2026-08-20', text: 'This game destroyed me emotionally. Cannot recommend enough.' }
  ]
});

fullGameData.ragnarok = withCover({
  id: 'ragnarok', title: 'God of War: Ragnarök',
  developer: 'Santa Monica Studio', release: 'November 2022',
  platforms: 'PS4, PS5, PC',
  genre: 'Action Adventure, Hack and Slash', year: 2022,
  metaScore: 94, positive: 80, mixed: 14, negative: 6,
  summary: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Fimbulwinter draws to a close and Ragnarök approaches.',
  trailer: 'EE-4GvjKcis', cover: '/images/ragnarok.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/2322010/God_of_War_Ragnarok/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'NOV 03, 2022', text: 'Ragnarök is a spectacular conclusion to the Norse saga. Atreus shines.' }
  ],
  defaultUserReviews: [
    { user: 'thor_fan', score: 10, date: '2026-11-05', text: 'Bigger, longer, and more emotional than the first. Thor is amazing.' }
  ]
});

fullGameData.astrobot = withCover({
  id: 'astrobot', title: 'Astro Bot',
  developer: 'Team Asobi', release: 'September 2024',
  platforms: 'PS5',
  genre: 'Platformer, Adventure', year: 2024,
  metaScore: 94, positive: 78, mixed: 16, negative: 6,
  summary: 'A joyful platformer that celebrates PlayStation history. Team Asobi delivers pure, imaginative fun across every level.',
  trailer: 'FpBMqVKFDxg', cover: '/images/astrobot.jpg',
  purchaseLinks: [
    { icon: '🎮', name: 'PlayStation Store', url: 'https://store.playstation.com' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'SEP 04, 2024', text: 'Astro Bot is a masterpiece of platformer design. Pure joy from start to finish.' }
  ],
  defaultUserReviews: [
    { user: 'astrofan', score: 10, date: '2026-09-05', text: 'Pure happiness in game form. Best platformer in years.' }
  ]
});

fullGameData.hades2 = withCover({
  id: 'hades2', title: 'Hades II',
  developer: 'Supergiant Games', release: 'May 2024',
  platforms: 'PC',
  genre: 'Roguelike, Action', year: 2024,
  metaScore: 91, positive: 73, mixed: 18, negative: 9,
  summary: 'Melinoe, princess of the Underworld, takes on the Titan of Time in this richly expanded sequel to the award-winning Hades.',
  trailer: 'LpCGRVQ4MVc', cover: '/images/hades2.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1145350/Hades_II/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'MAY 06, 2024', text: 'Already richer and more varied than its predecessor in Early Access.' }
  ],
  defaultUserReviews: [
    { user: 'melinoe', score: 10, date: '2026-05-10', text: 'Even better than the first. The witch aesthetic is perfect.' }
  ]
});

fullGameData.ff7rebirth = withCover({
  id: 'ff7rebirth', title: 'Final Fantasy VII Rebirth',
  developer: 'Square Enix', release: 'February 2024',
  platforms: 'PS5, PC',
  genre: 'Action RPG, JRPG', year: 2024,
  metaScore: 92, positive: 76, mixed: 17, negative: 7,
  summary: 'Cloud and his companions set out into the wider world outside Midgar. The second chapter of the FF7 Remake trilogy is an enormous adventure.',
  trailer: '4FbQfvvNSts', cover: '/images/ff7rebirth.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/2909400' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'FEB 23, 2024', text: 'Final Fantasy VII Rebirth is a stunning, massive RPG that honors and reinvents the original.' }
  ],
  defaultUserReviews: [
    { user: 'cloud_strife', score: 10, date: '2026-02-28', text: 'Cosmo Canyon made me cry. Absolutely gorgeous experience.' }
  ]
});

// ============================================================
//  MULTIPLAYER / COMPETITIVE  (required image games)
// ============================================================

fullGameData.rivals = withCover({
  id: 'rivals', title: 'Marvel Rivals',
  developer: 'NetEase Games', release: '2025',
  platforms: 'PC, PS5, Xbox Series X/S',
  genre: 'Hero Shooter, PvP', year: 2025,
  metaScore: 82, positive: 55, mixed: 30, negative: 15,
  summary: 'Team-based PvP hero shooter featuring iconic Marvel characters. Fast-paced 6v6 battles with unique team-up abilities and ever-expanding roster.',
  trailer: '-b0veB7q9P4', cover: '/images/rivals.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Official Site', url: 'https://www.marvelrivals.com/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 8, date: 'DEC 10, 2025', text: 'A solid hero shooter with Marvel charm and surprising mechanical depth.' }
  ],
  defaultUserReviews: [
    { user: 'spideyfan', score: 8, date: '2026-01-15', text: 'Fun, great characters, needs some balancing work.' },
    { user: 'ironman3000', score: 8, date: '2026-01-05', text: 'The team-up abilities are incredibly creative. Tons of potential.' }
  ]
});

fullGameData.csgo = withCover({
  id: 'csgo', title: 'Counter-Strike 2',
  developer: 'Valve', release: 'September 2023',
  platforms: 'PC',
  genre: 'Tactical Shooter, FPS', year: 2023,
  metaScore: 89, positive: 65, mixed: 20, negative: 15,
  summary: 'The world\'s premier competitive shooter. CS2 is the largest technical leap in the franchise\'s history, bringing the game into the modern era.',
  trailer: 'c80dVYcL69E', cover: '/images/csgo.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/730/CounterStrike_2/' }
  ],
  criticReviews: [
    { source: 'PC Gamer', score: 9, date: 'SEP 27, 2023', text: 'The best competitive shooter just got better.' }
  ],
  defaultUserReviews: [
    { user: 'globalelite', score: 8, date: '2026-08-10', text: 'Still the king of competitive FPS.' },
    { user: 'awper', score: 9, date: '2026-08-01', text: 'CS2 is a solid upgrade, more polish needed.' }
  ]
});

fullGameData.dota2 = withCover({
  id: 'dota2', title: 'Dota 2',
  developer: 'Valve', release: 'July 2013',
  platforms: 'PC',
  genre: 'MOBA, Strategy', year: 2013,
  metaScore: 90, positive: 70, mixed: 20, negative: 10,
  summary: 'The world\'s most complex MOBA. Choose from 120+ heroes and engage in 5v5 tactical warfare. Infinite depth, steep learning curve, unmatched competitive play.',
  trailer: '-cSFPIwMEq4', cover: '/images/dota2.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/570/Dota_2/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'JUL 19, 2013', text: 'The deepest, most rewarding MOBA available - if you have the patience.' }
  ],
  defaultUserReviews: [
    { user: 'invoker', score: 10, date: '2026-11-20', text: 'Best game ever made but it will ruin your life.' },
    { user: 'pudge', score: 9, date: '2026-11-15', text: '1000 hours in and still learning.' }
  ]
});

fullGameData.apex = withCover({
  id: 'apex', title: 'Apex Legends',
  developer: 'Respawn Entertainment', release: 'February 2019',
  platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S, Switch',
  genre: 'Battle Royale, FPS', year: 2019,
  metaScore: 88, positive: 70, mixed: 21, negative: 9,
  summary: 'A squad-based battle royale with unique legend abilities, movement mechanics from Titanfall 2, and responsive gunplay.',
  trailer: 'innmNewjkuk', cover: '/images/apex.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (Free)', url: 'https://store.steampowered.com/app/1172470/Apex_Legends/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'FEB 08, 2019', text: 'Apex Legends is the most polished battle royale available.' }
  ],
  defaultUserReviews: [
    { user: 'wraith', score: 8, date: '2026-02-12', text: 'Still the best BR movement. Legend abilities add so much strategy.' }
  ]
});

fullGameData.valheim = withCover({
  id: 'valheim', title: 'Valheim',
  developer: 'Iron Gate Studio', release: 'February 2021',
  platforms: 'PC',
  genre: 'Survival, Open World', year: 2021,
  metaScore: 85, positive: 67, mixed: 23, negative: 10,
  summary: 'A brutal exploration and survival game set in a procedurally generated Norse purgatory. Build longships, craft gear, and slay mythological beasts.',
  trailer: 'LRvqVjasL7c', cover: '/images/valheim.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/892970/Valheim/' }
  ],
  criticReviews: [
    { source: 'PC Gamer', score: 9, date: 'FEB 16, 2021', text: 'Valheim is one of the best survival games ever made - majestic and meditative.' }
  ],
  defaultUserReviews: [
    { user: 'viking', score: 9, date: '2026-02-25', text: 'Perfect with friends. The biome progression is genius.' }
  ]
});

fullGameData.deeprock = withCover({
  id: 'deeprock', title: 'Deep Rock Galactic',
  developer: 'Ghost Ship Games', release: 'May 2020',
  platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S',
  genre: 'Co-op Shooter, Mining', year: 2020,
  metaScore: 85, positive: 67, mixed: 23, negative: 10,
  summary: 'Dwarf miners vs alien bugs on a hostile planet. The best co-op shooter you may have missed - Rock and Stone!',
  trailer: 'nJFiXeQrKuM', cover: '/images/deeprock.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/548430/Deep_Rock_Galactic/' }
  ],
  criticReviews: [
    { source: 'PC Gamer', score: 9, date: 'MAY 13, 2020', text: 'Deep Rock Galactic is the best co-op game of the generation.' }
  ],
  defaultUserReviews: [
    { user: 'driller', score: 10, date: '2026-05-18', text: 'ROCK AND STONE! Best co-op game. Incredible developer support.' }
  ]
});

// ============================================================
//  MULTIPLAYER / PLATFORM  (required image games)
// ============================================================

fullGameData.roblox = withCover({
  id: 'roblox', title: 'Roblox',
  developer: 'Roblox Corporation', release: 'September 2006',
  platforms: 'PC, Xbox One, Mobile',
  genre: 'Game Platform, MMO', year: 2006,
  metaScore: 78, positive: 50, mixed: 30, negative: 20,
  summary: 'Create, share, and play millions of games. A massive online platform where imagination meets gameplay - home to an entire generation of young developers.',
  trailer: 'eAvXhNlO-rA', cover: '/images/roblox.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Official Site', url: 'https://www.roblox.com/' }
  ],
  criticReviews: [
    { source: 'PC Gamer', score: 8, date: 'OCT 12, 2020', text: 'A creative powerhouse that empowers young developers worldwide.' }
  ],
  defaultUserReviews: [
    { user: 'noobmaster', score: 8, date: '2026-03-01', text: 'Many great mini games, but community can be toxic at times.' }
  ]
});

// ============================================================
//  HORROR / SURVIVAL  (required image games)
// ============================================================

fullGameData.repo = withCover({
  id: 'repo', title: 'REPO',
  developer: 'Stresmerah Studio', release: '2025',
  platforms: 'PC',
  genre: 'Horror, Co-op Survival', year: 2025,
  metaScore: 76, positive: 55, mixed: 30, negative: 15,
  summary: 'A psychological horror co-op game set in abandoned facilities. Collect valuable items and survive against terrifying enemies - screaming optional but inevitable.',
  trailer: 'oSfoK8eSeD8', cover: '/images/repo.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/' }
  ],
  criticReviews: [
    { source: 'GameSpot', score: 7, date: 'AUG 20, 2025', text: 'Effective horror with genuinely terrifying moments.' }
  ],
  defaultUserReviews: [
    { user: 'survivor', score: 8, date: '2026-09-10', text: 'Best co-op horror game in years.' }
  ]
});

// ============================================================
//  2025–2026 RELEASES  (required image games)
// ============================================================

fullGameData.peak = withCover({
  id: 'peak', title: 'PEAK',
  developer: 'Aggro Crab', release: '2026',
  platforms: 'PC',
  genre: 'Co-op Survival, Climbing', year: 2026,
  metaScore: 82, positive: 60, mixed: 25, negative: 15,
  summary: 'Climb a treacherous mountain with friends. A co-op survival game about teamwork, resource management, and not letting your friends fall off a cliff.',
  trailer: 'D6io5XZWBHk', cover: '/images/peak.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 8, date: 'JAN 15, 2026', text: 'Clever co-op mechanics and satisfying progression.' }
  ],
  defaultUserReviews: [
    { user: 'climber', score: 8, date: '2026-10-01', text: 'Ruined and strengthened my friendship simultaneously.' }
  ]
});

fullGameData.mk8dx = withCover({
  id: 'mk8dx', title: 'Mario Kart 8 Deluxe',
  developer: 'Nintendo', release: 'April 2017',
  platforms: 'Switch',
  genre: 'Racing, Multiplayer', year: 2017,
  metaScore: 92, positive: 75, mixed: 18, negative: 7,
  summary: 'The definitive kart racer. 96 tracks, beloved characters, and butter-smooth multiplayer. The best party game on Nintendo Switch.',
  trailer: 'BByZ3ckLqKY', cover: '/images/mk8dx.jpg',
  purchaseLinks: [
    { icon: '🕹️', name: 'Nintendo Switch', url: 'https://www.nintendo.com/games/detail/mario-kart-8-deluxe-switch/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'APR 28, 2017', text: 'Mario Kart 8 Deluxe is the best kart racer ever made.' }
  ],
  defaultUserReviews: [
    { user: 'blue_shell', score: 9, date: '2026-11-01', text: 'Ruined and repaired friendships. Perfect party game.' }
  ]
});

fullGameData.forza5 = withCover({
  id: 'forza5', title: 'Forza Horizon 5',
  developer: 'Playground Games', release: 'November 2021',
  platforms: 'PC, Xbox One, Xbox Series X/S',
  genre: 'Racing, Open World', year: 2021,
  metaScore: 92, positive: 76, mixed: 17, negative: 7,
  summary: 'Race across a gorgeous open world in Mexico. With hundreds of cars and a thriving live-service, it remains the gold standard of racing games.',
  trailer: 'FYH9n37B7Yw', cover: '/images/forza5.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 10, date: 'NOV 05, 2021', text: 'Forza Horizon 5 is the best-looking and best-feeling racing game ever made.' }
  ],
  defaultUserReviews: [
    { user: 'speed_racer', score: 10, date: '2026-11-10', text: 'Mexico looks stunning. Still the best racer on the market.' }
  ]
});

fullGameData.cuphead = withCover({
  id: 'cuphead', title: 'Cuphead',
  developer: 'Studio MDHR', release: 'September 2017',
  platforms: 'PC, PS4, Xbox One, Switch',
  genre: 'Run and Gun, Platformer', year: 2017,
  metaScore: 88, positive: 70, mixed: 22, negative: 8,
  summary: 'A gorgeous hand-drawn run and gun game with punishing but fair boss fights, inspired by 1930s cartoons.',
  trailer: 'NN-9SQXoi50', cover: '/images/cuphead.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/268910/Cuphead/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'SEP 29, 2017', text: 'Cuphead is a gorgeous, brutally challenging game with timeless art.' }
  ],
  defaultUserReviews: [
    { user: 'chalice', score: 9, date: '2026-09-30', text: 'Every death is your fault, not the game\'s. Art direction is unmatched.' }
  ]
});

fullGameData.hogwarts = withCover({
  id: 'hogwarts', title: 'Hogwarts Legacy',
  developer: 'Avalanche Software', release: 'February 2023',
  platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S',
  genre: 'Action RPG, Open World', year: 2023,
  metaScore: 84, positive: 65, mixed: 24, negative: 11,
  summary: 'Experience life as a Hogwarts student in the 1800s. Cast spells, attend classes, and explore a faithfully realized wizarding world.',
  trailer: '1O6Qstncpnc', cover: '/images/hogwarts.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 8, date: 'FEB 10, 2023', text: 'Hogwarts Legacy is a faithful recreation of the wizarding world with engaging gameplay.' }
  ],
  defaultUserReviews: [
    { user: 'gryffindor', score: 8, date: '2026-02-15', text: 'Fulfilled my childhood dream of going to Hogwarts. Amazing world.' }
  ]
});

// ============================================================
//  NEW REQUIRED ENTRIES  (images exist, games were missing)
// ============================================================

fullGameData.darksouls3 = withCover({
  id: 'darksouls3', title: 'Dark Souls III',
  developer: 'FromSoftware', release: 'April 2016',
  platforms: 'PC, PS4, Xbox One',
  genre: 'Action RPG, Souls-like', year: 2016,
  metaScore: 89, positive: 67, mixed: 23, negative: 10,
  summary: 'The third and final chapter of the Dark Souls trilogy. The Age of Fire is ending - link the flame or let it fade. Delivers some of FromSoftware\'s finest boss fights and level design.',
  trailer: 'IGFiP1f8KkY', cover: '/images/darksouls3.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/app/374320/DARK_SOULS_III/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 9, date: 'APR 11, 2016', text: 'Dark Souls III is a staggering achievement - its bosses rival anything FromSoftware has ever created.' },
    { source: 'PC Gamer', score: 9, date: 'APR 12, 2016', text: 'A relentlessly punishing and brilliantly crafted action RPG.' }
  ],
  defaultUserReviews: [
    { user: 'ashen_one', score: 10, date: '2026-04-12', text: 'The boss gauntlet in Lothric is the best FromSoft has ever designed.' },
    { user: 'darkmoon_blade', score: 9, date: '2026-04-08', text: 'Every area is dripping with atmosphere. Ringed City DLC is incredible.' }
  ]
});

fullGameData.genshin = withCover({
  id: 'genshin', title: 'Genshin Impact',
  developer: 'HoYoverse', release: 'September 2020',
  platforms: 'PC, PS4, PS5, Mobile',
  genre: 'Action RPG, Open World', year: 2020,
  metaScore: 84, positive: 63, mixed: 25, negative: 12,
  summary: 'Explore the fantastical world of Teyvat with a party of elemental characters. A free-to-play open-world RPG with an ever-expanding story and roster of unique heroes.',
  trailer: 'aA5G_WNYNHE', cover: '/images/genshin.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Official Site (Free)', url: 'https://genshin.hoyoverse.com/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 8, date: 'SEP 28, 2020', text: 'Genshin Impact is a polished, generous free-to-play RPG with a gorgeous open world.' }
  ],
  defaultUserReviews: [
    { user: 'lumine', score: 9, date: '2026-03-12', text: 'Incredible world design and elemental combat. The gacha can be ignored for the most part.' },
    { user: 'aether', score: 8, date: '2026-03-10', text: 'Genuinely impressive for a free game. Loads of content to explore.' }
  ]
});

fullGameData.pubg = withCover({
  id: 'pubg', title: 'PUBG: Battlegrounds',
  developer: 'Krafton', release: 'December 2017',
  platforms: 'PC, PS4, Xbox One, Mobile',
  genre: 'Battle Royale, Tactical Shooter', year: 2017,
  metaScore: 86, positive: 67, mixed: 23, negative: 10,
  summary: 'The battle royale that started it all. 100 players parachute onto an island - loot, survive, and be the last one standing. Now free-to-play with new maps and modes.',
  trailer: 'nH7z3oF9qhk', cover: '/images/pubg.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (Free)', url: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/' }
  ],
  criticReviews: [
    { source: 'PC Gamer', score: 9, date: 'DEC 20, 2017', text: 'PUBG invented the template that dozens of games copied. Intense and authentic.' }
  ],
  defaultUserReviews: [
    { user: 'winner_winner', score: 8, date: '2026-02-20', text: 'Nothing matches the tension of the final circle. The OG battle royale.' },
    { user: 'erangel_fan', score: 7, date: '2026-02-15', text: 'Still the most realistic BR out there. Takes skill to master.' }
  ]
});

fullGameData.bloodstrike = withCover({
  id: 'bloodstrike', title: 'Blood Strike',
  developer: 'NetEase Games', release: '2023',
  platforms: 'PC, Mobile',
  genre: 'Battle Royale, FPS', year: 2023,
  metaScore: 72, positive: 50, mixed: 30, negative: 20,
  summary: 'A fast-paced free-to-play battle royale with a unique respawn mechanic - earn resurrection points mid-match to bring fallen teammates back into the fight.',
  trailer: 'Wf7wfUmEOIY', cover: '/images/bloodstrike.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Official Site (Free)', url: 'https://bloodstrike.com/' }
  ],
  criticReviews: [
    { source: 'GameSpot', score: 7, date: 'MAR 15, 2023', text: 'Blood Strike brings a fresh respawn twist to the battle royale formula.' }
  ],
  defaultUserReviews: [
    { user: 'bs_player', score: 7, date: '2026-03-20', text: 'Fun pick-up-and-play BR. The revival system keeps rounds exciting.' },
    { user: 'mobile_gamer', score: 8, date: '2026-03-15', text: 'Great for mobile players graduating to PC battle royales.' }
  ]
});

fullGameData.fivehearts2 = withCover({
  id: 'fivehearts2', title: 'Five Hearts: Chapter Two',
  developer: 'Luminary Games', release: '2025',
  platforms: 'PC, Switch',
  genre: 'Visual Novel, Romance', year: 2025,
  metaScore: 81, positive: 62, mixed: 27, negative: 11,
  summary: 'The continuation of the beloved visual novel series. Five characters, branching paths, and consequences that carry over from the first chapter - every choice matters more than ever.',
  trailer: 'dQw4w9WgXcQ', cover: '/images/fivehearts2.jpg',
  purchaseLinks: [
    { icon: '🖥️', name: 'Steam (PC)', url: 'https://store.steampowered.com/' }
  ],
  criticReviews: [
    { source: 'IGN', score: 8, date: 'JUN 10, 2025', text: 'A heartfelt sequel that builds meaningfully on its predecessor\'s choices.' }
  ],
  defaultUserReviews: [
    { user: 'novella_fan', score: 9, date: '2026-06-15', text: 'The writing is warm, funny, and genuinely moving. Chapter Three can\'t come soon enough.' },
    { user: 'storyseeker', score: 8, date: '2026-06-12', text: 'Each route reveals new dimensions of the cast. Beautifully crafted.' }
  ]
});

// ============================================================
//  DERIVED LISTS  (built after all games are defined)
// ============================================================

/** Flat list used by grid, filter, and wishlist views.
 *  platforms is always an array for consistent component usage. */
const gameList = Object.values(fullGameData).map(game => ({
  id:        game.id,
  title:     game.title,
  cover:     game.cover,                              // already absolute
  platforms: typeof game.platforms === 'string'
               ? game.platforms.split(', ').map(p => p.trim())
               : (game.platforms || []),
  rating:    game.metaScore,
  genre:     game.genre,
  year:      game.year,
  developer: game.developer
}));

/** Minimal list for fast search suggestions */
const searchGameList = Object.values(fullGameData).map(game => ({
  id:    game.id,
  title: game.title,
  cover: game.cover
}));

/** Reviews data keyed by game id */
const gameReviewsData = Object.values(fullGameData).reduce((acc, game) => {
  acc[game.id] = {
    id:             game.id,
    title:          game.title,
    metaScore:      game.metaScore,
    cover:          game.cover,
    defaultReviews: game.defaultUserReviews || []
  };
  return acc;
}, {});

export { fullGameData, gameList, searchGameList, gameReviewsData };
