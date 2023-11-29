const fusionData = [
    {
      "Ability": "Highway Star",
      "Description": "Lifesteal 55% of damage on hit.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Smooth Operators",
      "Description": "Hits apply knockback scaling off of damage.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Ratt",
      "Description": "Final blows grant powerful regen for 7 seconds.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Harvest",
      "Description": "Receive 1.75x healing from all sources, and heal to full on final blow.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Hanged Man",
      "Description": "Final blows teleport you to the furthest player and grant invincibility and invisibility.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Transcendent",
      "Description": "You reflect and deal 2x knockback.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Little Feet",
      "Description": "You are 75% size.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Atum",
      "Description": "Final blows grant 45% extra ult charge and resets cooldowns.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Shadow Edge",
      "Description": "Hits pull players towards you scaling off of damage.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Cheap Trick",
      "Description": "Standing still heals you.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Paisley Park",
      "Description": "Players you damage or take damage from are highlighted. Interact clears highlights.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Achtung",
      "Description": "Become invisible for 1 second every 3 seconds.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Survivor",
      "Description": "Gain massively increased regen for each player around you.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Metallica",
      "Description": "You are invisible but leave behind trails and sparkles.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Liable Sprocket",
      "Description": "Your melee attacks stun and knock back.",
      "Type": "Passive",
      "Role": "Utility",
      "Cooldown": "3 seconds"
    },
    {
      "Ability": "Diver Down",
      "Description": "Hits deal 2x damage over time.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Rolling Stones",
      "Description": "You have an orb which attacks players you look at. Attacks execute low health players.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "The Sun",
      "Description": "Damage players in a radius around you.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "The Hand",
      "Description": "Attacks deal more damage the stronger they are.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Ball Breaker",
      "Description": "Half of damage dealt chains to enemies.",
      "Type": "Passive",
      "Role": "Damage",
      "Cooldown": "15 seconds"
    },
    {
      "Ability": "Osiris",
      "Description": "Deal 1.4x damage for each kill in your killstreak.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Hallowed",
      "Description": "Final blows cause explosions which damage nearby players.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Divine",
      "Description": "Hits have a 25% chance to crit for 2.8x damage.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Anointed",
      "Description": "Hits deal extra percent damage.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Grateful Dead",
      "Description": "Deal 2x damage if your current health is lower than your victim's.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Kjaro's Band",
      "Description": "Hits will create a flaming tornado on the victim.",
      "Type": "Passive",
      "Role": "Damage",
      "Cooldown": "10 seconds"
    },
    {
      "Ability": "Mr. President",
      "Description": "Take 20% reduced damage and dodge 20% of attacks.",
      "Type": "Passive",
      "Role": "Defense"
    },
    {
      "Ability": "Killer Queen",
      "Description": "Dropping below 25% max health resets you to your spawn.",
      "Type": "Passive",
      "Role": "Defense",
      "Cooldown": "25 seconds"
    },
    {
      "Ability": "Vampire",
      "Description": "Final blows grant 125 shields.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Wonder of U",
      "Description": "Taking damage creates black flashes which damage the attacker.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "7 seconds"
    },
    {
      "Ability": "Blood Dark",
      "Description": "After dealing 500 damage, your next hit steals lots of health.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Black Sabbath",
      "Description": "Phase through terrain and appear behind the target player.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "6 seconds"
    },
    {
      "Ability": "Chariot Requiem",
      "Description": "Put very close players to sleep for 3.5 seconds.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "10 seconds"
    },
    {
      "Ability": "Made in Heaven",
      "Description": "Slow down time and gain 200 speed for 3 seconds.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "25 seconds"
    },
    {
      "Ability": "Kraft Work",
      "Description": "Root nearby players in place for 3 seconds.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "6 seconds"
    },
    {
      "Ability": "Echoes",
      "Description": "Reverse the facing direction of the target player.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "8 seconds"
    },
    {
      "Ability": "Hermit Purple",
      "Description": "Pull the target player towards you.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "11 seconds"
    },
    {
      "Ability": "White Wedding",
      "Description": "Create an ionic bond on a wall, pulling in players and exploding.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "Chocolate Disco",
      "Description": "Teleport nearby players to the furthest player from you.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "13 seconds"
    },
    {
      "Ability": "The World",
      "Description": "Freeze yourself for 1.5 seconds, then freeze players around you for 3 seconds.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "20 seconds"
    },
    {
      "Ability": "Catch The Rainbow",
      "Description": "Accelerate downwards. Your gravity is reduced. Jumping grants a burst of speed.",
      "Type": "Active",
      "Role": "Utility"
    },
    {
      "Ability": "White Album",
      "Description": "Freeze very close players for 2.3 seconds.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "Yellow Temperence",
      "Description": "Copy the ability, enchant, trait, and hero of the player closest to your crosshair.",
      "Type": "Active",
      "Role": "Utility"
    },
    {
      "Ability": "Smashing Pumpkin",
      "Description": "Teleport to the nearest ground in your facing direction.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "2.5 seconds"
    },
    {
      "Ability": "Moody Blues",
      "Description": "The target player will have their ult stolen if they use it within 4 seconds.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "10 seconds"
    },
    {
      "Ability": "Blue Hawaii",
      "Description": "Force the next player to hit you to walk straight for 1.5 seconds.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "13 seconds"
    },
    {
      "Ability": "Mandom",
      "Description": "Set a checkpoint granting 40 speed for 6 seconds. Return when time's up or by pressing interact.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "Jetstriker",
      "Description": "Perform an invisible dash. Your wall jumps are strengthened.",
      "Type": "Active",
      "Role": "Utility",
      "Cooldown": "2 seconds"
    },
    {
      "Ability": "Cream",
      "Description": "Enter an orb that deals massive damage on contact. Hits deal 3x damage over time when close.",
      "Type": "Active",
      "Role": "Damage"
    },
    {
      "Ability": "Kiss",
      "Description": "Deal 2.35x damage for 5 seconds.",
      "Type": "Active",
      "Role": "Damage",
      "Cooldown": "15 seconds"
    },
    {
      "Ability": "Soul Jar",
      "Description": "Release the souls of killed players into a powerful beam.",
      "Type": "Active",
      "Role": "Damage"
    },
    {
      "Ability": "GER",
      "Description": "Stun yourself and reflect damage for 3 seconds.",
      "Type": "Active",
      "Role": "Defense",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "D4C",
      "Description": "Enter a separate dimension for 5 seconds. Attacking exits early.",
      "Type": "Active",
      "Role": "Defense",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "D4C:LT",
      "Description": "Reflect damage randomly for 3 seconds.",
      "Type": "Active",
      "Role": "Defense",
      "Cooldown": "15 seconds"
    },
    {
      "Ability": "Sacred Field",
      "Description": "Create a field of 70% damage reduction around you for 5 seconds.",
      "Type": "Active",
      "Role": "Defense",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "King Crimson",
      "Description": "Go invisible, gain 50 speed, and create a clone that attacks for 2.5 seconds.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "C-Moon",
      "Description": "Slam the target player downwards.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "11 seconds"
    },
    {
      "Ability": "Hydrangea",
      "Description": "Create a link to the target player which steals healing for 6 seconds.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "14 seconds"
    },
    {
      "Ability": "Pylon",
      "Description": "Create three pulses of electricity around you.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "7 seconds"
    },
    {
      "Ability": "Mortality",
      "Description": "Create a mark which you heal and return to when dropping below 60% health.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "17 seconds"
    },
    {
      "Ability": "Reaper",
      "Description": "Create an orb around you which lifesteals from players for 2.5 seconds.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "16 seconds"
    },
    {
      "Ability": "Dawnwalker",
      "Description": "Teleport to a nearby player and unleash a barrage of light.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "13 seconds"
    },
    {
      "Ability": "Soft And Wet",
      "Description": "Trap a nearby enemy in a bubble which pops after 3 seconds.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "11 seconds"
    },
    {
      "Ability": "Arcwarder",
      "Description": "Equip a suit for 10 seconds which grants double jumps and 2 beam attacks. Interact fires an exploding beam.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "Contractor",
      "Description": "Briefly stun yourself. If attacked, stun the attacker with strings.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "14 seconds"
    },
    {
      "Ability": "Fimbulvetr",
      "Description": "Summon a falling icicle on the target player.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "11 seconds"
    },
    {
      "Ability": "Ride The Lightning",
      "Description": "Dash forwards in a ball of electricity, pulling enemies along.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "Stone Free",
      "Description": "Create a point on a wall. Interact creates another point which forms a tripwire.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "7 seconds"
    },
    {
      "Ability": "Tusk",
      "Description": "Glide in your facing direction, applying a powerful DoT when colliding with an enemy.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "7 seconds"
    },
    {
      "Ability": "Flame Within",
      "Description": "Ignite yourself, gaining 1.4x damage and 50 speed. Interact extinguishes yourself.",
      "Type": "Active",
      "Role": "Hybrid"
    },
    {
      "Ability": "Constellation - Y",
      "Description": "Conjure a powerful star which attacks players it can see.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "16 seconds"
    },
    {
      "Ability": "Raging Demon",
      "Description": "Dash forwards and rapidly strike anyone hit.",
      "Type": "Active",
      "Role": "Hybrid",
      "Cooldown": "14 seconds"
    }
];

