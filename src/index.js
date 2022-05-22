const cocSchema = require('./callOfCthulhu/schema.json');
const cocDefault = require('./callOfCthulhu/default');
const dnd5Schema = require('./dnd5/schema.json');
const dnd5Default = require('./dnd5/default');
const swd6Schema = require('./starWarsD6/schema.json');
const swd6Default = require('./starWarsD6/default');

module.exports = {
    callOfCthulhu: {
        schema: cocSchema,
        default: cocDefault
    },
    dnd5: {
        schema: dnd5Schema,
        default: dnd5Default
    },
    starWarsD6: {
        schema: swd6Schema,
        default: swd6Default
    }
};
