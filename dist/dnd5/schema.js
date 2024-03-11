"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dnd5CharacterSchema = exports.dnd5SpellcastingSchema = exports.dnd5SpellLevelSchema = exports.dnd5SpellSchema = exports.dnd5EquipmentSchema = exports.dnd5MoneySchema = exports.dnd5FeaturesSchema = exports.dnd5AttackSchema = exports.dnd5CombatSchema = exports.dnd5DeathSavesSchema = exports.dnd5HitPointsSchema = exports.dnd5SkillsSchema = exports.dnd5SavingThrowsSchema = exports.dnd5SkillSchema = exports.dnd5AbilitiesSchema = exports.dnd5AbilitySchema = exports.dnd5StatisticsSchema = exports.dnd5StorySchema = exports.dnd5BiographySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.dnd5BiographySchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    class: typebox_1.Type.String(),
    level: typebox_1.Type.Integer(),
    background: typebox_1.Type.String(),
    race: typebox_1.Type.String(),
    alignment: typebox_1.Type.String(),
    description: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.dnd5StorySchema = typebox_1.Type.Object({
    backstory: typebox_1.Type.String(),
    personalityTraits: typebox_1.Type.String(),
    ideals: typebox_1.Type.String(),
    bonds: typebox_1.Type.String(),
    flaws: typebox_1.Type.String(),
    alliesAndOrganizations: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.dnd5StatisticsSchema = typebox_1.Type.Object({
    experiencePoints: typebox_1.Type.Integer(),
    inspiration: typebox_1.Type.Integer(),
    proficiencyBonus: typebox_1.Type.Integer(),
    passiveWisdom: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.dnd5AbilitySchema = typebox_1.Type.Object({
    modifier: typebox_1.Type.Integer(),
    score: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.dnd5AbilitiesSchema = typebox_1.Type.Object({
    strength: exports.dnd5AbilitySchema,
    dexterity: exports.dnd5AbilitySchema,
    constitution: exports.dnd5AbilitySchema,
    intelligence: exports.dnd5AbilitySchema,
    wisdom: exports.dnd5AbilitySchema,
    charisma: exports.dnd5AbilitySchema
}, {
    additionalProperties: false
});
exports.dnd5SkillSchema = typebox_1.Type.Object({
    modifier: typebox_1.Type.Integer(),
    proficient: typebox_1.Type.Boolean()
}, {
    additionalProperties: false
});
exports.dnd5SavingThrowsSchema = typebox_1.Type.Record(typebox_1.Type.KeyOf(exports.dnd5AbilitiesSchema), exports.dnd5SkillSchema, {
    additionalProperties: false
});
exports.dnd5SkillsSchema = typebox_1.Type.Object({
    acrobatics: exports.dnd5SkillSchema,
    animalHandling: exports.dnd5SkillSchema,
    arcana: exports.dnd5SkillSchema,
    athletics: exports.dnd5SkillSchema,
    deception: exports.dnd5SkillSchema,
    history: exports.dnd5SkillSchema,
    insight: exports.dnd5SkillSchema,
    intimidation: exports.dnd5SkillSchema,
    investigation: exports.dnd5SkillSchema,
    medicine: exports.dnd5SkillSchema,
    nature: exports.dnd5SkillSchema,
    perception: exports.dnd5SkillSchema,
    performance: exports.dnd5SkillSchema,
    persuasion: exports.dnd5SkillSchema,
    religion: exports.dnd5SkillSchema,
    sleightOfHand: exports.dnd5SkillSchema,
    stealth: exports.dnd5SkillSchema,
    survival: exports.dnd5SkillSchema
}, {
    additionalProperties: false
});
exports.dnd5HitPointsSchema = typebox_1.Type.Object({
    maximum: typebox_1.Type.Integer(),
    current: typebox_1.Type.Integer(),
    temporary: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.dnd5DeathSavesSchema = typebox_1.Type.Object({
    successes: typebox_1.Type.Integer(),
    failures: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.dnd5CombatSchema = typebox_1.Type.Object({
    armorClass: typebox_1.Type.Integer(),
    initiative: typebox_1.Type.Integer(),
    speed: typebox_1.Type.Integer(),
    hitPoints: exports.dnd5HitPointsSchema,
    hitDice: typebox_1.Type.String(),
    deathSaves: exports.dnd5DeathSavesSchema
}, {
    additionalProperties: false
});
exports.dnd5AttackSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    attackBonus: typebox_1.Type.Integer(),
    damage: typebox_1.Type.String(),
    type: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.dnd5FeaturesSchema = typebox_1.Type.Object({
    featuresAndTraits: typebox_1.Type.String(),
    proficienciesAndLanguages: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.dnd5MoneySchema = typebox_1.Type.Object({
    copper: typebox_1.Type.Integer(),
    silver: typebox_1.Type.Integer(),
    electrum: typebox_1.Type.Integer(),
    gold: typebox_1.Type.Integer(),
    platinum: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.dnd5EquipmentSchema = typebox_1.Type.Object({
    money: exports.dnd5MoneySchema,
    items: typebox_1.Type.String(),
    treasure: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.dnd5SpellSchema = typebox_1.Type.Object({
    prepared: typebox_1.Type.Boolean(),
    name: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.dnd5SpellLevelSchema = typebox_1.Type.Object({
    level: typebox_1.Type.Integer(),
    slotsTotal: typebox_1.Type.Integer(),
    slotsExpended: typebox_1.Type.Integer(),
    spells: typebox_1.Type.Array(exports.dnd5SpellSchema)
}, {
    additionalProperties: false
});
exports.dnd5SpellcastingSchema = typebox_1.Type.Object({
    class: typebox_1.Type.String(),
    spellAbility: typebox_1.Type.Integer(),
    spellSaveDC: typebox_1.Type.Integer(),
    spellAttackBonus: typebox_1.Type.Integer(),
    cantrips: typebox_1.Type.Array(typebox_1.Type.String()),
    levels: typebox_1.Type.Array(exports.dnd5SpellLevelSchema)
}, {
    additionalProperties: false
});
exports.dnd5CharacterSchema = typebox_1.Type.Object({
    biography: exports.dnd5BiographySchema,
    story: exports.dnd5StorySchema,
    statistics: exports.dnd5StatisticsSchema,
    abilities: exports.dnd5AbilitiesSchema,
    savingThrows: exports.dnd5SavingThrowsSchema,
    skills: exports.dnd5SkillsSchema,
    combat: exports.dnd5CombatSchema,
    attacks: typebox_1.Type.Array(exports.dnd5AttackSchema),
    features: exports.dnd5FeaturesSchema,
    spellcasting: exports.dnd5SpellcastingSchema,
    equipment: exports.dnd5EquipmentSchema
}, {
    additionalProperties: false
});
