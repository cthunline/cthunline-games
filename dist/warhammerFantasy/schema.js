"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warhammerFantasyCharacterSchema = exports.warhammerFantasySpellsSchema = exports.warhammerFantasyWeaponSchema = exports.warhammerFantasyWoundsSchema = exports.warhammerFantasyEncumbranceSchema = exports.warhammerFantasyWealthSchema = exports.warhammerFantasyTrappingSchema = exports.warhammerFantasyArmourPointsSchema = exports.warhammerFantasyArmourSchema = exports.warhammerFantasyPartySchema = exports.warhammerFantasyAmbitionsSchema = exports.warhammerFantasyTalentSchema = exports.warhammerFantasyOtherSkillSchema = exports.warhammerFantasyBasicSkillsSchema = exports.warhammerFantasyMovementSchema = exports.warhammerFantasyExperienceSchema = exports.warhammerFantasyResilienceSchema = exports.warhammerFantasyFateSchema = exports.warhammerFantasyCharacteristicsSchema = exports.warhammerFantasyCharacteristicName = exports.warhammerFantasyCharacteristicSchema = exports.warhammerFantasyBiographySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.warhammerFantasyBiographySchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    species: typebox_1.Type.String(),
    class: typebox_1.Type.String(),
    career: typebox_1.Type.String(),
    careerLevel: typebox_1.Type.String(),
    careerPath: typebox_1.Type.String(),
    status: typebox_1.Type.String(),
    age: typebox_1.Type.String(),
    height: typebox_1.Type.String(),
    hair: typebox_1.Type.String(),
    eyes: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasyCharacteristicSchema = typebox_1.Type.Object({
    initial: typebox_1.Type.Integer(),
    advances: typebox_1.Type.Integer(),
    current: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyCharacteristicName = typebox_1.Type.Union([
    typebox_1.Type.Literal('weaponSkill'),
    typebox_1.Type.Literal('ballisticSkill'),
    typebox_1.Type.Literal('strength'),
    typebox_1.Type.Literal('toughness'),
    typebox_1.Type.Literal('initiative'),
    typebox_1.Type.Literal('agility'),
    typebox_1.Type.Literal('dexterity'),
    typebox_1.Type.Literal('intelligence'),
    typebox_1.Type.Literal('willpower'),
    typebox_1.Type.Literal('fellowship')
]);
exports.warhammerFantasyCharacteristicsSchema = typebox_1.Type.Object({
    weaponSkill: exports.warhammerFantasyCharacteristicSchema,
    ballisticSkill: exports.warhammerFantasyCharacteristicSchema,
    strength: exports.warhammerFantasyCharacteristicSchema,
    toughness: exports.warhammerFantasyCharacteristicSchema,
    initiative: exports.warhammerFantasyCharacteristicSchema,
    agility: exports.warhammerFantasyCharacteristicSchema,
    dexterity: exports.warhammerFantasyCharacteristicSchema,
    intelligence: exports.warhammerFantasyCharacteristicSchema,
    willpower: exports.warhammerFantasyCharacteristicSchema,
    fellowship: exports.warhammerFantasyCharacteristicSchema
}, {
    additionalProperties: false
});
exports.warhammerFantasyFateSchema = typebox_1.Type.Object({
    fate: typebox_1.Type.Integer(),
    fortune: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyResilienceSchema = typebox_1.Type.Object({
    resilience: typebox_1.Type.Integer(),
    resolve: typebox_1.Type.Integer(),
    motivation: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyExperienceSchema = typebox_1.Type.Object({
    current: typebox_1.Type.Integer(),
    spent: typebox_1.Type.Integer(),
    total: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyMovementSchema = typebox_1.Type.Object({
    movement: typebox_1.Type.Integer(),
    walk: typebox_1.Type.Integer(),
    run: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
const getBasicSkillSchema = (char) => typebox_1.Type.Object({
    characteristicName: typebox_1.Type.Literal(char),
    characteristicScore: typebox_1.Type.Integer(),
    advances: typebox_1.Type.Integer(),
    skill: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyBasicSkillsSchema = typebox_1.Type.Object({
    art: getBasicSkillSchema('dexterity'),
    gossip: getBasicSkillSchema('fellowship'),
    athletics: getBasicSkillSchema('agility'),
    haggle: getBasicSkillSchema('fellowship'),
    bribery: getBasicSkillSchema('fellowship'),
    intimidate: getBasicSkillSchema('strength'),
    charm: getBasicSkillSchema('fellowship'),
    intuition: getBasicSkillSchema('initiative'),
    charmAnimal: getBasicSkillSchema('willpower'),
    leadership: getBasicSkillSchema('fellowship'),
    climb: getBasicSkillSchema('strength'),
    meleeBasic: getBasicSkillSchema('weaponSkill'),
    cool: getBasicSkillSchema('willpower'),
    melee: getBasicSkillSchema('weaponSkill'),
    consumeAlcohol: getBasicSkillSchema('toughness'),
    navigation: getBasicSkillSchema('initiative'),
    dodge: getBasicSkillSchema('agility'),
    outdoorSurvival: getBasicSkillSchema('intelligence'),
    drive: getBasicSkillSchema('agility'),
    perception: getBasicSkillSchema('initiative'),
    endurance: getBasicSkillSchema('toughness'),
    ride: getBasicSkillSchema('agility'),
    entertain: getBasicSkillSchema('fellowship'),
    row: getBasicSkillSchema('strength'),
    gamble: getBasicSkillSchema('intelligence'),
    stealth: getBasicSkillSchema('agility')
}, {
    additionalProperties: false
});
exports.warhammerFantasyOtherSkillSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    characteristicName: exports.warhammerFantasyCharacteristicName,
    characteristicScore: typebox_1.Type.Integer(),
    advances: typebox_1.Type.Integer(),
    skill: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyTalentSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    timesTaken: typebox_1.Type.Integer(),
    description: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasyAmbitionsSchema = typebox_1.Type.Object({
    shortTerm: typebox_1.Type.String(),
    longTerm: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasyPartySchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    shortTerm: typebox_1.Type.String(),
    longTerm: typebox_1.Type.String(),
    members: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasyArmourSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    locations: typebox_1.Type.String(),
    encumbrance: typebox_1.Type.String(),
    armourPoints: typebox_1.Type.Integer(),
    qualities: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasyArmourPointsSchema = typebox_1.Type.Object({
    head: typebox_1.Type.Integer(),
    rightArm: typebox_1.Type.Integer(),
    leftArm: typebox_1.Type.Integer(),
    body: typebox_1.Type.Integer(),
    rightLeg: typebox_1.Type.Integer(),
    leftLeg: typebox_1.Type.Integer(),
    shield: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyTrappingSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    encumbrance: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasyWealthSchema = typebox_1.Type.Object({
    brassPennies: typebox_1.Type.Integer(),
    silverShillings: typebox_1.Type.Integer(),
    goldCrowns: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyEncumbranceSchema = typebox_1.Type.Object({
    weapons: typebox_1.Type.Integer(),
    armour: typebox_1.Type.Integer(),
    trappings: typebox_1.Type.Integer(),
    maximum: typebox_1.Type.Integer(),
    total: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.warhammerFantasyWoundsSchema = typebox_1.Type.Object({
    strengthBonus: typebox_1.Type.Integer(),
    twiceToughnessBonus: typebox_1.Type.Integer(),
    willpowerBonus: typebox_1.Type.Integer(),
    hardy: typebox_1.Type.Boolean(),
    total: typebox_1.Type.Integer(),
    current: typebox_1.Type.Integer(),
    notes: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasyWeaponSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    group: typebox_1.Type.String(),
    encumbrance: typebox_1.Type.String(),
    rangeReach: typebox_1.Type.String(),
    damage: typebox_1.Type.String(),
    qualities: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasySpellsSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    castingNumber: typebox_1.Type.Integer(),
    range: typebox_1.Type.String(),
    target: typebox_1.Type.String(),
    duration: typebox_1.Type.String(),
    effect: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.warhammerFantasyCharacterSchema = typebox_1.Type.Object({
    biography: exports.warhammerFantasyBiographySchema,
    characteristics: exports.warhammerFantasyCharacteristicsSchema,
    fate: exports.warhammerFantasyFateSchema,
    resilience: exports.warhammerFantasyResilienceSchema,
    experience: exports.warhammerFantasyExperienceSchema,
    movement: exports.warhammerFantasyMovementSchema,
    basicSkills: exports.warhammerFantasyBasicSkillsSchema,
    otherSkills: typebox_1.Type.Array(exports.warhammerFantasyOtherSkillSchema),
    talents: typebox_1.Type.Array(exports.warhammerFantasyTalentSchema),
    ambitions: exports.warhammerFantasyAmbitionsSchema,
    party: exports.warhammerFantasyPartySchema,
    armour: typebox_1.Type.Array(exports.warhammerFantasyArmourSchema),
    armourPoints: exports.warhammerFantasyArmourPointsSchema,
    trappings: typebox_1.Type.Array(exports.warhammerFantasyTrappingSchema),
    psychology: typebox_1.Type.String(),
    corruptionMutation: typebox_1.Type.String(),
    wealth: exports.warhammerFantasyWealthSchema,
    encumbrance: exports.warhammerFantasyEncumbranceSchema,
    wounds: exports.warhammerFantasyWoundsSchema,
    weapons: typebox_1.Type.Array(exports.warhammerFantasyWeaponSchema),
    spells: typebox_1.Type.Array(exports.warhammerFantasySpellsSchema),
    sin: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
