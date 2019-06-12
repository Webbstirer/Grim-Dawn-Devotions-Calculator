interface DamageModifiers {
    physd: number
    bleedd: number
    traumad: number
    coldd: number
    pierced: number
    fpierced: number
    bleeddot: number
}
interface Attributes {
    cunn: number
}
interface PetStats {
    ppiercer: number
    pchaosr: number
    bleedr: number
    palld: number
    pelemr: number
    pbleeddot: number
    pbleedd: number
    pas: number
}
interface Resists {
    piercer: number
    chaosr: number
    aetherr: number
    paetherr: number
    firer: number
    coldr: number
    lightr: number
}
interface BonusTotal extends DamageModifiers, Attributes, PetStats, Resists {
    da: number
    oa: number
    health: number
    healthp: number
    armora: number
    consti: number
    phys: number
    stund: number
    energyrps: number
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

console.log("loading typescript");
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
                            { id: 'crBlue', minText: "+18 Defensive Ability", maxText: "+18 Defensive Ability", da: 18 },
                            { id: 'crRed', minText: "+5% Health", maxText: "+5% Health", healthp: 5 },
                            { id: 'crGreen', minText: "+18 Offensive Ability", maxText: "+18 Offensive Ability", oa: 18 },
                            { id: 'crPurple', minText: "+18 Offensive Ability", maxText: "+18 Offensive Ability", oa: 18 },
                            { id: 'crYellow', minText: "+5% Health", maxText: "+5% Health", healthp: 5 }
                        ]
                },

            ]
        },
        {
            tier: 1,
            sets: [
                {
                    title: "Anvil", values: [
                        { id: 'anv1', minText: "+15 Defensive Ability", maxText: "+15 Defensive Ability", da: 15 },
                        { id: 'anv2', minText: "+10 Physique", maxText: "+10 Physique", phys: 10 },
                        { id: 'anv3', minText: "Increases Armor Absorption by 3%", maxText: "Increases Armor Absorption by 3%", armora: 3 },
                        { id: 'anv4', minText: "+15 Defensive Ability, +20% Constitution", maxText: "+15 Defensive Ability, +20% Constitution", da: 15, consti: 20 },
                        { id: 'anv5', minText: "Targo's Hammer - 0.1 Second skill Recharge, 100% Chance to pass through Enemies, 0.3 Meter Radius, 15% Weapon Damage, 28 Physical Damage, +50% Internal Trauma Damage, 10% Chance of Stun target for 1 Second", maxText: "Targo's Hammer(20/20) - 0.1 Second skill Recharge, 100% Chance to pass through Enemies, 0.3 Meter Radius, 35% Weapon Damage, 168 Physical Damage, +250% Internal Trauma Damage, 50% Chance of Stun target for 1 Second" }
                    ]
                },
                {
                    title: 'Empty Throne',
                    values:
                        [
                            { id: 'et1', minText: "15% reduced Stun Duration", maxText: "15% reduced Stun Duration", stund: 15 },
                            { id: 'et2', minText: "8% Pierce Resistance, Bonus to All Pets: 8% Pierce Resistance", maxText: "8% Pierce Resistance, Bonus to All Pets: 8% Pierce Resistance", piercer: 8, ppiercer: 8 },
                            { id: 'et3', minText: "8% Chaos Resistance, Bonus to All Pets: 8% Chaos Resistance", maxText: "8% Chaos Resistance, Bonus to All Pets: 8% Chaos Resistance", chaosr: 8, pchaosr: 8 },
                            { id: 'et4', minText: "8% Aether Resistance, Bonus to All Pets: 8% Aether Resistance", maxText: "8% Aether Resistance, Bonus to All Pets: 8% Aether Resistance", aetherr: 8, paetherr: 8 },
                        ]
                },
                {
                    title: 'Falcon',
                    values:
                        [
                            { id: 'falc1', minText: "+15% Physical Damage", maxText: "+15% Physical Damage", physd: 15 },
                            { id: 'falc2', minText: "+24% Bleeding Damage", maxText: "+24% Bleeding Damage", bleedd: 24 },
                            { id: 'falc3', minText: "+15 Cunning", maxText: "+15 Cunning", cunn: 15 },
                            { id: 'falc4', minText: "+24% Physical Damage", maxText: "+24% Physical Damage", physd: 24 },
                            { id: 'falc5', minText: "Falcon Swoop - 2 Second Skill Recharge, 3 Projectile(s), 100% Chance to pass through Enemies, 0.1 Meter Radius, 6% Weapon Damage, 28 Physical Damage 150 Bleeding Damage over 3 Seconds", maxText: "Falcon Swoop(20/20) - 2 Second Skill Recharge, 6 Projectile(s), 100% Chance to pass through Enemies, 0.1 Meter Radius, 20% Weapon Damage, 98 Physical Damage 405 Bleeding Damage over 3 Seconds" }
                        ]
                },
                {
                    title: 'Hammer',
                    values:
                        [
                            { id: 'hamr1', minText: "+15% Physical Damage", maxText: "+15% Physical Damage", physd: 15 },
                            { id: 'hamr2', minText: "+30% Internal Trauma Damage, +8 Defensive Ability", maxText: "+30% Internal Trauma Damage, +8 Defensive Ability", traumad: 30, da: 8 },
                            { id: 'hamr3', minText: "+15% Physical Damage, +30% Internal Trauma Damage", maxText: "+15% Physical Damage, +30% Internal Trauma Damage", physd: 15, traumad: 30 }
                        ]
                },
                {
                    title: 'Harpy',
                    values:
                        [
                            { id: 'harp1', minText: "+15% Pierce Damage, +15% Cold Damage", maxText: "+15% Pierce Damage, +15% Cold Damage", coldd: 15, pierced: 15 },
                            { id: 'harp2', minText: "+10 Cunning, +1.5 Energy regenerated per Second", maxText: "+10 Cunning, +1.5 Energy regenerated per Second", cunn: 10, energyrps: 1.5 },
                            { id: 'harp3', minText: "5-10 Piercing Damage, +24% Pierce Damage, +24% Cold Damage", maxText: "5-10 Piercing Damage, +24% Pierce Damage, +24% Cold Damage", fpierced: 5, pierced: 24, coldd: 24 },
                            { id: 'harp4', minText: "+15 Offensive Ability, 10% Bleeding Resistance", maxText: "+15 Offensive Ability, 10% Bleeding Resistance", oa: 15, bleedr: 10 }
                        ]
                },
                {
                    title: 'Night Talon',
                    values:
                        [
                            { id: 'nightt1', minText: "+8 Cunning, Bonus to All Pets: +15% to All Damage", maxText: "+8 Cunning, Bonus to All Pets: +15% to All Damage", cunn: 8, palld: 15 },
                            { id: 'nightt2', minText: "10% Elemental Resistance, Bonus to All Pets: 10% Elemental Resistance", maxText: "10% Elemental Resistance, Bonus to All Pets: 10% Elemental Resistance", firer: 10, coldr: 10, lightr: 10, pelemr: 10 },
                            { id: 'nightt3', minText: "33 Bleeding Damage over 3 seconds, Bonus to All Pets: 12 Bleeding Damage over 3 seconds, +25% to All Damage", maxText: "33 Bleeding Damage over 3 seconds, Bonus to All Pets: 12 Bleeding Damage over 3 seconds, +25% to All Damage", bleeddot: 33, pbleeddot: 12, palld: 25 },
                            { id: 'nightt4', minText: "+35% Bleeding Damage, Bonus to All Pets: 24 Bleeding Damage over 3 seconds, +60% Bleeding Damage, +5% Attack Speed", maxText: "+35% Bleeding Damage, Bonus to All Pets: 24 Bleeding Damage over 3 seconds, +60% Bleeding Damage, +5% Attack Speed", bleedd: 35, pbleeddot: 24, pbleedd: 60, pas: 5 }
                        ]
                }




            ]
        }
    ];