const enchantData = [
    {
      "Ability": "Sorrow",
      "Description": "Receive increased passive regen.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Heroism",
      "Description": "You have increased walljump height.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Vampiric",
      "Description": "Lifesteal for 25% of damage on hit.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Displacement",
      "Description": "Being below 40% max health will grant invisibility for 3 seconds.",
      "Type": "Passive",
      "Role": "Utility",
      "Cooldown": "7 seconds"
    },
    {
      "Ability": "Proficient",
      "Description": "Your abilities have a 20% chance every second to reset.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Mending",
      "Description": "All healing grants additional ult charge.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Absorption",
      "Description": "Gain a portion of damage taken as regen.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Conduction",
      "Description": "Taking damage grants ult charge.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Attentive",
      "Description": "Looking at a player reveals their information.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Ethereal",
      "Description": "Players can't see your name or outline.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Adept",
      "Description": "Your ult can't drop below 40%.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Generous",
      "Description": "Final blows heal the furthest player from you to full, and grants you ultimate charge and healing based on amount healed.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Executive",
      "Description": "Shop purchases are free if you have the required points.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Lightweight",
      "Description": "Holding jump lets you hover in the air.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Withering",
      "Description": "You constantly take damage, but have 45% lifesteal.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Unstable",
      "Description": "Eliminations switch your fusion.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Zealous",
      "Description": "Eliminations grant a 200% jump boost for 10 seconds.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Explosive",
      "Description": "Wall jumps explode, sending you further but damaging you.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Evasive",
      "Description": "Walk 50% faster when holding backwards.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Airborne",
      "Description": "Crouching midair dashes up to two times in your held direction, resetting on wall jump.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Chilling",
      "Description": "Hits slow players by 35% for 1 second.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Tension",
      "Description": "Gain increased passive ult charge for each player near you.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Lucky",
      "Description": "Final Blows grant luck, increasing over heaven odds.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Zephyr",
      "Description": "Damaging an enemy grants 60 speed for 3 seconds.",
      "Type": "Passive",
      "Role": "Utility",
      "Cooldown": "4 seconds"
    },
    {
      "Ability": "Greedy",
      "Description": "Dealing damage grants 3.33x points. Your ult has a 50% chance to be refunded.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Hierophant",
      "Description": "Gain 2 speed every 25 damage.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Graceful",
      "Description": "After not taking damage for 5 seconds, heal to full.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Kaze",
      "Description": "Gain 65 speed and low gravity while falling. Crouch to cancel.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Gravitic",
      "Description": "Hits pull the victim downwards.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "U-Turn",
      "Description": "Melee hits switch your hero.",
      "Type": "Passive",
      "Role": "Utility"
    },
    {
      "Ability": "Limbo",
      "Description": "Hits rewind the victim to their previous position after 3 seconds.",
      "Type": "Passive",
      "Role": "Utility",
      "Cooldown": "7 seconds"
    },
    {
      "Ability": "Perfection",
      "Description": "Deal 1.33x damage while above 90% health.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Bloodthirsty",
      "Description": "Deal up to 1.6x damage the lower your health is.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Respite",
      "Description": "Deal 1.25x damage while standing still.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Precision",
      "Description": "Deal 1.25x damage to players with their ultimate ready.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Necromancer",
      "Description": "Summon a bot that moves towards and attacks whoever you look at.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Wind-Up",
      "Description": "Not dealing damage slowly charges up an explosion on your next hit. Max 3 charges.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Risky",
      "Description": "Damage is randomly modified by 0.75-1.4x.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Detonation",
      "Description": "Hits have a chance to explode, dealing extra damage and knocking enemies back, dealing more if they hit a wall.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Blazing",
      "Description": "Hits set the victim on fire.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "ATG",
      "Description": "Hits have a chance to fire homing rockets.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Acrobat",
      "Description": "Melee hits while airborne launch you and cancel it. Multiple in a row deals extra damage.",
      "Type": "Passive",
      "Role": "Damage"
    },
    {
      "Ability": "Weathered",
      "Description": "Wall jumps throw homing shurikens at enemies.",
      "Type": "Passive",
      "Role": "Damage",
      "Cooldown": "1 second"
    },
    {
      "Ability": "Providence",
      "Description": "Being below half health grants invincibility for 1.5 seconds.",
      "Type": "Passive",
      "Role": "Defense",
      "Cooldown": "10 seconds"
    },
    {
      "Ability": "Cauterize",
      "Description": "You are unkillable for 1.5 seconds you reach 1 health.",
      "Type": "Passive",
      "Role": "Defense",
      "Cooldown": "14 seconds"
    },
    {
      "Ability": "Shameless",
      "Description": "Taking damage from a different player than the last briefly makes you invulnerable.",
      "Type": "Passive",
      "Role": "Defense"
    },
    {
      "Ability": "Unbreakable",
      "Description": "Being knocked back grants a 50% damage reduction shield. Stuns last a max of 0.35 seconds.",
      "Type": "Passive",
      "Role": "Defense"
    },
    {
      "Ability": "Reinforced",
      "Description": "Every second, gain damage reduction based on how much damage you took during the last second.",
      "Type": "Passive",
      "Role": "Defense"
    },
    {
      "Ability": "Unaware",
      "Description": "Take 30% reduced damage from players you aren't looking at.",
      "Type": "Passive",
      "Role": "Defense"
    },
    {
      "Ability": "Graceful",
      "Description": "Taking damage while above 95% health makes you invincible for 2 seconds.",
      "Type": "Passive",
      "Role": "Defense",
      "Cooldown": "6 seconds"
    },
    {
      "Ability": "Executioner",
      "Description": "Final blows damage and stun nearby players for 2 seconds.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Draconic",
      "Description": "Dropping below 40% health causes a regenerative explosion.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "12 seconds"
    },
    {
      "Ability": "Duelist",
      "Description": "Take 15% less damage from and deal 1.2x damage to the last player you damaged.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Crippling",
      "Description": "Hits deal extra damage and cancels actions.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Prismatic",
      "Description": "After dealing 250 damage, gain a random buff that lasts for 5 seconds.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Serrated",
      "Description": "Reflect a portion of damage taken.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Cameo",
      "Description": "You take 60% extra damage, but you have 2 lives. Each final blow gives you a life.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "BFMV",
      "Description": "Dodge the next hit and teleport to the attacker.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "10 seconds"
    },
    {
      "Ability": "Parano",
      "Description": "Create a random area that grants healing, damage reduction, and a damage boost while in it.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Storm",
      "Description": "Hits have a chance to strike lightning, stunning and damaging.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Assault",
      "Description": "Holding crouch for 1 second grants a damaging and stunning dash when you let go.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "4 seconds"
    },
    {
      "Ability": "Mysterious",
      "Description": "Taking damage applies a random debuff to your attacker.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "7 seconds"
    },
    {
      "Ability": "Backstab",
      "Description": "Meleeing an opponent in the back deals a powerful backstab.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "3 seconds"
    },
    {
      "Ability": "Drunk",
      "Description": "Your ult charges faster and your cooldowns are reduced, but they may randomly get used.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Malachite",
      "Description": "Hits apply 75% anti-heal and damage reduction piercing for 5 seconds.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "5 seconds"
    },
    {
      "Ability": "Shackled",
      "Description": "Hits create a tether that teleports the victim back to it.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "7 seconds"
    },
    {
      "Ability": "Lament",
      "Description": "Create a lifesteal vortex that expands with health percent.",
      "Type": "Passive",
      "Role": "Hybrid"
    },
    {
      "Ability": "Shattered",
      "Description": "Dropping below 50% health calls down a beam of light to defend you.",
      "Type": "Passive",
      "Role": "Hybrid",
      "Cooldown": "10 seconds"
    }
]

