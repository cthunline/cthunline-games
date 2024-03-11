"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seventhSeaCharacterSchema = exports.seventhSeaAdvantageSchema = exports.seventhSeaSkillsSchema = exports.seventhSeaTraitsSchema = exports.seventhSeaStorySchema = exports.seventhSeaBackgroundSchema = exports.seventhSeaArcanaSchema = exports.seventhSeaBiographySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.seventhSeaBiographySchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    concept: typebox_1.Type.String(),
    nation: typebox_1.Type.String(),
    religion: typebox_1.Type.String(),
    reputations: typebox_1.Type.String(),
    wealth: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.seventhSeaArcanaSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    virtue: typebox_1.Type.String(),
    hubris: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.seventhSeaBackgroundSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    quirk: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.seventhSeaStorySchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    goal: typebox_1.Type.String(),
    reward: typebox_1.Type.String(),
    steps: typebox_1.Type.Array(typebox_1.Type.String())
}, {
    additionalProperties: false
});
exports.seventhSeaTraitsSchema = typebox_1.Type.Object({
    brawn: typebox_1.Type.Integer(),
    finesse: typebox_1.Type.Integer(),
    resolve: typebox_1.Type.Integer(),
    wits: typebox_1.Type.Integer(),
    panache: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.seventhSeaSkillsSchema = typebox_1.Type.Object({
    aim: typebox_1.Type.Integer(),
    athletics: typebox_1.Type.Integer(),
    brawl: typebox_1.Type.Integer(),
    convince: typebox_1.Type.Integer(),
    empathy: typebox_1.Type.Integer(),
    hide: typebox_1.Type.Integer(),
    intimidate: typebox_1.Type.Integer(),
    notice: typebox_1.Type.Integer(),
    perform: typebox_1.Type.Integer(),
    ride: typebox_1.Type.Integer(),
    sailing: typebox_1.Type.Integer(),
    scholarship: typebox_1.Type.Integer(),
    tempt: typebox_1.Type.Integer(),
    theft: typebox_1.Type.Integer(),
    warfare: typebox_1.Type.Integer(),
    weaponry: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.seventhSeaAdvantageSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    description: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.seventhSeaCharacterSchema = typebox_1.Type.Object({
    biography: exports.seventhSeaBiographySchema,
    heroPoints: typebox_1.Type.Integer(),
    arcana: exports.seventhSeaArcanaSchema,
    backgrounds: typebox_1.Type.Array(exports.seventhSeaBackgroundSchema),
    stories: typebox_1.Type.Array(exports.seventhSeaStorySchema),
    traits: exports.seventhSeaTraitsSchema,
    skills: exports.seventhSeaSkillsSchema,
    deathSpiral: typebox_1.Type.Integer(),
    advantages: typebox_1.Type.Array(exports.seventhSeaAdvantageSchema),
    items: typebox_1.Type.String(),
    notes: typebox_1.Type.String()
}, {
    additionalProperties: false
});
