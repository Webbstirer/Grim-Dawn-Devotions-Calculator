interface BonusTotal {
    da: number
    health: number
}
interface Devotion extends Partial<BonusTotal> {
    id: string
    text?: string
    minText?: string
    maxText?: string

}
interface DevotionSet {
    title: string
    values: Devotion[]
}
interface Tier {
    tier: number
    sets: DevotionSet[]
}

//   var totalBonuses : BonusTotal = {da:0,health:0}

var tiers: Tier[] =
    [
        {
            tier: 0,
            sets: [

                {
                    title: "Crossroads",
                    values:
                        [
                            { id: 'special', text: "Max Devotions" },
                            { id: 'crBlue', minText: "Crossroads Blue - +18 Defensive Ability", maxText: "Crossroads Blue - +18 Defensive Ability", da: 18 },
                            { id: 'crRed', minText: "Crossroads Red - +5% Health", maxText: "Crossroads Red - +5% Health", health: .05 },
                            { id: 'crGreen', minText: "Crossroads Green - +18 Offensive Ability", maxText: "Crossroads Green - +18 Offensive Ability" },
                            { id: 'crPurple', minText: "Crossroads Purple - +18 Offensive Ability", maxText: "Crossroads Purple - +18 Offensive Ability" },
                            { id: 'crYellow', minText: "Crossroads Yellow - +5% Health", maxText: "Crossroads Yellow - +5% Health" }
                        ]
                },

            ]
        },
        {
            tier: 1,
            sets: [
                {
                    title: "Anvil", values: [
                        { id: 'anv1', minText: "+15 Defensive Ability", maxText: "+15 Defensive Ability" },
                        { id: 'anv2', minText: "+10 Physique", maxText: "+10 Physique" },
                        { id: 'anv3', minText: "Increases Armor Absorption by 3%", maxText: "Increases Armor Absorption by 3%" },
                        { id: 'anv4', minText: "+15 Defensive Ability, +20% Constitution", maxText: "+15 Defensive Ability, +20% Constitution" },
                        { id: 'anv5', minText: "Targo's Hammer - 0.1 Second skill Recharge, 100% Chance to pass through Enemies, 0.3 Meter Radius, 15% Weapon Damage, 28 Physical Damage, +50% Internal Trauma Damage, 10% Chance of Stun target for 1 Second", maxText: "Targo's Hammer(20/20) - 0.1 Second skill Recharge, 100% Chance to pass through Enemies, 0.3 Meter Radius, 35% Weapon Damage, 168 Physical Damage, +250% Internal Trauma Damage, 50% Chance of Stun target for 1 Second" }
                    ]
                },
                {
                    title: 'Empty Throne',
                    values:
                        [
                            { id: 'et1', minText: "15% reduced Stun Duration", maxText: "15% reduced Stun Duration" },
                            { id: 'et2', minText: "8% Pierce Resistance, Bonus to All Pets: 8% Pierce Resistance", maxText: "8% Pierce Resistance, Bonus to All Pets: 8% Pierce Resistance" },
                            { id: 'et3', minText: "8% Chaos Resistance, Bonus to All Pets: 8% Chaos Resistance", maxText: "8% Chaos Resistance, Bonus to All Pets: 8% Chaos Resistance" },
                            { id: 'et4', minText: "8% Aether Resistance, Bonus to All Pets: 8% Aether Resistance", maxText: "8% Aether Resistance, Bonus to All Pets: 8% Aether Resistance" },
                        ]
                }

            ]
        }

    ];