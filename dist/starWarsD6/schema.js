import { Type } from '@sinclair/typebox';
export const swd6BiographySchema = Type.Object({
    name: Type.String(),
    occupation: Type.String(),
    species: Type.String(),
    age: Type.Integer(),
    height: Type.String(),
    weight: Type.String(),
    description: Type.String()
}, {
    additionalProperties: false
});
export const swd6SkillSchema = Type.Object({
    name: Type.String(),
    value: Type.String()
}, {
    additionalProperties: false
});
export const swd6AttributeDataSchema = Type.Object({
    value: Type.String(),
    skills: Type.Array(swd6SkillSchema)
}, {
    additionalProperties: false
});
export const swd6AttributesSchema = Type.Object({
    dexterity: swd6AttributeDataSchema,
    knowledge: swd6AttributeDataSchema,
    mechanical: swd6AttributeDataSchema,
    perception: swd6AttributeDataSchema,
    strength: swd6AttributeDataSchema,
    technical: swd6AttributeDataSchema
}, {
    additionalProperties: false
});
export const swd6StatisticsSchema = Type.Object({
    move: Type.Integer(),
    forceSensitive: Type.Boolean(),
    forcePoints: Type.Integer(),
    darkSidePoints: Type.Integer(),
    characterPoints: Type.Integer()
}, {
    additionalProperties: false
});
export const swd6WoundStatusSchema = Type.Object({
    stunned: Type.Boolean(),
    wounded: Type.Boolean(),
    doublyWounded: Type.Boolean(),
    incapacitated: Type.Boolean(),
    mortallyWounded: Type.Boolean()
}, {
    additionalProperties: false
});
export const swd6StorySchema = Type.Object({
    equipment: Type.String(),
    background: Type.String(),
    personality: Type.String(),
    objectives: Type.String(),
    quote: Type.String(),
    connections: Type.String()
}, {
    additionalProperties: false
});
export const swd6WeaponSchema = Type.Object({
    name: Type.String(),
    damage: Type.String(),
    shortRange: Type.String(),
    mediumRange: Type.String(),
    longRange: Type.String(),
    ammo: Type.String()
}, {
    additionalProperties: false
});
export const swd6CharacterSchema = Type.Object({
    biography: swd6BiographySchema,
    attributes: swd6AttributesSchema,
    abilities: Type.Array(Type.String()),
    statistics: swd6StatisticsSchema,
    woundStatus: swd6WoundStatusSchema,
    weapons: Type.Array(swd6WeaponSchema),
    story: swd6StorySchema
}, {
    additionalProperties: false
});
