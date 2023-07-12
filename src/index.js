const { cocCharacterSchema } = require('./callOfCthulhu/schema');
const cocDefault = require('./callOfCthulhu/default');

const { dnd5CharacterSchema } = require('./dnd5/schema');
const dnd5Default = require('./dnd5/default');

const { seventhSeaCharacterSchema } = require('./seventhSea/schema');
const seventhSeaDefault = require('./seventhSea/default');

const { swd6CharacterSchema } = require('./starWarsD6/schema');
const swd6Default = require('./starWarsD6/default');

module.exports = {
    callOfCthulhu: {
        schema: cocCharacterSchema,
        default: cocDefault
    },
    dnd5: {
        schema: dnd5CharacterSchema,
        default: dnd5Default
    },
    seventhSea: {
        schema: seventhSeaCharacterSchema,
        default: seventhSeaDefault
    },
    starWarsD6: {
        schema: swd6CharacterSchema,
        default: swd6Default
    }
};
