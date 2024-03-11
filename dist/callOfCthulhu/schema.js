"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cocCharacterSchema = exports.cocStorySchema = exports.cocWeaponSchema = exports.cocCombatSchema = exports.cocSkillSchema = exports.cocStatusSchema = exports.cocCharacteristicsSchema = exports.cocSanitySchema = exports.cocLuckSchema = exports.cocPointsSchema = exports.cocPointSchema = exports.cocCharacteristicSchema = exports.cocBiographySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.cocBiographySchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    birthPlace: typebox_1.Type.String(),
    occupation: typebox_1.Type.String(),
    residence: typebox_1.Type.String(),
    age: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.cocCharacteristicSchema = typebox_1.Type.Object({
    regular: typebox_1.Type.Integer(),
    half: typebox_1.Type.Integer(),
    fifth: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.cocPointSchema = typebox_1.Type.Object({
    maximum: typebox_1.Type.Integer(),
    current: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.cocPointsSchema = typebox_1.Type.Object({
    hitPoints: exports.cocPointSchema,
    magicPoints: exports.cocPointSchema
}, {
    additionalProperties: false
});
exports.cocLuckSchema = typebox_1.Type.Object({
    starting: typebox_1.Type.Integer(),
    current: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.cocSanitySchema = typebox_1.Type.Object({
    starting: typebox_1.Type.Integer(),
    maximum: typebox_1.Type.Integer(),
    current: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.cocCharacteristicsSchema = typebox_1.Type.Object({
    strength: exports.cocCharacteristicSchema,
    constitution: exports.cocCharacteristicSchema,
    size: exports.cocCharacteristicSchema,
    dexterity: exports.cocCharacteristicSchema,
    appearance: exports.cocCharacteristicSchema,
    intelligence: exports.cocCharacteristicSchema,
    power: exports.cocCharacteristicSchema,
    education: exports.cocCharacteristicSchema
}, {
    additionalProperties: false
});
exports.cocStatusSchema = typebox_1.Type.Object({
    temporaryInsanity: typebox_1.Type.Boolean(),
    indefiniteInsanity: typebox_1.Type.Boolean(),
    majorWound: typebox_1.Type.Boolean(),
    unconscious: typebox_1.Type.Boolean(),
    dying: typebox_1.Type.Boolean()
}, {
    additionalProperties: false
});
exports.cocSkillSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    base: typebox_1.Type.String(),
    development: typebox_1.Type.Boolean(),
    developed: typebox_1.Type.Boolean(),
    regular: typebox_1.Type.Integer(),
    half: typebox_1.Type.Integer(),
    fifth: typebox_1.Type.Integer()
}, {
    additionalProperties: false
});
exports.cocCombatSchema = typebox_1.Type.Object({
    move: typebox_1.Type.Integer(),
    build: typebox_1.Type.String(),
    damageBonus: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.cocWeaponSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    damage: typebox_1.Type.String(),
    attacks: typebox_1.Type.String(),
    range: typebox_1.Type.String(),
    ammo: typebox_1.Type.String(),
    malfunction: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.cocStorySchema = typebox_1.Type.Object({
    story: typebox_1.Type.String(),
    personalDescription: typebox_1.Type.String(),
    ideologyAndBeliefs: typebox_1.Type.String(),
    significantPeople: typebox_1.Type.String(),
    meaningfulLocations: typebox_1.Type.String(),
    treasuredPossessions: typebox_1.Type.String(),
    traits: typebox_1.Type.String(),
    injuriesAndScars: typebox_1.Type.String(),
    phobiasAndManias: typebox_1.Type.String(),
    arcaneTomesAndSpells: typebox_1.Type.String(),
    encountersWithStrangeEntities: typebox_1.Type.String(),
    gearAndPossessions: typebox_1.Type.String(),
    fellowInvestigators: typebox_1.Type.String(),
    spendingLevel: typebox_1.Type.String(),
    cash: typebox_1.Type.String(),
    assets: typebox_1.Type.String()
}, {
    additionalProperties: false
});
exports.cocCharacterSchema = typebox_1.Type.Object({
    biography: exports.cocBiographySchema,
    characteristics: exports.cocCharacteristicsSchema,
    points: exports.cocPointsSchema,
    luck: exports.cocLuckSchema,
    sanity: exports.cocSanitySchema,
    status: exports.cocStatusSchema,
    skills: typebox_1.Type.Array(exports.cocSkillSchema),
    combat: exports.cocCombatSchema,
    weapons: typebox_1.Type.Array(exports.cocWeaponSchema),
    story: exports.cocStorySchema
}, {
    additionalProperties: false
});
