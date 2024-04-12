import { Type } from '@sinclair/typebox';
export const dnd5BiographySchema = Type.Object({
    name: Type.String(),
    class: Type.String(),
    level: Type.Integer(),
    background: Type.String(),
    race: Type.String(),
    alignment: Type.String(),
    description: Type.String()
}, {
    additionalProperties: false
});
export const dnd5StorySchema = Type.Object({
    backstory: Type.String(),
    personalityTraits: Type.String(),
    ideals: Type.String(),
    bonds: Type.String(),
    flaws: Type.String(),
    alliesAndOrganizations: Type.String()
}, {
    additionalProperties: false
});
export const dnd5StatisticsSchema = Type.Object({
    experiencePoints: Type.Integer(),
    inspiration: Type.Integer(),
    proficiencyBonus: Type.Integer(),
    passiveWisdom: Type.Integer()
}, {
    additionalProperties: false
});
export const dnd5AbilitySchema = Type.Object({
    modifier: Type.Integer(),
    score: Type.Integer()
}, {
    additionalProperties: false
});
export const dnd5AbilitiesSchema = Type.Object({
    strength: dnd5AbilitySchema,
    dexterity: dnd5AbilitySchema,
    constitution: dnd5AbilitySchema,
    intelligence: dnd5AbilitySchema,
    wisdom: dnd5AbilitySchema,
    charisma: dnd5AbilitySchema
}, {
    additionalProperties: false
});
export const dnd5SkillSchema = Type.Object({
    modifier: Type.Integer(),
    proficient: Type.Boolean()
}, {
    additionalProperties: false
});
export const dnd5SavingThrowsSchema = Type.Record(Type.KeyOf(dnd5AbilitiesSchema), dnd5SkillSchema, {
    additionalProperties: false
});
export const dnd5SkillsSchema = Type.Object({
    acrobatics: dnd5SkillSchema,
    animalHandling: dnd5SkillSchema,
    arcana: dnd5SkillSchema,
    athletics: dnd5SkillSchema,
    deception: dnd5SkillSchema,
    history: dnd5SkillSchema,
    insight: dnd5SkillSchema,
    intimidation: dnd5SkillSchema,
    investigation: dnd5SkillSchema,
    medicine: dnd5SkillSchema,
    nature: dnd5SkillSchema,
    perception: dnd5SkillSchema,
    performance: dnd5SkillSchema,
    persuasion: dnd5SkillSchema,
    religion: dnd5SkillSchema,
    sleightOfHand: dnd5SkillSchema,
    stealth: dnd5SkillSchema,
    survival: dnd5SkillSchema
}, {
    additionalProperties: false
});
export const dnd5HitPointsSchema = Type.Object({
    maximum: Type.Integer(),
    current: Type.Integer(),
    temporary: Type.Integer()
}, {
    additionalProperties: false
});
export const dnd5DeathSavesSchema = Type.Object({
    successes: Type.Integer(),
    failures: Type.Integer()
}, {
    additionalProperties: false
});
export const dnd5CombatSchema = Type.Object({
    armorClass: Type.Integer(),
    initiative: Type.Integer(),
    speed: Type.Integer(),
    hitPoints: dnd5HitPointsSchema,
    hitDice: Type.String(),
    deathSaves: dnd5DeathSavesSchema
}, {
    additionalProperties: false
});
export const dnd5AttackSchema = Type.Object({
    name: Type.String(),
    attackBonus: Type.Integer(),
    damage: Type.String(),
    type: Type.String()
}, {
    additionalProperties: false
});
export const dnd5FeaturesSchema = Type.Object({
    featuresAndTraits: Type.String(),
    proficienciesAndLanguages: Type.String()
}, {
    additionalProperties: false
});
export const dnd5MoneySchema = Type.Object({
    copper: Type.Integer(),
    silver: Type.Integer(),
    electrum: Type.Integer(),
    gold: Type.Integer(),
    platinum: Type.Integer()
}, {
    additionalProperties: false
});
export const dnd5EquipmentSchema = Type.Object({
    money: dnd5MoneySchema,
    items: Type.String(),
    treasure: Type.String()
}, {
    additionalProperties: false
});
export const dnd5SpellSchema = Type.Object({
    prepared: Type.Boolean(),
    name: Type.String()
}, {
    additionalProperties: false
});
export const dnd5SpellLevelSchema = Type.Object({
    level: Type.Integer(),
    slotsTotal: Type.Integer(),
    slotsExpended: Type.Integer(),
    spells: Type.Array(dnd5SpellSchema)
}, {
    additionalProperties: false
});
export const dnd5SpellcastingSchema = Type.Object({
    class: Type.String(),
    spellAbility: Type.Integer(),
    spellSaveDC: Type.Integer(),
    spellAttackBonus: Type.Integer(),
    cantrips: Type.Array(Type.String()),
    levels: Type.Array(dnd5SpellLevelSchema)
}, {
    additionalProperties: false
});
export const dnd5CharacterSchema = Type.Object({
    biography: dnd5BiographySchema,
    story: dnd5StorySchema,
    statistics: dnd5StatisticsSchema,
    abilities: dnd5AbilitiesSchema,
    savingThrows: dnd5SavingThrowsSchema,
    skills: dnd5SkillsSchema,
    combat: dnd5CombatSchema,
    attacks: Type.Array(dnd5AttackSchema),
    features: dnd5FeaturesSchema,
    spellcasting: dnd5SpellcastingSchema,
    equipment: dnd5EquipmentSchema
}, {
    additionalProperties: false
});
