// let items = [
//   { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
//   { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
//   { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
//   { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
//   { name: "Monte Amiata", height: 1738, place: "Siena" },
// ];

// function generateTable(table, data) {
//   for (const element of data) {
//     let row = table.insertRow();
//     for (const key in element) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// let table = document.querySelector("table");
// let data = Object.keys(items[0]);

// generateTable(table, items);
// generateTableHead(table, data);

////////

// items in array
const items_list = [
  {
    id: 1,
    name: "B.F. Sword",
    description: "Gain Attack Damage.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 2,
    name: "Recurve Bow",
    description: "Gain Attack Speed.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 3,
    name: "Needlessly Large Rod",
    description: "Gain Spell Power.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 4,
    name: "Tear of the Goddess",
    description: "Gain Mana.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 5,
    name: "Chain Vest",
    description: "Gain Armor.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 6,
    name: "Negatron Cloak",
    description: "Gain Magic Resist.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 7,
    name: "Giant's Belt",
    description: "Gain Health.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 8,
    name: "Spatula",
    description: "It must do something...",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 9,
    name: "Sparring Gloves",
    description: "Gain Critical Strike Chance and Dodge Chance.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 11,
    name: "Deathblade",
    description:
      "Contributing to a kill grants the holder additional Attack Damage for the rest of combat. This effect can stack any number of times.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 12,
    name: "Giant Slayer",
    description:
      "The holder's Abilities and attacks do bonus damage. If the target has more health, the bonus damage increases.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 13,
    name: "Hextech Gunblade",
    description:
      "The holder's magic and true damage from Abilities heal them for a percentage of the damage dealt. Excess healing fuels a shield that protects the holder.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 14,
    name: "Spear of Shojin",
    description: "The holder's Basic Attacks restore additional Mana. ",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 15,
    name: "Guardian Angel",
    description:
      "Prevents the holder's first death, placing them in stasis instead. After a short delay, they return with restored Health and shed all negative effects.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 16,
    name: "Bloodthirster",
    description:
      "Physical damage heals the holder for a percentage of the damage dealt.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 17,
    name: "Zeke's Herald",
    description:
      "When combat begins, the holder and all nearby allies in the same row gain Attack Speed for the rest of combat.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 18,
    name: "Skirmisher Emblem",
    description: "The holder gains the Skirmisher trait.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 19,
    name: "Infinity Edge",
    description:
      "Grants Critical Strike Chance (including components). Each point of Critical Strike Chance above 100% becomes bonus Critical Strike Damage.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 22,
    name: "Rapid Firecannon",
    description:
      "Increases the holder's Attack Range and grants bonus Attack Speed (including components). The holder's attacks can no longer miss.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 23,
    name: "Guinsoo's Rageblade",
    description:
      "Attacks grant bonus Attack Speed for the rest of combat. This bonus Attack Speed can stack any number of times.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 24,
    name: "Statikk Shiv",
    description:
      "Every third attack from the holder unleashes a chain lightning that bounces to nearby enemies, dealing magic damage and reducing their Magic Resist for several seconds.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 25,
    name: "Titan's Resolve",
    description:
      "When the holder takes damage or inflicts a critical strike, they gain a stacking Attack Damage and Ability Power bonus.  This stacks up to a limit, at which point the holder gains Armor and Magic Resistance.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 26,
    name: "Runaan's Hurricane",
    description:
      "The holder's attacks fire a bolt at another nearby enemy, dealing a percentage of the holder's Attack Damage and applying on-hit effects. These bolts can critically strike.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 27,
    name: "Zz'Rot Portal",
    description:
      "At the start of combat, the holder taunts nearby enemies. When the holder dies, a Voidspawn arises taunting nearby enemies. Voidspawns that arise from summoned units are only partially effective.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 28,
    name: "Legionnaire Emblem",
    description: "The holder gains the Legionnaire trait.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 29,
    name: "Last Whisper",
    description:
      "When the holder inflicts a critical hit, the target's Armor is reduced for several seconds. This effect does not stack.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 33,
    name: "Rabadon's Deathcap",
    description:
      "Grants a percentage bonus Ability Power (including components).",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 34,
    name: "Archangel's Staff",
    description:
      "Each time the holder casts their Ability, they gain Ability Power equal to a percentage of their maximum Mana.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 35,
    name: "Locket of the Iron Solari",
    description:
      "When combat begins, the holder and nearby allies in the same row gain a shield that blocks damage for several seconds.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 36,
    name: "Ionic Spark",
    description:
      "Nearby enemies have their Magic Resist reduced (does not stack). When they cast a spell, they are zapped taking magic damage equal to a percentage of their max Mana.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 37,
    name: "Morellonomicon",
    description:
      "When the holder deals magic or true damage with their Ability, they burn the target, dealing a percentage of the target's maximum Health as true damage over several seconds, and reducing healing for the duration of the burn.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 38,
    name: "Spellweaver Emblem",
    description: "The holder gains the Spellweaver trait.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 39,
    name: "Jeweled Gauntlet",
    description:
      "The holder's magic and true damage from their Ability can critically strike. The holder gains bonus Critical Strike Damage.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 44,
    name: "Blue Buff",
    description: "After casting their Ability, the holder gains Mana.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 45,
    name: "Frozen Heart",
    description: "Reduces the Attack Speed of nearby enemies.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 46,
    name: "Chalice of Power",
    description:
      "When combat begins, the holder and all nearby allies in the same row gain Spell Power for the rest of combat.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 47,
    name: "Redemption",
    description:
      "Periodically, the holder radiates an aura to nearby allies, healing them a percentage of their missing Health. Affected allies take reduced damage from multi-target abilities and attacks for several seconds.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 48,
    name: "Renewer Emblem",
    description: "The holder gains the Renewer trait.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 49,
    name: "Hand Of Justice",
    description:
      "At the beginning of each planning phase, the holder's basic attacks and spells deal additional damage or heal for a percentage of damage dealt.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 55,
    name: "Bramble Vest",
    description:
      "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal magic damage to all nearby enemies every couple seconds.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 56,
    name: "Gargoyle Stoneplate",
    description:
      "The holder gains Armor and Magic Resist for each enemy targeting them.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 57,
    name: "Sunfire Cape",
    description:
      "Periodically, a random nearby enemy is burned a percentage of their maximum Health over several seconds. Any healing they receive is reduced.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 58,
    name: "Ironclad Emblem",
    description: "The holder gains the Ironclad trait.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 59,
    name: "Shroud of Stillness",
    description:
      "When combat begins, the holder shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana until they cast.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 66,
    name: "Dragon's Claw",
    description: "Grants bonus Magic Resist (including components).",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 67,
    name: "Zephyr",
    description:
      "When combat begins, the holder summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for several seconds. Ignores CC immunity.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 68,
    name: "Redeemed Emblem",
    description: "The holder gains the Redeemed trait.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 69,
    name: "Quicksilver",
    description:
      "The holder is immune to crowd control for the first several seconds of combat.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 77,
    name: "Warmog's Armor",
    description: "Grants bonus Health (including components).",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 78,
    name: "Dawnbringer Emblem",
    description: "The holder gains the Dawnbringer trait.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 79,
    name: "Trap Claw",
    description:
      "Blocks the first enemy Ability that hits the holder, and stuns the Ability's caster for several seconds.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 88,
    name: "Force of Nature",
    description: "The holder's maximum team size is incrased.",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 89,
    name: "Assassin Emblem",
    description: "The holder gains the Assassin trait.",
    isUnique: true,
    isShadow: false,
  },
  {
    id: 99,
    name: "Thief's Gloves",
    description:
      "At the beginning of each planning phase, the holder equips 2 temporary items. Temporary items increase in power based on your player level. [Consumes Three Item Slots. Cannot Grant Shadow Items]",
    isUnique: false,
    isShadow: false,
  },
  {
    id: 1001,
    name: "Shadow Sword",
    description: "Gain Attack Damage.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1002,
    name: "Shadow Bow",
    description: "Gain Attack Speed.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1003,
    name: "Shadow Rod",
    description: "Gain Spell Power.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1004,
    name: "Shadow Tear",
    description: "Gain Mana.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1005,
    name: "Shadow Vest",
    description: "Gain Armor.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1006,
    name: "Shadow Cloak",
    description: "Gain Magic Resist.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1007,
    name: "Shadow Belt",
    description: "Gain Health.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1008,
    name: "Shadow Spatula",
    description: "It must do something evil...",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1009,
    name: "Shadow Gloves",
    description: "Gain Critical Strike Chance and Dodge Chance.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1011,
    name: "Caustic Deathblade",
    description:
      "Contributing to a kill grants the holder additional Attack Damage for the rest of combat. This effect can stack any number of times.",
    isUnique: false,
    isShadow: true,
    shadowPenalty:
      "The holder starts with a percentage of their maximum Health.",
  },
  {
    id: 1012,
    name: "Spectral Giantslayer",
    description: "The holder's Abilities and attacks do bonus damage.",
    isUnique: false,
    isShadow: true,
    shadowPenalty:
      "If the target is below a certain Health, the holder's Abilities and attacks do decreased damage.",
  },
  {
    id: 1013,
    name: "Hextech Gunblade Of Immortality",
    description:
      "The holder's magic and true damage from Abilities heals the nearest ally with missing Health for a percentage of the damage dealt.",
    isUnique: false,
    isShadow: true,
    shadowPenalty: "This heal cannot affect the holder.",
  },
  {
    id: 1014,
    name: "Spectral Spear of Shojin",
    description: "The holder's attacks restore additional Mana.",
    isUnique: false,
    isShadow: true,
    shadowPenalty: "The holder deals less damage.",
  },
  {
    id: 1015,
    name: "Fallen Guardian Angel",
    description:
      "Prevents the holder's first death, placing them in stasis instead. After a short delay, they return with restored Health and shed all negative effects.",
    isUnique: true,
    isShadow: true,
    shadowPenalty:
      "After this effect triggers, the holder's Attack Speed is reduced for the rest of combat.",
  },
  {
    id: 1016,
    name: "Riskthirster",
    description:
      "Physical damage heals the holder for a percentage of the damage dealt.",
    isUnique: false,
    isShadow: true,
    shadowBonus:
      "Each time the holder heals to a percentage Health, they gain a percentage Attack Speed for several seconds.",
    shadowPenalty:
      "The holder takes a percentage of their maximum Health in true damage at the beginning of combat or upon being equipped.",
  },
  {
    id: 1017,
    name: "Zeke's Bleak Herald",
    description:
      "When combat begins, the holder reduces the Attack Speed of all nearby allies within in the same row. The holder then gains Attack Speed for each affected ally.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1118,
    name: "Forgotten Emblem",
    description: "The holder gains the Forgotten trait.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1019,
    name: "Sacrificial Infinity Edge",
    description:
      "Grants Critical Strike Chance (including components). Each point of Critical Strike Chance above 100% becomes bonus Critical Strike Damage.",
    isUnique: true,
    isShadow: true,
    shadowBonus: "The holder also gains bonus Critical Strike Damage.",
    shadowPenalty:
      "Each time the holder critically strikes, they deal a percentage of their maximum Health to themselves as true damage.",
  },
  {
    id: 1022,
    name: "Rapid Deathcannon",
    description:
      "Increases the holder's Attack Range and grants bonus Attack Speed (including components) when there are no enemies nearby. The holder's attacks can no longer miss.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1023,
    name: "Guinsoo's Sacrificial Rageblade",
    description:
      "Attacks grant bonus Attack Speed for the rest of combat. This bonus Attack Speed can stack any number of times.",
    isUnique: false,
    isShadow: true,
    shadowPenalty:
      "The holder is dealt a percentage of their maximum Health as true damage each attack.",
  },
  {
    id: 1024,
    name: "Statikk Stiletto",
    description:
      "Every other attack from the holder unleashes chain lightning that strikes nearby enemies, dealing magic damage and reducing their Magic Resist for several seconds.",
    isUnique: false,
    isShadow: true,
    shadowPenalty: "The holder has their Attack Damage reduced.",
  },
  {
    id: 1025,
    name: "Titan's Revenge",
    description:
      "Periodically, the holder's next attack deals a percentage of the total damage they have taken since the last empowered attack as true damage.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1026,
    name: "Runaan's Untamed Hurricane",
    description:
      "The holder's attacks fire bolts at nearby enemies, dealing a percentage of the holder's Attack Damage. These bolts can critically strike but do not apply on-hit effects.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1027,
    name: "Unstable Zz'Rot Portal",
    description:
      "At the start of combat, the holder taunts nearby enemies. When the holder dies, an Unstable Voidspawn arises and taunts enemies again. When it dies it deals true damage to nearby enemies. Voidspawns that arise from summoned units are only partially effective.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1128,
    name: "Hellion Emblem",
    description: "The holder gains the Hellion trait.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1029,
    name: "Final Whisper",
    description:
      "When the holder inflicts a critical hit, the target's Armor and Magic Resist are reduced for several seconds.",
    isUnique: true,
    isShadow: true,
    shadowPenalty:
      "The holder's Armor and Magic Resist are also permanently reduced.",
  },
  {
    id: 1033,
    name: "Rabadon's Caustic Deathcap",
    description:
      "Grants a percentage bonus Ability Power (including components).",
    isUnique: false,
    isShadow: true,
    shadowPenalty: "The holder receives reduced maximum Health.",
  },
  {
    id: 1034,
    name: "Archdemon's Staff Of Immortality",
    description:
      "Each time the holder casts their Ability, they gain empty maximum Health equal to a percentage of their maximum Mana. The holder then heals for that amount.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1035,
    name: "Locket of the Silver Lunari",
    description:
      "When combat begins, the holder and nearby allies in the same row gain bonus Armor and Magic Resist.",
    isUnique: false,
    isShadow: true,
    shadowPenalty: "Affected allies gain less Mana per attack.",
  },
  {
    id: 1036,
    name: "Ionic Dark-Spark",
    description:
      "Nearby enemies and allies (except the holder) are zapped when they cast an ability, taking magic damage equal to a percentage of their max Mana.",
    isUnique: false,
    isShadow: true,
    shadowBonus:
      "Whenever an ally or enemy is zapped, the holder gains Ability Power for the rest of combat.",
  },
  {
    id: 1037,
    name: "Mor-evil-lonomicon",
    description:
      "When the holder deals magic or true damage with their Ability, they burn the target, dealing a percentage of the target's maximum Health as true damage over several seconds, and reducing healing for the duration of the burn.",
    isUnique: true,
    isShadow: true,
    shadowPenalty: "The holder's Ability deals less damage.",
  },
  {
    id: 1138,
    name: "Dragonslayer Emblem",
    description: "The holder gains the Dragonslayer trait.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1039,
    name: "Sacrificial Gauntlet",
    description:
      "The holder's magic and true damage from their Ability can critically strike. The holder gains bonus Critical Strike Damage and bonus Critical Strike Chance.",
    isUnique: false,
    isShadow: true,
    shadowPenalty:
      "Each time the holder casts their Ability, they deal a percentage of their maximum Health to themselves as true damage.",
  },
  {
    id: 1044,
    name: "Very Dark Blue Buff",
    description: "After casting their Ability, the holder gains Mana.",
    isUnique: true,
    isShadow: true,
    shadowBonus:
      "If the holder is below a percentage of their Health, the Mana gained is increased.",
  },
  {
    id: 1045,
    name: "Frozen Dark Heart",
    description: "Reduces the Attack Speed of nearby enemies.",
    isUnique: true,
    isShadow: true,
    shadowPenalty:
      "The Attack Speed of nearby allies (except the holder) is reduced.",
  },
  {
    id: 1046,
    name: "Chalice of Malice",
    description:
      "When combat begins, all of the holder's nearby allies in the same row gain Spell Power for the rest of combat.",
    isUnique: false,
    isShadow: true,
    shadowPenalty: "The holder loses Ability Power instead of gaining any.",
  },
  {
    id: 1047,
    name: "Sacrificial Redemption",
    description:
      "Periodically, the holder radiates an aura to all allies on the board except themself, healing them a percentage of their missing Health.",
    isUnique: false,
    isShadow: true,
    shadowPenalty:
      "Each time this happens, the holder damages themself a percentage of their current Health as true damage.",
  },
  {
    id: 1148,
    name: "Coven Emblem",
    description: "The holder gains the Coven trait.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1049,
    name: "Hand of Vengeance",
    description:
      "At the beginning of each planning phase, the holder's basic attacks and spells deal additional damage or heal for a percentage of damage dealt.",
    isUnique: false,
    isShadow: true,
    shadowPenalty:
      "These bonuses expire after each takedown, and renew on the next.",
  },
  {
    id: 1055,
    name: "Refracted Bramble Vest",
    description:
      "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal magic damage to all nearby enemies every couple seconds.",
    isUnique: false,
    isShadow: true,
    shadowBonus: "Grants bonus Armor (including components).",
  },
  {
    id: 1056,
    name: "Gargoyle Stoneplate Of Immortality",
    description:
      "The holder heals themself periodically for each enemy targeting them.",
    isUnique: false,
    isShadow: true,
  },
  {
    id: 1057,
    name: "Eclipse Cape",
    description:
      "Periodically, a random nearby enemy is burned a percentage of their maximum Health over several seconds. Any healing they receive is reduced.",
    isUnique: true,
    isShadow: true,
    shadowPenalty:
      "The holder is also burned for a percentage of their maximum Health every second for the entirety of combat, and any healing they receive is reduced.",
  },
  {
    id: 1158,
    name: "Cavalier Emblem",
    description: "The holder gains the Cavalier trait.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1059,
    name: "Dark Shroud of Stillness",
    description:
      "When combat begins, the holder shoots a beam straight ahead and behind that delays affected enemies' and other allies' first ability cast, increasing their maximum Mana until they cast.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1066,
    name: "Refracted Dragon's Claw",
    description: "Reduces incoming magic damage by a percentage.",
    isUnique: false,
    isShadow: true,
    shadowBonus: "Negates bonus damage from incoming critical hits.",
  },
  {
    id: 1067,
    name: "Turbulent Zephyr",
    description:
      "When combat begins, the holder summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for several seconds. Ignores CC immunity.",
    isUnique: true,
    isShadow: true,
    shadowPenalty:
      "Once the enemy returns to combat, they gain Attack Damage and Ability Power for the rest of combat.",
  },
  {
    id: 1168,
    name: "Revenant Emblem",
    description: "The holder gains the Revenant trait.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1069,
    name: "Caustic Quicksilver",
    description:
      "The holder is immune to crowd control for the entirety of combat and receives reduced Health.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1077,
    name: "Warmog's Sacrificial Armor",
    description: "Grants bonus Health (including components).",
    isUnique: false,
    isShadow: true,
    shadowPenalty: "The holder takes true damage each second.",
  },
  {
    id: 1178,
    name: "Nightbringer Emblem",
    description: "The holder gains the Nightbringer trait.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1079,
    name: "Vengeful Trap Claw",
    description:
      "Blocks the first enemy Ability that hits the holder, then teleports them to the Ability's caster, and causes both units to start targeting each other. They deal increased damage to each other.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1088,
    name: "Force of Darkness",
    description: "The holder's maximum team size is incrased.",
    isUnique: false,
    isShadow: true,
    shadowPenalty:
      "The player's Little Legend takes increased percentage damage after losing a battle.",
  },
  {
    id: 1189,
    name: "Abomination Emblem",
    description: "The holder gains the Abomination trait.",
    isUnique: true,
    isShadow: true,
  },
  {
    id: 1099,
    name: "Trickster's Gloves",
    description:
      "At the beginning of each planning phase, the holder equips 2 temporary items. These are always full shadow items. [Consumes Three Item Slots]",
    isUnique: false,
    isShadow: true,
  },
];
console.log(items_list); // Checking to have items_list in webpage

// listing the DOM elements
let table = document.querySelector("table");

// Create IDs for the basic items
function generateTableHeadID() {
  let id_list = [];
  for (let i = 0; i < 9; i++) {
    const item = items_list[i];
    id_list.push(item.id);
  }
  return id_list;
}

// Create the header
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();

  for (const key of data) {
    let th = document.createElement("th");
    let img = document.createElement("img");

    img.src = `https://files-for-hackathon.netlify.app/items/0${key}.png`;

    th.appendChild(img);
    row.appendChild(th);
  }
}

// Create the rowHeadings
function generateRowHeadings(table, data) {
  for (let element of data) {
    let row = table.insertRow();

    let cell = row.insertCell();
    let img = document.createElement("img");

    img.src = `https://files-for-hackathon.netlify.app/items/0${element}.png`;

    cell.appendChild(img);
  }
}



generateTableHead(table, generateTableHeadID());
generateRowHeadings(table, generateTableHeadID());