let isFusionSearch = true;

function toggleSearch() {
  isFusionSearch = !isFusionSearch;

  const searchTitle = document.getElementById("searchTitle");
  searchTitle.textContent = isFusionSearch ? "Fusion Search" : "Enchant Search";

  search();
}

function createCard(ability) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (ability.Role === "Damage") {
    card.style.borderColor = "#FF4C4C";
  }
  else if (ability.Role === "Defense") {
    card.style.borderColor = "#00E4FF";
  }
  else if (ability.Role === "Utility") {
    card.style.borderColor = "#80FE58";
  }
  else {
    card.style.borderColor = "#B63FFF"
  }

  const abilityInfo = `
    <p class="ability-line">${ability.Ability}</p>
    <hr>
    <p class="description-line">${ability.Description}</p>
    <p class="type-line"><strong>Type:</strong> ${ability.Type}</p>
    <p class="role-line"><strong>Role:</strong> ${ability.Role}</p>
    ${ability.Cooldown ? `<p class="cooldown-line"><strong>Cooldown:</strong> ${ability.Cooldown}</p>` : ''}
  `;

  card.innerHTML = abilityInfo;
  return card;
}

function displayAbilityCards(abilities) {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  for (let i = 0; i < abilities.length; i++) {
    const card = createCard(abilities[i]);
    card.style.animation = `fadeIn 0.3s ease-in-out ${i * 0.05}s forwards`;
    cardContainer.appendChild(card);
  }
}

function search() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const abilityData = isFusionSearch ? fusionData : enchantData;
  
  const matchingAbilities = abilityData.filter(ability =>
    ability.Ability.toLowerCase().includes(searchInput) ||
    ability.Description.toLowerCase().includes(searchInput) ||
    ability.Role.toLowerCase().includes(searchInput) ||
    ability.Type.toLowerCase().includes(searchInput)
  );

  if (matchingAbilities.length > 0) {
    displayAbilityCards(matchingAbilities);
  } else {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "<p>No matching abilities found.</p>";
  }
}

document.getElementById("searchInput").addEventListener("input", function () {
  search();
});

document.addEventListener("DOMContentLoaded", function () {
  search();
});
