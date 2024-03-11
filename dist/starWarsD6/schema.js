"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swd6CharacterSchema = exports.swd6WeaponSchema = exports.swd6StorySchema = exports.swd6WoundStatusSchema = exports.swd6StatisticsSchema = exports.swd6AttributesSchema = exports.swd6AttributeDataSchema = exports.swd6SkillSchema = exports.swd6BiographySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.swd6BiographySchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    occupation: typebox_1.Type.String(),
    species: typebox_1.Type.String(),
    age: typebox_1.Type.Integer(),
    height: typebox_1.Type.String(),
    weight: typebox_1.Type.String(),
    description: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.swd6SkillSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    value: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.swd6AttributeDataSchema = typebox_1.Type.Object({
    value: typebox_1.Type.String(),
    skills: typebox_1.Type.Array(exports.swd6SkillSchema)
}, {
    additionalProperties: false
});
exports.swd6AttributesSchema = typebox_1.Type.Object({
    dexterity: exports.swd6AttributeDataSchema,
    knowledge: exports.swd6AttributeDataSchema,
    mechanical: exports.swd6AttributeDataSchema,
    perception: exports.swd6AttributeDataSchema,
    strength: exports.swd6AttributeDataSchema,
    technical: exports.swd6AttributeDataSchema
}, {
    additionalProperties: false
});
exports.swd6StatisticsSchema = typebox_1.Type.Object({
    move: typebox_1.Type.Integer(),
    forceSensitive: typebox_1.Type.Boolean(),
    forcePoints: typebox_1.Type.Integer(),
    darkSidePoints: typebox_1.Type.Integer(),
    characterPoints: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.swd6WoundStatusSchema = typebox_1.Type.Object({
    stunned: typebox_1.Type.Boolean(),
    wounded: typebox_1.Type.Boolean(),
    doublyWounded: typebox_1.Type.Boolean(),
    incapacitated: typebox_1.Type.Boolean(),
    mortallyWounded: typebox_1.Type.Boolean()
}, {
    additionalProperties: false
});
exports.swd6StorySchema = typebox_1.Type.Object({
    equipment: typebox_1.Type.String(),
    background: typebox_1.Type.String(),
    personality: typebox_1.Type.String(),
    objectives: typebox_1.Type.String(),
    quote: typebox_1.Type.String(),
    connections: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.swd6WeaponSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    damage: typebox_1.Type.String(),
    shortRange: typebox_1.Type.String(),
    mediumRange: typebox_1.Type.String(),
    longRange: typebox_1.Type.String(),
    ammo: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.swd6CharacterSchema = typebox_1.Type.Object({
    biography: exports.swd6BiographySchema,
    attributes: exports.swd6AttributesSchema,
    abilities: typebox_1.Type.Array(typebox_1.Type.String()),
    statistics: exports.swd6StatisticsSchema,
    woundStatus: exports.swd6WoundStatusSchema,
    weapons: typebox_1.Type.Array(exports.swd6WeaponSchema),
    story: exports.swd6StorySchema
}, {
    additionalProperties: false
});
